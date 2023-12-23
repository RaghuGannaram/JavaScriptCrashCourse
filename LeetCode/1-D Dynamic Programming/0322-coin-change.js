/**
    @title 322. Coin Change
    @difficulty Medium
    @url https://leetcode.com/problems/coin-change/

    @description
        You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount.
        If that amount of money cannot be made up by any combination of the coins, return -1.

    @param {number[]} coins
    @param {number} amount
    @return {number}
 */

var coinChange = function (coins, amount) {
    const dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);

    dp[0] = 0;

    for (let a = 1; a <= amount; a++) {
        for (let coin of coins) {
            if (a - coin >= 0) {
                dp[a] = Math.min(dp[a], dp[a - coin] + 1);
            }
        }
    }

    return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
};
