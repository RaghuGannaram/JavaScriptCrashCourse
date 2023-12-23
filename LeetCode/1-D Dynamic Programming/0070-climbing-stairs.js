/**
    @title 70. Climbing Stairs
    @difficulty Easy
    @url https://leetcode.com/problems/climbing-stairs/

    @description
        You are climbing a stair case. It takes n steps to reach to the top.

        Each time you can either climb 1 or 2 steps.

        In how many distinct ways can you climb to the top?

        Note: Given n will be a positive integer.

    @param {number} n
    @return {number}
 */

var climbStairs = function (n) {
    let dp = [1, 2];

    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n - 1];
};
