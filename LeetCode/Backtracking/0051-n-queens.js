/**
    @title 51. N-Queens
    @difficulty Hard
    @url https://leetcode.com/problems/n-queens/

    @description
        The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
        Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.
        Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

    @param {number} n
    @return {string[][]}
 */

var solveNQueens = function (n) {
    let board = Array.from({ length: n }, () => new Array(n).fill(".")),
        colSet = new Set(),
        posDiagSet = new Set(),
        negDiagSet = new Set(),
        res = [];

    backtrack(0);

    return res;

    function backtrack(r) {
        if (r === n) {
            res.push(board.map(row => row.join("")));
            return;
        }

        for (let c = 0; c < n; c++) {
            if (colSet.has(c) || posDiagSet.has(r + c) || negDiagSet.has(r - c))
                continue;

            colSet.add(c);
            posDiagSet.add(r + c);
            negDiagSet.add(r - c);
            board[r][c] = "Q";

            backtrack(r + 1);

            colSet.delete(c);
            posDiagSet.delete(r + c);
            negDiagSet.delete(r - c);
            board[r][c] = ".";
        }
    }

};

let n = 4;

console.log(solveNQueens(n));   // [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]