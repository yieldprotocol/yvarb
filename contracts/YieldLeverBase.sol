// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

import "erc3156/contracts/interfaces/IERC3156FlashBorrower.sol";
import "erc3156/contracts/interfaces/IERC3156FlashLender.sol";
import "@yield-protocol/yieldspace-interfaces/IPool.sol";
import "@yield-protocol/vault-interfaces/src/ICauldron.sol";
import "@yield-protocol/vault-interfaces/src/DataTypes.sol";
import "@yield-protocol/vault-interfaces/src/ILadle.sol";
import "@yield-protocol/vault-interfaces/src/IFYToken.sol";
import "@yield-protocol/utils-v2/contracts/token/IERC20.sol";
import "@yield-protocol/utils-v2/contracts/token/TransferHelper.sol";
import "@yield-protocol/vault-v2/utils/Giver.sol";
import "@yield-protocol/vault-v2/FlashJoin.sol";

error FlashLoanFailure();
error SlippageFailure();

interface Ladle is ILadle {
    function give(bytes12 vaultId_, address receiver)
        external
        payable
        returns (DataTypes.Vault memory vault);
}

contract YieldLeverBase is IERC3156FlashBorrower {
    using TransferHelper for IERC20;
    using TransferHelper for IFYToken;

    /// @notice The Yield Ladle, the primary entry point for most high-level
    ///     operations.
    Ladle public constant ladle =
        Ladle(0x6cB18fF2A33e981D1e38A663Ca056c0a5265066A);
    /// @notice The Yield Cauldron, handles debt and collateral balances.
    ICauldron public constant cauldron =
        ICauldron(0xc88191F8cb8e6D4a668B047c1C8503432c3Ca867);

    event LeveredUp();
    event Repaid();
    event Closed();

    /// @notice The operation to execute in the flash loan.
    enum Operation {
        BORROW,
        REPAY,
        CLOSE
    }

    /// @notice The Giver contract can give vaults on behalf on a user who gave
    ///     permission.
    Giver public immutable giver;

    /// @notice By IERC3156, the flash loan should return this constant.
    bytes32 public constant FLASH_LOAN_RETURN =
        keccak256("ERC3156FlashBorrower.onFlashLoan");

    constructor(Giver giver_) {
        giver = giver_;
    }

    function onFlashLoan(
        address, // initiator,
        address, // The token, not checked as we check the lender address.
        uint256, // borrowAmount,
        uint256, // fee,
        bytes calldata // data
    ) external virtual returns (bytes32) {
        return FLASH_LOAN_RETURN;
    }
}