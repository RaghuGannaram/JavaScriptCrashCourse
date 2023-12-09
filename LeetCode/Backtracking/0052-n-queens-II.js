/**
    @title 52. N-Queens II
    @difficulty Hard
    @url https://leetcode.com/problems/n-queens-ii/

    @description
        The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
        Given an integer n, return the number of distinct solutions to the n-queens puzzle.

    @param {number} n
    @return {number}
 */

var totalNQueens = function (n) {
    let colSet = new Set(),
        posDiagSet = new Set(),
        negDiagSet = new Set(),
        res = 0;

    backtrack(0);

    return res;

    function backtrack(r) {
        if (r === n) {
            res++;
            return;
        }

        for (let c = 0; c < n; c++) {
            if (colSet.has(c) || posDiagSet.has(r + c) || negDiagSet.has(r - c))
                continue;

            colSet.add(c);
            posDiagSet.add(r + c);
            negDiagSet.add(r - c);

            backtrack(r + 1);

            colSet.delete(c);
            posDiagSet.delete(r + c);
            negDiagSet.delete(r - c);
        }
    }

}

let n = 4;

console.log(totalNQueens(n));   // 2