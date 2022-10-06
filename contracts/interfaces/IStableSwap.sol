// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

interface IStableSwap {
    /// @notice Perform an exchange between two coins
    /// @dev Index values can be found via the `coins` public getter method
    /// @param i Index value for the coin to send
    /// @param j Index value of the coin to recieve
    /// @param dx Amount of `i` being exchanged
    /// @param minDy Minimum amount of `j` to receive
    /// @param receiver Who will receive the tokens
    /// @return Actual amount of `j` received
    function exchange(
        int128 i,
        int128 j,
        uint256 dx,
        uint256 minDy,
        address receiver
    ) external returns (uint256);

    /// @notice Get the amount of coin j one would receive for swapping _dx of coin i.
    function get_dy(int128 i, int128 j, uint256 _dx) external view returns (uint256);

    function add_liquidity(uint256[3] memory amounts,uint256 min_mint_amount) external;

    function remove_liquidity_one_coin(uint256 _token_amount,int128 i,uint256 min_amount) external;
}