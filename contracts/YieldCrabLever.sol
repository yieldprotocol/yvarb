// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

import "./YieldLeverBase.sol";
import "@yield-protocol/yieldspace-tv/src/interfaces/IMaturingToken.sol";
import "@yield-protocol/utils-v2/contracts/interfaces/IWETH9.sol";
import "forge-std/console.sol";

interface ICrabStrategy {
    function totalSupply() external view returns (uint256);

    function balanceOf(address _user) external view returns (uint256);

    /**
     * @notice get the vault composition of the strategy
     * @return operator
     * @return nft collateral id
     * @return collateral amount
     * @return short amount
     */
    function getVaultDetails()
        external
        view
        returns (
            address,
            uint256,
            uint256,
            uint256
        );

    /**
     * @notice flash deposit into strategy, providing ETH, selling wSqueeth and receiving strategy tokens
     * @dev this function will execute a flash swap where it receives ETH, deposits and mints using flash swap proceeds and msg.value, and then repays the flash swap with wSqueeth
     * @dev _ethToDeposit must be less than msg.value plus the proceeds from the flash swap
     * @dev the difference between _ethToDeposit and msg.value provides the minimum that a user can receive for their sold wSqueeth
     * @param _ethToDeposit total ETH that will be deposited in to the strategy which is a combination of msg.value and flash swap proceeds
     * @param _poolFee Uniswap pool fee
     */
    function flashDeposit(uint256 _ethToDeposit, uint24 _poolFee)
        external
        payable;
}

interface ICurveSwap {
    function get_exchange_routing(
        address _initial,
        address _target,
        uint256 _amount
    )
        external
        returns (
            address[6] memory _route,
            uint256[8] memory _indices,
            uint256 _expected
        );

    function exchange(
        uint256 _amount,
        address[6] calldata _route,
        uint256[8] calldata _indices,
        uint256 _min_received,
        address _receiver
    ) external;
}

/// @notice This contracts allows a user to 'lever up' via StEth. The concept
///     is as follows: Using Yield, it is possible to borrow Weth, which in
///     turn can be used as collateral, which in turn can be used to borrow and
///     so on.
///
///     The way to do this in practice is by first borrowing the desired debt
///     through a flash loan and using this in additon to your own collateral.
///     The flash loan is repayed using funds borrowed using your collateral.
contract YieldCrabLever is YieldLeverBase {
    using TransferHelper for IERC20;
    using TransferHelper for IMaturingToken;
    using CastU128I128 for uint128;
    using CastU256U128 for uint256;

    /// @notice WEth.
    IWETH9 public constant weth =
        IWETH9(0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2);
    ICrabStrategy public constant crabStrategy =
        ICrabStrategy(0x3B960E47784150F5a63777201ee2B15253D713e8);

    ICurveSwap public constant curveSwap =
        ICurveSwap(0xfA9a30350048B2BF66865ee20363067c66f67e58);

    IERC20 public crab;
    bytes6 constant crabId = 0x333800000000;
    bytes6 constant wethId = 0x303000000000;
    bytes6 constant daiId = 0x303100000000;
    bytes6 constant usdcId = 0x303200000000;

    event Invested(
        bytes12 indexed vaultId,
        bytes6 seriesId,
        address indexed investor,
        uint256 investment,
        uint256 debt
    );

    constructor(Giver giver_) YieldLeverBase(giver_) {}

    function invest(
        Operation operation,
        bytes6 seriesId,
        bytes6 ilkId,
        uint256 amountToInvest,
        uint256 borrowAmount,
        uint256 minCollateral
    ) external payable returns (bytes12 vaultId) {
        if (operation != Operation.BORROW) revert OnlyBorrow();
        IPool pool = IPool(ladle.pools(seriesId));
        IMaturingToken fyToken = pool.fyToken();
        // Depend on ilkId we will have to choose the operation
        if (ilkId != wethId) {
            // transfer the amountToInvest to this contract
            pool.base().safeTransferFrom(
                msg.sender,
                address(this),
                amountToInvest
            );
        }
        // for ETH borrowing,
        // 1. flash borrow fyETH
        // 2. sell for ETH and combine with user ETH
        // 3. deposit to get Crab
        // 4. borrow against crab to payback flash loan

        //for USDC borrowing,
        // 1. flash borrow fyUSDC
        // 2. sell for USDC and combine with USDC
        // 3. sell USDC for ETH
        // 4. deposit to get Crab
        // 5. borrow against crab to payback flashloan

        // Build the vault
        (vaultId, ) = ladle.build(seriesId, crabId, 0);

        bytes memory data = bytes.concat(
            bytes1(uint8(uint256(operation))), //[0]
            seriesId, // [1:7]
            vaultId, // [7:19]
            ilkId, // [19:25]
            bytes32(amountToInvest), // [25:57]
            bytes32(borrowAmount), // [57:89]
            bytes32(minCollateral) // [89:121]
        );

        bool success = IERC3156FlashLender(address(fyToken)).flashLoan(
            this, // Loan Receiver
            address(fyToken), // Loan Token
            borrowAmount, // Loan Amount
            data
        );

        if (!success) revert FlashLoanFailure();

        DataTypes.Balances memory balances = cauldron.balances(vaultId);

        // This is the amount to deposit, so we check for slippage here. As
        // long as we end up with the desired amount, it doesn't matter what
        // slippage occurred where.
        if (balances.ink < minCollateral) revert SlippageFailure();

        giver.give(vaultId, msg.sender);

        emit Invested(
            vaultId,
            seriesId,
            msg.sender,
            balances.ink,
            balances.art
        );
    }

    function onFlashLoan(
        address initiator,
        address token, // The token, not checked as we check the lender address.
        uint256 borrowAmount,
        uint256 fee,
        bytes calldata data
    ) external override returns (bytes32 returnValue) {
        returnValue = FLASH_LOAN_RETURN;
        Operation status = Operation(uint256(uint8(data[0])));
        bytes6 seriesId = bytes6(data[1:7]);
        bytes12 vaultId = bytes12(data[7:19]);
        bytes6 ilkId = bytes6(data[19:25]);

        // Test that the lender is either a fyToken contract or the join.
        if (
            msg.sender != address(IPool(ladle.pools(seriesId)).fyToken()) &&
            msg.sender != address(ladle.joins(seriesId & ASSET_ID_MASK))
        ) revert FlashLoanFailure();
        // We trust the lender, so now we can check that we were the initiator.
        if (initiator != address(this)) revert FlashLoanFailure();

        // Now that we trust the lender, we approve the flash loan repayment
        IERC20(token).safeApprove(msg.sender, borrowAmount + fee);

        if (status == Operation.BORROW) {
            uint256 baseAmount = uint256(bytes32(data[25:57]));
            uint256 minCollateral = uint256(bytes32(data[89:121]));
            _borrow(
                vaultId,
                seriesId,
                ilkId,
                baseAmount,
                borrowAmount,
                fee,
                minCollateral
            );
        } else if (status == Operation.REPAY) {} else if (
            status == Operation.CLOSE
        ) {}
    }

    /// @notice This function is called from within the flash loan. The high
    ///     level functionality is as follows:
    /// @param vaultId The vault id to put collateral into and borrow from.
    /// @param seriesId The pool (and thereby series) to borrow from.
    /// @param ilkId a
    /// @param baseAmount The amount of own collateral to supply.
    /// @param borrowAmount The amount of FYWeth borrowed in the flash loan.
    /// @param fee The fee that will be issued by the flash loan.
    /// @param minCollateral The final amount of collateral to end up with, or
    ///     the function will revert. Used to prevent slippage.
    function _borrow(
        bytes12 vaultId,
        bytes6 seriesId,
        bytes6 ilkId,
        uint256 baseAmount,
        uint256 borrowAmount,
        uint256 fee,
        uint256 minCollateral
    ) internal {
        IPool pool = IPool(ladle.pools(seriesId));
        IMaturingToken fyToken = pool.fyToken();
        // Get base by selling borrowed FYTokens.
        fyToken.safeTransfer(address(pool), borrowAmount - fee);

        uint256 baseReceived = pool.sellFYToken(address(this), 0);

        if (ilkId == wethId) {
            weth.withdraw(baseReceived);
        } else if (ilkId == daiId || ilkId == usdcId) {
            // Sell dai/usdc to get eth
            baseReceived = IERC20(cauldron.assets(ilkId)).balanceOf(
                address(this)
            );
            IERC20(cauldron.assets(ilkId)).approve(
                address(curveSwap),
                baseReceived
            );

            (
                address[6] memory _route,
                uint256[8] memory _indices,
                uint256 _expected
            ) = curveSwap.get_exchange_routing(
                    cauldron.assets(ilkId),
                    0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE,
                    baseReceived
                );
            curveSwap.exchange(
                baseReceived,
                _route,
                _indices,
                0,
                address(this)
            );
        } else {
            revert();
        }

        // deposit to get Crab
        crabStrategy.flashDeposit{value: address(this).balance}(
            address(this).balance,
            3000
        );

        uint256 crabBalance = crabStrategy.balanceOf(address(this));
        IERC20(address(crabStrategy)).safeApprove(
            address(ladle.joins(crabId)),
            crabBalance
        );

        // borrow against crab to payback flashloan
        ladle.pour(
            vaultId,
            address(this),
            crabBalance.u128().i128(),
            borrowAmount.u128().i128()
        );
    }

    receive() external payable {}
}
