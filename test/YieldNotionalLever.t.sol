// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "contracts/YieldNotionalLever.sol";
import "erc3156/contracts/interfaces/IERC3156FlashLender.sol";
import "@yield-protocol/vault-v2/FYToken.sol";
import "@yield-protocol/utils-v2/contracts/token/IERC20.sol";
import "@yield-protocol/utils-v2/contracts/access/AccessControl.sol";
import "./Protocol.sol";
import "@yield-protocol/vault-v2/utils/Giver.sol";
import "@yield-protocol/vault-v2/FlashJoin.sol";
import "@yield-protocol/vault-interfaces/src/ICauldron.sol";
import "@yield-protocol/vault-interfaces/src/IFYToken.sol";
import "@yield-protocol/yieldspace-interfaces/IPool.sol";

struct ilk_info {
    address join;
    uint40 maturity;
    uint16 currencyId;
}

abstract contract ZeroState is Test {
    address constant timeLock = 0x3b870db67a45611CF4723d44487EAF398fAc51E3;
    address constant usdcWhale = 0x72A53cDBBcc1b9efa39c834A540550e23463AAcB;
    address constant daiWhale = 0xaD0135AF20fa82E106607257143d0060A7eB5cBf;
    IERC20 constant USDC = IERC20(0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48);
    IERC20 constant DAI = IERC20(0x6B175474E89094C44Da98b954EedeAC495271d0F);
    ICauldron constant cauldron = ICauldron(0xc88191F8cb8e6D4a668B047c1C8503432c3Ca867);
    FlashJoin constant daiJoin = FlashJoin(0x4fE92119CDf873Cf8826F4E6EcfD4E578E3D44Dc); // dai
    FlashJoin constant usdcJoin = FlashJoin(0x0d9A1A773be5a83eEbda23bf98efB8585C3ae4f4); // usdc
    ILadle constant ladle = ILadle(0x6cB18fF2A33e981D1e38A663Ca056c0a5265066A);

    Protocol immutable protocol;
    Giver immutable giver;
    YieldNotionalLever lever;

    bytes6 constant fyUsdc2209SeriesId = 0x303230370000;
    bytes6 constant fyDai2209SeriesId = 0x303130370000;

    bytes6 constant fUsdc2209IlkId = 0x313700000000;
    bytes6 constant fDai2209IlkId = 0x313600000000;

    bytes6 constant usdcIlkId = 0x303200000000;
    bytes6 constant daiIlkId = 0x303100000000;

    mapping(bytes6 => FlashJoin) underlyingJoinForAssetId;

    constructor() {
        protocol = new Protocol();
        giver = new Giver(cauldron);
        vm.prank(timeLock);
        AccessControl(address(cauldron)).grantRole(0x798a828b, address(giver));

        vm.startPrank(timeLock);
        usdcJoin.setFlashFeeFactor(1);
        daiJoin.setFlashFeeFactor(1);
        FYToken(address(IPool(ladle.pools(fyUsdc2209SeriesId)).fyToken())).setFlashFeeFactor(1);
        FYToken(address(IPool(ladle.pools(fyDai2209SeriesId)).fyToken())).setFlashFeeFactor(1);
        vm.stopPrank();

        underlyingJoinForAssetId[fUsdc2209IlkId] = usdcJoin;
        underlyingJoinForAssetId[fDai2209IlkId] = daiJoin;
    }

    function setUp() public virtual {
        lever = new YieldNotionalLever(giver);

        lever.approveJoin(address(ladle));
        lever.approveJoin(0x0Bfd3B8570A4247157c5468861d37dA55AAb9B4b); // Approving the Join
        lever.approveJoin(0x399bA81A1f1Ed0221c39179C50d4d4Bc85C3F3Ab); // Approving the join

        USDC.approve(address(lever), type(uint256).max);
        DAI.approve(address(lever), type(uint256).max);

        vm.prank(usdcWhale);
        IERC20(USDC).transfer(address(this), 2000e6);
        vm.prank(daiWhale);
        IERC20(DAI).transfer(address(this), 2000e18);

        // USDC
        lever.setIlkInfo(
            fUsdc2209IlkId,
            YieldNotionalLever.IlkInfo({
                maturity: 1664064000,
                currencyId: 3
            }),
            usdcJoin
        );

        // DAI
        lever.setIlkInfo(
            fDai2209IlkId,
            YieldNotionalLever.IlkInfo({
                maturity: 1664064000,
                currencyId: 2
            }),
            daiJoin
        );

        giver.grantRole(0xe4fd9dc5, timeLock);
        giver.grantRole(0x35775afb, address(lever));

        lever.approveFyToken(fyUsdc2209SeriesId);
        lever.approveFyToken(fyDai2209SeriesId);
    }

    /// @notice Create a vault.
    function leverUp(uint128 baseAmount, uint128 borrowAmount, bytes6 ilkId, bytes6 seriesId)
        public
        returns (bytes12 vaultId)
    {
        // Expect at least 80% of the value to end up as collateral
        // uint256 eulerAmount = pool.sellFYTokenPreview(baseAmount + borrowAmount);

        vaultId = lever.invest(
            ilkId, // ilkId
            seriesId,
            baseAmount,
            borrowAmount,
            0
        );
    }

    /// Return the available balance in the join.
    function availableBalance(bytes6 ilkIdToCheck) public view returns (uint256 available) {
        FlashJoin join = underlyingJoinForAssetId[ilkIdToCheck];
        IERC20 token = IERC20(join.asset());
        available = token.balanceOf(address(join)) - join.storedBalance();
    }
}

contract VaultTest is ZeroState {
    function testVault() public {
        uint256 availableAtStart = availableBalance(fUsdc2209IlkId);
        bytes12 vaultId = leverUp(2000e6, 5000e6, fUsdc2209IlkId, fyUsdc2209SeriesId);
        DataTypes.Vault memory vault = cauldron.vaults(vaultId);
        assertEq(vault.owner, address(this));

        // Test that we left the join as we encountered it
        assertEq(availableBalance(fUsdc2209IlkId), availableAtStart);

        // Assert that the balances are empty
        assertEq(IERC20(USDC).balanceOf(address(lever)), 0);
        assertEq(IERC20(DAI).balanceOf(address(lever)), 0);
        assertEq(IPool(ladle.pools(fyUsdc2209SeriesId)).fyToken().balanceOf(address(lever)), 0);
    }
}

contract DivestTest is ZeroState {
    bytes12 vaultId;

    function setUp() public override {
        super.setUp();
        vaultId = leverUp(2000e6, 5000e6, fUsdc2209IlkId, fyUsdc2209SeriesId);
    }

    function testRepay() public {
        uint256 availableAtStart = availableBalance(fUsdc2209IlkId);
        DataTypes.Balances memory balances = cauldron.balances(vaultId);

        uint256 startingUsdcBalance = USDC.balanceOf(address(this));
        lever.divest(fUsdc2209IlkId, vaultId, fyUsdc2209SeriesId, balances.ink, balances.art, 0);
        // Weak condition, but test that we gained some USDC
        assertGt(USDC.balanceOf(address(this)), startingUsdcBalance);

        // Test that we left the join as we encountered it
        assertEq(availableBalance(fUsdc2209IlkId), availableAtStart);

        // Assert that the balances are empty
        assertEq(USDC.balanceOf(address(lever)), 0);
        assertEq(DAI.balanceOf(address(lever)), 0);
        assertEq(IPool(ladle.pools(fyUsdc2209SeriesId)).fyToken().balanceOf(address(lever)), 0);
    }

    function testDoClose() public {
        uint256 availableAtStart = availableBalance(fUsdc2209IlkId);

        DataTypes.Series memory series_ = cauldron.series(fyUsdc2209SeriesId);
        vm.warp(series_.maturity);
        DataTypes.Balances memory balances = cauldron.balances(vaultId);
        uint256 startingUsdcBalance = USDC.balanceOf(address(this));
        lever.divest(fUsdc2209IlkId, vaultId, fyUsdc2209SeriesId, balances.ink, balances.art, 0);
        // Weak condition, but test that we gained some USDC
        assertGt(USDC.balanceOf(address(this)), startingUsdcBalance);

        // Test that we left the join as we encountered it
        assertEq(availableBalance(fUsdc2209IlkId), availableAtStart);

        // Assert that the balances are empty
        assertEq(USDC.balanceOf(address(lever)), 0);
        assertEq(DAI.balanceOf(address(lever)), 0);
        assertEq(IPool(ladle.pools(fyUsdc2209SeriesId)).fyToken().balanceOf(address(lever)), 0);
    }
}