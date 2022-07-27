import "@yield-protocol/utils-v2/contracts/token/IERC20.sol";

interface Weth is IERC20 {
    function deposit() external payable;
}
