/**
    @title 746. Min Cost Climbing Stairs
    @difficulty Easy
    @url https://leetcode.com/problems/min-cost-climbing-stairs

    @description
        You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.
        You can either start from the step with index 0, or the step with index 1.
        Return the minimum cost to reach the top of the floor.

    @param {number[]} cost
    @return {number}
 */

var minCostClimbingStairs = function (cost) {
    let dp = [];

    for (let i = 0; i < cost.length; i++) {
        dp[i] = cost[i] + Math.min(dp[i - 1] ?? 0, dp[i - 2] ?? 0);
    }

    return Math.min(dp.at(-1), dp.at(-2));
};
