/**
    @url https://leetcode.com/problems/max-area-of-island
    @title 695. Max Area of Island
    @difficulty Medium

    @description
        Given a non-empty 2D array grid of 0's and 1's,
        an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.)
        You may assume all four edges of the grid are surrounded by water.
        Find the maximum area of an island in the given 2D array.
        (If there is no island, the maximum area is 0.)

    @param  {number[][]} grid
    @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let res = 0, m = grid.length, n = grid[0].length, visited = new Set();

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res = Math.max(res, dfs(i, j));
        }
    }

    return res;

    function dfs(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n || visited.has(`${i}-${j}`) || grid[i][j] === 0) return 0;

        visited.add(`${i}-${j}`);

        let res = 1;

        res += dfs(i + 1, j);
        res += dfs(i - 1, j);
        res += dfs(i, j + 1);
        res += dfs(i, j - 1);

        return res;
    }
};

let grid = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
];

console.log(maxAreaOfIsland(grid));  // 6