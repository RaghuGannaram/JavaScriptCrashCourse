/**
    @url https://leetcode.com/problems/count-sub-islands/
    @title 1905. Count Sub Islands
    @difficulty Medium

    @description
        You are given two m x n binary matrices grid1 and grid2 containing only 0's (representing water) and 1's (representing land).
        An island is a group of 1's connected 4-directionally (horizontal or vertical). Any cells outside of the grid are considered water cells.
        An island in grid2 is considered a sub-island if there is an island in grid1 that contains all the cells that make up this island in grid2.
        Return the number of islands in grid2 that are considered sub-islands.

    @param {number[][]} grid1
    @param {number[][]} grid2
    @return {number}
 */

var countSubIslands = function (grid1, grid2) {
    let count = 0, m = grid1.length, n = grid1[0].length, visited = new Set();

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid2[i][j] === 1 && !visited.has(`${i}-${j}`) && dfs(i, j)) count++;
        }
    }

    return count;

    function dfs(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n || grid2[i][j] === 0 || visited.has(`${i}-${j}`)) return true;

        visited.add(`${i}-${j}`);

        let isSubIsland = true;

        if (grid1[i][j] === 0) isSubIsland = false;

        isSubIsland = dfs(i + 1, j) && isSubIsland;
        isSubIsland = dfs(i - 1, j) && isSubIsland;
        isSubIsland = dfs(i, j + 1) && isSubIsland;
        isSubIsland = dfs(i, j - 1) && isSubIsland;

        return isSubIsland;
    }
}

let grid1 = [
    [1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 1, 1]
];

let grid2 = [
    [1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1],
    [0, 1, 0, 0, 0],
    [1, 0, 1, 1, 0],
    [0, 1, 0, 1, 0]
];

countSubIslands(grid1, grid2);  // 3