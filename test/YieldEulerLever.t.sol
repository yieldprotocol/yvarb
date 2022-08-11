// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "contracts/YieldEulerLever.sol";
import "erc3156/contracts/interfaces/IERC3156FlashLender.sol";
import "@yield-protocol/vault-v2/FYToken.sol";
import "@yield-protocol/utils-v2/contracts/token/IERC20.sol";
import "@yield-protocol/utils-v2/contracts/access/AccessControl.sol";
import "./Protocol.sol";
import "@yield-protocol/vault-v2/utils/Giver.sol";
import "@yield-protocol/vault-v2/FlashJoin.sol";
import "@yield-protocol/vault-interfaces/src/ICauldron.sol";
import "@yield-protocol/yieldspace-interfaces/IPool.sol";
import "@yield-protocol/vault-interfaces/src/ILadle.sol";

abstract contract ZeroState is Test {
    address timeLock = 0x3b870db67a45611CF4723d44487EAF398fAc51E3;
    address daiWhale = 0x5D38B4e4783E34e2301A2a36c39a03c45798C4dD;
    address eDai = 0xe025E3ca2bE02316033184551D4d3Aa22024D9DC;
    IERC20 constant DAI = IERC20(0x6B175474E89094C44Da98b954EedeAC495271d0F);
    Protocol protocol;
    Giver giver;
    YieldEulerLever lever;
    ICauldron constant cauldron =
        ICauldron(0xc88191F8cb8e6D4a668B047c1C8503432c3Ca867);
    FlashJoin constant daiJoin =
        FlashJoin(0x4fE92119CDf873Cf8826F4E6EcfD4E578E3D44Dc); // dai
    FlashJoin constant usdcJoin =
        FlashJoin(0x0d9A1A773be5a83eEbda23bf98efB8585C3ae4f4); // usdc
    FlashJoin constant wethJoin =
        FlashJoin(0x3bDb887Dc46ec0E964Df89fFE2980db0121f0fD0); // weth
    IERC20 constant weth = IERC20(0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2);
    bytes6 constant seriesId = 0x303130370000;
    ILadle constant ladle =
        ILadle(0x6cB18fF2A33e981D1e38A663Ca056c0a5265066A);

    bytes6 constant eDaiIlkId = 0x323000000000;
    bytes6 constant eUsdcIlkId = 0x323100000000;
    bytes6 constant eWethIlkId = 0x323200000000;

    constructor() {
        protocol = new Protocol();
        giver = new Giver(cauldron);
        // Orchestrate Giver
        AccessControl cauldronAccessControl = AccessControl(
            0xc88191F8cb8e6D4a668B047c1C8503432c3Ca867
        );
        vm.prank(timeLock);
        cauldronAccessControl.grantRole(0x798a828b, address(giver));

        vm.label(address(wethJoin), "weth Join");
        vm.label(address(daiJoin), "dai Join");
        vm.label(address(usdcJoin), "usdc Join");
        vm.label(
            address(0x27182842E098f60e3D576794A5bFFb0777E025d3),
            "Euler Market"
        );
        vm.label(address(0xe025E3ca2bE02316033184551D4d3Aa22024D9DC), "eDAI");
        vm.label(
            address(0x49d6A448cFFEBD3Df97ec34665BED257583EAE18),
            "eulerOracle"
        );

        vm.label(address(ladle.pools(seriesId)), "Pool");

        vm.prank(daiWhale);
        DAI.transfer(address(this), 100000e18);

        vm.prank(timeLock);
        wethJoin.setFlashFeeFactor(1);
        vm.prank(timeLock);
        usdcJoin.setFlashFeeFactor(1);
        vm.prank(timeLock);
        daiJoin.setFlashFeeFactor(1);

        IPool pool = IPool(ladle.pools(seriesId));
        FYToken fyToken = FYToken(address(pool.fyToken()));
        vm.label(address(fyToken), "FY Token");
        vm.label(address(pool), "Pool");
        vm.prank(timeLock);
        fyToken.setFlashFeeFactor(1);
    }

    function setUp() public virtual {
        lever = new YieldEulerLever(giver);
        
        DAI.approve(address(lever), type(uint256).max);

        AccessControl giverAccessControl = AccessControl(address(giver));
        giverAccessControl.grantRole(0xe4fd9dc5, timeLock);
        giverAccessControl.grantRole(0x35775afb, address(lever));

        lever.approveFyToken(seriesId);

        lever.addEulerAsset(eDaiIlkId, daiJoin);
        lever.addEulerAsset(eUsdcIlkId, usdcJoin);
        lever.addEulerAsset(eWethIlkId, wethJoin);
    }

    /// @notice Create a vault.
    function leverUp(uint128 baseAmount, uint128 borrowAmount)
        public
        returns (bytes12 vaultId)
    {
        // Expect at least 80% of the value to end up as collateral
        // uint256 eulerAmount = pool.sellFYTokenPreview(baseAmount + borrowAmount);
        vaultId = lever.invest(
            eDaiIlkId, // ilkId edai
            seriesId,
            baseAmount,
            borrowAmount,
            0 //minCollateral,
        );
    }

    /// Return the available balance in the join.
    function availableBalance(bytes6 ilkIdToCheck) public view returns (uint256 available) {
        FlashJoin join = lever.flashJoins(ilkIdToCheck);
        IERC20 token = IERC20(join.asset());
        available = token.balanceOf(address(join)) - join.storedBalance();
    }
}

contract ZeroStateTest is ZeroState {
    function testVault() public {
        uint256 availableAtStart = availableBalance(eDaiIlkId);
        console.log(DAI.allowance(address(this), address(lever)));
        bytes12 vaultId = leverUp(100000e18, 5000e18);
        DataTypes.Vault memory vault = cauldron.vaults(vaultId);
        assertEq(vault.owner, address(this));

        // Test that we left the join as we encountered it
        assertEq(availableBalance(eDaiIlkId), availableAtStart);

        // Assert that the balances are empty
        assertEq(IERC20(DAI).balanceOf(address(lever)), 0);
        assertEq(IPool(ladle.pools(eDaiIlkId)).fyToken().balanceOf(address(lever)), 0);
        assertEq(IPool(ladle.pools(eDaiIlkId)).base().balanceOf(address(lever)), 0);
    }
}

// 1124197600

contract UnwindTest is ZeroState {
    bytes12 vaultId;

    function setUp() public override {
        super.setUp();
        vaultId = leverUp(5000e18, 5000e18);
    }

    function testRepay() public {
        DataTypes.Balances memory balances = cauldron.balances(vaultId);
        lever.divest(eDaiIlkId, vaultId, seriesId, balances.ink, balances.art, 0);
    }

    function testDoClose() public {
        DataTypes.Series memory series_ = cauldron.series(seriesId);
        vm.warp(series_.maturity);
        DataTypes.Balances memory balances = cauldron.balances(vaultId);
        lever.divest(eDaiIlkId, vaultId, seriesId, balances.ink, balances.art, 0);
    }
}