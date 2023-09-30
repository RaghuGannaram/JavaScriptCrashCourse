/**
    @url https://leetcode.com/problems/number-of-enclaves/
    @title 1020. Number of Enclaves
    @difficulty Medium

    @description
        Given a 2D array grid, each cell is 0 (representing sea) or 1 (representing land)
        A move consists of walking from one land square 4-directionally to another land square, or off the boundary of the grid.
        Return the number of land squares in the grid for which we cannot walk off the boundary of the grid in any number of moves.

    @param {number[][]} grid
    @return {number}
 */

var numEnclaves = function (grid) {
    let land = 0, peninsulas = 0, m = grid.length, n = grid[0].length, visited = new Set();

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j]) land++;
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] && ([0, m - 1].includes(i) || [0, n - 1].includes(j))) {
                peninsulas += dfs(i, j);
            }
        }
    }

    return land - peninsulas;

    function dfs(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n || visited.has(`${i}-${j}`) || grid[i][j] == 0) return 0;

        let res = 1;

        visited.add(`${i}-${j}`);

        res += dfs(i + 1, j);
        res += dfs(i - 1, j);
        res += dfs(i, j + 1);
        res += dfs(i, j - 1);

        return res;
    }
}

let grid = [[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]];

console.log(numEnclaves(grid)); // 3