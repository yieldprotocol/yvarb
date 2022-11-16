// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

import "./YieldLeverBase.sol";
import "@yield-protocol/yieldspace-tv/src/interfaces/IMaturingToken.sol";
interface ICrabStrategy {
    function totalSupply() external view returns (uint256);

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
    function flashDeposit(uint256 _ethToDeposit, uint24 _poolFee) external;
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

    constructor(Giver giver_) YieldLeverBase(giver_) {}

    IERC20 public crab;
    bytes6 crabId;
    bytes6 ethId;

    event Invested(
        bytes12 indexed vaultId,
        bytes6 seriesId,
        address indexed investor,
        uint256 investment,
        uint256 debt
    );

    function invest(
        Operation operation,
        bytes6 seriesId,
        bytes6 ilkId,
        uint256 amountToInvest,
        uint256 borrowAmount,
        uint256 minCollateral
    ) external payable returns (bytes12 vaultId) {
        if (operation != Operation.BORROW) revert OnlyBorrow();
        // Depend on ilkId we will have to choose the operation
        
        // USDC/DAI -> deposit DAI/USDC -> borrow fyETH -> flash loan fyETH ->buy ETH using fyETH -> deposit to get Crab -> borrow against crab to payback flash loan
        
        // ETH -> flashBorrow ETH -> flashDeposit to get crab -> deposit crab to get fyETH -> buy ETH to repay flashloan
        
        // Build the vault
        (vaultId, ) = ladle.build(seriesId, crabId, 0);

        bytes memory data = bytes.concat(
            bytes1(uint8(uint256(operation))), //[0]
            seriesId, //[1:7]
            vaultId, //[7:19]
            bytes32(amountToInvest), //[25:57]
            bytes20(msg.sender) //[57:77]
        );

        bool success = IERC3156FlashLender(address(ladle.joins(ethId)))
            .flashLoan(
                this, // Loan Receiver
                cauldron.assets(ethId), // Loan Token
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

        } else if (
            status == Operation.REPAY
        ) {} else if (status == Operation.CLOSE) {}
    }
}
