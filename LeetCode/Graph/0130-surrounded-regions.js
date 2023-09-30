/**
    @url https://leetcode.com/problems/surrounded-regions/
    @title 130. Surrounded Regions
    @difficulty Medium

    @description
        Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.
        A region is captured by flipping all 'O's into 'X's in that surrounded region.

    @param {character[][]} board
    @return {void} Do not return anything, modify board in-place instead.
 */

var solve = function (board) {
    let m = board.length, n = board[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === m - 1 || j === 0 || j === n - 1) dfs(i, j);
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === "O") board[i][j] = "X";
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === "T") board[i][j] = "O";
        }
    }

    function dfs(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== "O") return;

        board[i][j] = "T";

        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }
};

let board = [
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "O", "O", "X"],
    ["X", "O", "X", "X"]
];

solve(board);   // [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]