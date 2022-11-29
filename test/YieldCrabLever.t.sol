// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "contracts/YieldCrabLever.sol";
import "contracts/YieldLeverBase.sol";
import "contracts/interfaces/IStableSwap.sol";
import "erc3156/contracts/interfaces/IERC3156FlashLender.sol";
import "@yield-protocol/vault-v2/FYToken.sol";
import "@yield-protocol/utils-v2/contracts/token/IERC20.sol";
import "@yield-protocol/utils-v2/contracts/access/AccessControl.sol";
import "./Protocol.sol";
import "@yield-protocol/vault-v2/utils/Giver.sol";
import "@yield-protocol/vault-v2/FlashJoin.sol";
import "@yield-protocol/vault-v2/Cauldron.sol";
import "@yield-protocol/vault-v2/interfaces/ICauldron.sol";
import "@yield-protocol/yieldspace-tv/src/interfaces/IPool.sol";

abstract contract ZeroState is Test {
    address timeLock = 0x3b870db67a45611CF4723d44487EAF398fAc51E3;
    address ethWhale = 0xDA9dfA130Df4dE4673b89022EE50ff26f6EA73Cf;
    address daiWhale = 0xDA9dfA130Df4dE4673b89022EE50ff26f6EA73Cf;
    address usdcWhale = 0xDA9dfA130Df4dE4673b89022EE50ff26f6EA73Cf;
    YieldCrabLever lever;
    Protocol protocol;
    Giver giver = Giver(0xa98F3211997FDB072B6a8E2C2A26C34BC447f873);

    IPool pool = IPool(0x9D34dF69958675450ab8E53c8Df5531203398Dc9);
    FlashJoin flashJoin;
    bytes6 public seriesId = 0x303230380000; //0x303130380000; //0x303030380000;
    bytes6 public ilkId = 0x303200000000; //0x303100000000; //0x303000000000;
    ICauldron cauldron;

    IERC20 constant weth = IERC20(0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2);
    IERC20 constant usdc = IERC20(0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48);
    IERC20 constant dai = IERC20(0x6B175474E89094C44Da98b954EedeAC495271d0F);
    FYToken fyToken;

    constructor() {
        protocol = new Protocol();
        vm.prank(ethWhale);
        address(this).call{value: 10000e18}("");
        vm.prank(daiWhale);
        dai.transfer(address(this), 10000e18);
        vm.prank(usdcWhale);
        usdc.transfer(address(this), 10000e6);
    }

    function setUp() public virtual {
        // Cauldron cauldron_ = new Cauldron();
        // vm.etch(0xc88191F8cb8e6D4a668B047c1C8503432c3Ca867,address(cauldron_));
        lever = new YieldCrabLever(giver);

        //Label
        vm.label(address(lever), "YieldLever");

        usdc.approve(address(lever), type(uint256).max);
        dai.approve(address(lever), type(uint256).max);
        // vm.prank(fyTokenWhale);
        // fyToken.transfer(address(lever), 3e18);
        vm.startPrank(timeLock);
        AccessControl giverAccessControl = AccessControl(address(giver));
        giverAccessControl.grantRole(0xe4fd9dc5, timeLock);
        giverAccessControl.grantRole(0x35775afb, address(lever));
        vm.stopPrank();
    }

    /// Return the available balance in the join.
    function availableBalance(FlashJoin join)
        public
        view
        returns (uint256 available)
    {
        IERC20 token = IERC20(join.asset());
        available = token.balanceOf(address(join)) - join.storedBalance();
    }

    /// @notice Create a vault.
    function investETH(uint128 baseAmount, uint128 borrowAmount)
        public
        returns (bytes12 vaultId)
    {
        // fyToken.approve(address(lever), baseAmount);
        uint128 minCollateral = 0;

        vaultId = lever.invest{value: baseAmount}(
            YieldLeverBase.Operation.BORROW,
            seriesId,
            ilkId,
            baseAmount,
            borrowAmount,
            minCollateral
        );
    }

    function investRest(uint128 baseAmount, uint128 borrowAmount)
        public
        returns (bytes12 vaultId)
    {
        // fyToken.approve(address(lever), baseAmount);
        uint128 minCollateral = 0;
        vaultId = lever.invest(
            YieldLeverBase.Operation.BORROW,
            seriesId,
            ilkId,
            baseAmount,
            borrowAmount,
            minCollateral
        );
    }
}

contract ZeroStateTest is ZeroState {
    function setUp() public override {
        super.setUp();
    }

    function testVault() public {
        // uint256 availableWStEthBalanceAtStart = availableBalance(wstethJoin);
        // uint256 availableWEthBalanceAtStart = availableBalance(wethJoin);

        bytes12 vaultId = investRest(25e6, 1e6);
        // DataTypes.Vault memory vault = cauldron.vaults(vaultId);
        // assertEq(vault.owner, address(this));

        // // No tokens should be left in the contract
        // assertEq(weth.balanceOf(address(lever)), 0);
        // assertEq(wsteth.balanceOf(address(lever)), 0);
        // assertEq(steth.balanceOf(address(lever)), 0);
        // assertEq(fyToken.balanceOf(address(lever)), 0);

        // // Assert that the join state is the same as the start
        // assertEq(availableBalance(wstethJoin), availableWStEthBalanceAtStart);
        // assertEq(availableBalance(wethJoin), availableWEthBalanceAtStart);
    }

    // function testLever() public {
    //     uint256 availableWStEthBalanceAtStart = availableBalance(wstethJoin);
    //     uint256 availableWEthBalanceAtStart = availableBalance(wethJoin);

    //     bytes12 vaultId = invest(1e18, 3.5e18);
    //     DataTypes.Balances memory balances = cauldron.balances(vaultId);
    //     assertEq(balances.art, 3.5e18);

    //     // No tokens should be left in the contract
    //     assertEq(weth.balanceOf(address(lever)), 0);
    //     assertEq(wsteth.balanceOf(address(lever)), 0);
    //     assertEq(steth.balanceOf(address(lever)), 0);
    //     assertEq(fyToken.balanceOf(address(lever)), 0);

    //     // Assert that the join state is the same as the start
    //     assertEq(availableBalance(wstethJoin), availableWStEthBalanceAtStart);
    //     assertEq(availableBalance(wethJoin), availableWEthBalanceAtStart);
    // }

    /// @notice This function should fail if called externally.
    // function testOnFlashLoan() public {
    //     vm.expectRevert(FlashLoanFailure.selector);
    //     lever.onFlashLoan(
    //         address(lever), // Lie!
    //         address(fyToken),
    //         1e18,
    //         1e16,
    //         bytes.concat(
    //             bytes1(0x01),
    //             seriesId,
    //             bytes12(0),
    //             bytes16(0),
    //             bytes16(0)
    //         )
    //     );
    // }

    // function testInvestRevertOnMinEth() public {
    //     uint128 baseAmount = 4e17;
    //     uint128 borrowAmount = 8e17;
    //     fyToken.approve(address(lever), baseAmount);
    //     // Unreasonable expectation: twice the total value as collateral?
    //     uint256 wethAmount = pool.sellFYTokenPreview(baseAmount + borrowAmount);
    //     uint128 minCollateral = uint128(
    //         stableSwap.get_dy(0, 1, wethAmount) * 2
    //     );

    //     vm.expectRevert(SlippageFailure.selector);
    //     lever.invest{value: baseAmount}(seriesId, borrowAmount, minCollateral);
    // }
}