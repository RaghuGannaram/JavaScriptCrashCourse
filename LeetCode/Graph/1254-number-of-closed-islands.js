/**
    @url https://leetcode.com/problems/number-of-closed-islands/
    @title 1254. Number of Closed Islands
    @difficulty Medium

    @description
        Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally
        (all left, top, right, bottom) surrounded by 1s.
        Return the number of closed islands.

    @param {number[][]} grid
    @return {number}
 */

var closedIsland = function (grid) {
    let res = 0, m = grid.length, n = grid[0].length, visited = new Set();

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!grid[i][j] && !visited.has(`${i}-${j}`) && dfs(i, j)) res++;
        }
    }

    return res;

    function dfs(i, j) {
        if (i < 0 || i === m || j < 0 || j === n) return false;

        if (visited.has(`${i}-${j}`) || grid[i][j]) return true;

        visited.add(`${i}-${j}`);

        let res = true;

        res = dfs(i + 1, j) && res;
        res = dfs(i - 1, j) && res;
        res = dfs(i, j + 1) && res;
        res = dfs(i, j - 1) && res;

        return res;
    }
};