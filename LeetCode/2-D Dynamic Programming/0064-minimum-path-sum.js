/**
    @title 64. Minimum Path Sum
    @difficulty Medium
    @url https://leetcode.com/problems/minimum-path-sum/

    @description
        Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
        Note: You can only move either down or right at any point in time.

    @param {number[][]} grid
    @return {number}
 */

var minPathSum = function (grid) {
    let dp = Array.from({ length: grid.length }, (_, i) => new Array(grid[i].length).fill(0));

    for (let i = grid.length - 1; i >= 0; i--) {
        for (let j = grid[i].length - 1; j >= 0; j--) {
            if (i === grid.length - 1 && j === grid[i].length - 1) {
                dp[i][j] = grid[i][j];
                continue;
            }
            dp[i][j] =
                grid[i][j] +
                Math.min(dp[i][j + 1] ?? Number.MAX_SAFE_INTEGER, dp[i + 1]?.[j] ?? Number.MAX_SAFE_INTEGER);
        }
    }

    return dp[0][0];
};
