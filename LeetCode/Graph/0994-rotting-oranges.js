/**
    @url https://leetcode.com/problems/rotting-oranges/
    @title 994. Rotting Oranges
    @difficulty Medium

    @description
        In a given grid, each cell can have one of three values:
        the value 0 representing an empty cell;
        the value 1 representing a fresh orange;
        the value 2 representing a rotten orange.
        Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.
        Return the minimum number of minutes that must elapse until no cell has a fresh orange.
        If this is impossible, return -1 instead.

    @param  {number[][]} grid
    @return {number}
 */

var orangesRotting = function (grid) {
    let l,
        minutes = 0,
        fresh = 0,
        queue = [],
        m = grid.length,
        n = grid[0].length,
        directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) fresh++;
            if (grid[i][j] === 2) queue.push([i, j]);
        }
    }

    while (queue.length > 0 && fresh > 0) {
        l = queue.length;

        for (let i = 0, r, c, row, col; i < l; i++) {
            [r, c] = queue.shift();

            for (let [dr, dc] of directions) {
                row = r + dr;
                col = c + dc;

                if (row < 0 || row === m || col < 0 || col === n || grid[row][col] !== 1) continue;
                grid[row][col] = 2;
                queue.push([row, col]);
                fresh--;
            }
        }
        minutes++;
    }

    return fresh > 0 ? -1 : minutes;
};

let grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]];

console.log(orangesRotting(grid)); // 4