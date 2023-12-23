/**
    @title 463. Island Perimeter
    @difficulty Easy
    @url https://leetcode.com/problems/island-perimeter/

    @description
        You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.
        Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water,
        and there is exactly one island (i.e., one or more connected land cells).
        The island doesn't have "lakes" (water inside that isn't connected to the water around the island).
        One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100.
        Determine the perimeter of the island.

    @param  {number[][]} grid
    @return {number}
 */

var islandPerimeter1 = function (grid) {
    let perimeter = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {

            if (grid[i][j] === 1) {
                perimeter += 4;
                if (grid[i - 1]?.[j] === 1) perimeter--;
                if (grid[i + 1]?.[j] === 1) perimeter--;
                if (grid[i][j - 1] === 1) perimeter--;
                if (grid[i][j + 1] === 1) perimeter--;
            }
        }
    }

    return perimeter;
};

var islandPerimeter2 = function (grid) {
    let m = grid.length, n = grid[0].length, visited = new Set();

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j]) return dfs(i, j);
        }
    }

    function dfs(i, j) {
        if (visited.has(`${i}-${j}`)) return 0;

        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0) return 1;

        visited.add(`${i}-${j}`);

        let res = 0;

        res += dfs(i + 1, j);
        res += dfs(i - 1, j);
        res += dfs(i, j + 1);
        res += dfs(i, j - 1);

        return res;
    }
};

let grid = [
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0]
];

console.log(islandPerimeter1(grid));    // 12