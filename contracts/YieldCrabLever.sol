// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

import "./YieldLeverBase.sol";
import "@yield-protocol/yieldspace-tv/src/interfaces/IMaturingToken.sol";
import "@yield-protocol/utils-v2/contracts/interfaces/IWETH9.sol";
import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";

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

    /**
     * @notice flash withdraw from strategy, providing strategy tokens, buying wSqueeth, burning and receiving ETH
     * @dev this function will execute a flash swap where it receives wSqueeth, burns, withdraws ETH and then repays the flash swap with ETH
     * @param _crabAmount strategy token amount to burn
     * @param _maxEthToPay maximum ETH to pay to buy back the wSqueeth debt
     * @param _poolFee Uniswap pool fee

     */
    function flashWithdraw(
        uint256 _crabAmount,
        uint256 _maxEthToPay,
        uint24 _poolFee
    ) external;
}

/// @title A contract to help users build levered position on crab strategy token
///        using ETH/WETH/DAI/USDC as collateral
/// @author iamsahu
/// @notice Each external function has the details on how this works
contract YieldCrabLever is YieldLeverBase {
    using TransferHelper for IERC20;
    using TransferHelper for IMaturingToken;
    using CastU128I128 for uint128;
    using CastU256U128 for uint256;

    ICrabStrategy public constant crabStrategy =
        ICrabStrategy(0x3B960E47784150F5a63777201ee2B15253D713e8);

    ISwapRouter public constant swapRouter =
        ISwapRouter(0xE592427A0AEce92De3Edee1F18E0157C05861564);
    IERC20 public crab;
    bytes6 public constant crabId = 0x333800000000;
    bytes6 public constant wethId = 0x303000000000;
    bytes6 public constant daiId = 0x303100000000;
    bytes6 public constant usdcId = 0x303200000000;

    constructor(Giver giver_) YieldLeverBase(giver_) {}

    /// @notice Invest by creating a levered vault.
    /// The steps are as follows:
    /// 1. Based on the ilk transfer it from the user
    /// @param seriesId The series to invest in
    /// @param ilkId The collateral to use
    /// @param amountToInvest The amount of ETH/WETH/DAI/USDC supplied by the user
    /// @param borrowAmount The amount of fyToken to be borrowed
    /// @param minCollateral to be received
    function invest(
        bytes6 seriesId,
        bytes6 ilkId,
        uint256 amountToInvest,
        uint256 borrowAmount,
        uint256 minCollateral
    ) external payable returns (bytes12 vaultId) {
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
        } else {
            if (msg.value == 0) {
                // We are dealing with WETH so we need to transfer it from the
                pool.base().safeTransferFrom(
                    msg.sender,
                    address(this),
                    amountToInvest
                );
            }
        }

        // Build the vault
        (vaultId, ) = ladle.build(seriesId, crabId, 0);

        bytes memory data = bytes.concat(
            bytes1(uint8(uint256(Operation.BORROW))), //[0]
            seriesId, // [1:7]
            vaultId, // [7:19]
            ilkId, // [19:25]
            bytes32(amountToInvest) // [25:57]
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

        if (address(this).balance > 0)
            payable(msg.sender).call{value: address(this).balance}("");

        emit Invested(
            vaultId,
            seriesId,
            msg.sender,
            balances.ink,
            balances.art
        );
    }

    /// @notice Divest, either before or after maturity.
    /// @param vaultId The vault to divest from.
    /// @param seriesId The series
    /// @param ilkId The ilkId
    /// @param ink The amount of collateral to recover.
    /// @param art The amount of debt to repay.
    /// @param minBaseOut Used to minimize slippage. The transaction will revert
    ///     if we don't obtain at least this much of the base asset.
    function divest(
        bytes12 vaultId,
        bytes6 seriesId,
        bytes6 ilkId,
        uint256 ink,
        uint256 art,
        uint256 minBaseOut
    ) external {
        // Test that the caller is the owner of the vault.
        // This is important as we will take the vault from the user.
        require(cauldron.vaults(vaultId).owner == msg.sender);

        // Give the vault to the contract
        giver.seize(vaultId, address(this));

        // Check if we're pre or post maturity.
        bool success;
        if (uint32(block.timestamp) > cauldron.series(seriesId).maturity) {
            bytes memory data = bytes.concat(
                bytes1(bytes1(uint8(uint256(Operation.CLOSE)))), // [0:1]
                seriesId, // [1:7]
                vaultId, // [7:19]
                ilkId, // [19:25]
                bytes32(ink), // [25:57]
                bytes32(art)
            );

            address join = address(ladle.joins(seriesId & ASSET_ID_MASK));

            // Close:
            // Series is not past maturity, borrow and move directly to collateral pool.
            // We have a debt in terms of fyToken, but should pay back in base.
            uint128 base = cauldron.debtToBase(seriesId, art.u128());
            success = IERC3156FlashLender(join).flashLoan(
                this, // Loan Receiver
                address(IJoin(join).asset()), // Loan Token
                base, // Loan Amount
                data
            );
        } else {
            IPool pool = IPool(ladle.pools(seriesId));
            IMaturingToken fyToken = pool.fyToken();
            // Repay:
            // Series is not past maturity.
            // Borrow to repay debt, move directly to the pool.
            bytes memory data = bytes.concat(
                bytes1(bytes1(uint8(uint256(Operation.REPAY)))), // [0:1]
                seriesId, // [1:7]
                vaultId, // [7:19]
                ilkId, // [19:25]
                bytes32(ink), // [25:57]
                bytes32(art) // [57:89]
            );
            success = IERC3156FlashLender(address(fyToken)).flashLoan(
                this, // Loan Receiver
                address(fyToken), // Loan Token
                art, // Loan Amount: borrow exactly the debt to repay.
                data
            );
            require(IERC20(address(fyToken)).balanceOf(address(this)) == 0);
        }
        if (!success) revert FlashLoanFailure();
        IERC20 token = IERC20(cauldron.assets(ilkId));
        uint256 tokenBalance = token.balanceOf(address(this));
        if (tokenBalance < minBaseOut) revert SlippageFailure();
        // Transferring the leftover to the user
        token.safeTransfer(msg.sender, tokenBalance);
        // Give the vault back to the sender, just in case there is anything left
        giver.give(vaultId, msg.sender);
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

        if (status == Operation.BORROW) {
            IERC20(token).safeApprove(msg.sender, borrowAmount + fee);
            _borrow(
                vaultId,
                seriesId,
                ilkId,
                uint256(bytes32(data[25:57])),
                borrowAmount,
                fee
            );
        } else if (status == Operation.REPAY) {
            IERC20(token).safeApprove(msg.sender, borrowAmount + fee);
            _repay(
                vaultId,
                seriesId,
                ilkId,
                borrowAmount + fee,
                uint256(bytes32(data[25:57])), //ink
                uint256(bytes32(data[57:89])) //art
            );
        } else if (status == Operation.CLOSE) {
            IERC20(token).safeApprove(msg.sender, 2 * borrowAmount + fee);
            _close(
                vaultId,
                seriesId,
                ilkId,
                uint256(bytes32(data[25:57])), //ink
                uint256(bytes32(data[57:89])) //art
            );
        }
    }

    /// @notice This function is called from within the flash loan. The high
    ///     level functionality is as follows:
    ///     for ETH borrowing,
    ///      1. flash borrow fyETH
    ///      2. sell for ETH and combine with user ETH
    ///      3. deposit to get Crab
    ///      4. borrow against crab to payback flash loan
    ///
    ///     for USDC/DAI borrowing,
    ///      1. flash borrow fyUSDC
    ///      2. sell for USDC and combine with USDC
    ///      3. sell USDC for ETH
    ///      4. deposit to get Crab
    ///      5. borrow against crab to payback flashloan
    /// @param vaultId The vault id to put collateral into and borrow from.
    /// @param seriesId The pool (and thereby series) to borrow from.
    /// @param ilkId a
    /// @param amountToInvest The amount of FYWeth borrowed in the flash loan.
    /// @param borrowAmount The amount of FYWeth borrowed in the flash loan.
    /// @param fee The fee that will be issued by the flash loan.
    function _borrow(
        bytes12 vaultId,
        bytes6 seriesId,
        bytes6 ilkId,
        uint256 amountToInvest,
        uint256 borrowAmount,
        uint256 fee
    ) internal {
        IPool pool = IPool(ladle.pools(seriesId));
        IMaturingToken fyToken = pool.fyToken();
        // Get base by selling borrowed FYTokens.
        fyToken.safeTransfer(address(pool), borrowAmount - fee);

        uint256 baseReceived = pool.sellFYToken(address(this), 0);

        if (ilkId == wethId) {
            if (address(this).balance == amountToInvest)
                weth.withdraw(baseReceived);
            else weth.withdraw(baseReceived + amountToInvest);
        } else if (ilkId == daiId || ilkId == usdcId) {
            // Swap dai/usdc to get weth & withdraw
            weth.withdraw(_uniswap(cauldron.assets(ilkId), address(weth)));
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

    function _uniswap(address tokenIn_, address tokenOut_)
        internal
        returns (uint256 amountReceived)
    {
        uint256 amountIn_ = IERC20(tokenIn_).balanceOf(address(this));
        IERC20(tokenIn_).approve(address(swapRouter), amountIn_);
        ISwapRouter.ExactInputSingleParams memory params = ISwapRouter
            .ExactInputSingleParams({
                tokenIn: tokenIn_,
                tokenOut: tokenOut_,
                fee: 3000,
                recipient: address(this),
                deadline: block.timestamp,
                amountIn: amountIn_,
                amountOutMinimum: 0,
                sqrtPriceLimitX96: 0
            });
        amountReceived = swapRouter.exactInputSingle(params);
    }

    /// @notice Unwind position and repay using fyToken
    /// Here are the steps:
    /// 1. Pay off the debt by using the flash borrowed fyToken
    /// 2. Flash withdraw the crab to get the ETH
    /// 3. Deposit ETH to get WETH
    /// 4. Swap WETH for USDC/DAI if ilk is USDC/DAI
    /// 5. Buy fyToken to pay back flash loan
    /// @param vaultId The vault to repay.
    /// @param seriesId The seriesId corresponding to the vault.
    /// @param ilkId The id of the strategy being invested.
    /// @param borrowAmountPlusFee The amount of fyToken that we have borrowed,
    ///     plus the fee. This should be our final balance.
    /// @param ink The amount of collateral to retake.
    /// @param art The debt to repay.
    function _repay(
        bytes12 vaultId,
        bytes6 seriesId,
        bytes6 ilkId,
        uint256 borrowAmountPlusFee,
        uint256 ink,
        uint256 art
    ) internal {
        IPool pool = IPool(ladle.pools(seriesId));
        address fyToken = address(pool.fyToken());

        // Payback debt to get back the underlying
        IERC20(fyToken).transfer(fyToken, art);
        ladle.pour(
            vaultId,
            address(this),
            -ink.u128().i128(),
            -art.u128().i128()
        );

        crabStrategy.flashWithdraw(ink, type(uint256).max, 3000);

        weth.deposit{value: address(this).balance}();
        if (ilkId != wethId) {
            _uniswap(address(weth), cauldron.assets(ilkId));
        }

        uint128 fyTokenToBuy = borrowAmountPlusFee.u128();
        pool.base().transfer(
            address(pool),
            pool.buyFYTokenPreview(fyTokenToBuy) + 1
        );

        pool.buyFYToken(address(this), fyTokenToBuy, 0);
    }

    /// @notice Unwind position using the base asset and redeeming any fyToken
    /// Here are the steps:
    /// 1. Close the position with the flashloaned WETH/USDC/DAI
    /// 2. Withdraw the crab received to get ETH
    /// 3. Deposit ETH to get WETH
    /// 4. If ilkId was USDC/DAI, swap WETH for USDC/DAI to payback the flash loan
    /// @param vaultId The ID of the vault to close.
    /// @param ilkId The id of the strategy.
    /// @param ink The collateral to take from the vault.
    /// @param art The debt to repay. This is denominated in fyTokens
    function _close(
        bytes12 vaultId,
        bytes6,
        bytes6 ilkId,
        uint256 ink,
        uint256 art
    ) internal {
        ladle.close(
            vaultId,
            address(this),
            -ink.u128().i128(),
            -art.u128().i128()
        );
        crabStrategy.flashWithdraw(ink, type(uint256).max, 3000);
        weth.deposit{value: address(this).balance}();
        if (ilkId != wethId) {
            _uniswap(address(weth), cauldron.assets(ilkId));
        }
    }

    receive() external payable {}
}
