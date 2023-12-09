/**
 	@title 79. Word Search
 	@difficulty Medium
 	@url https://leetcode.com/problems/word-search/

	@description
		Given an m x n grid of characters board and a string word, return true if word exists in the grid.
		The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. 
		The same letter cell may not be used more than once.

	@param {character[][]} board
	@param {string} word
	@return {boolean}
 */

var exist = function (board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (backtrack(i, j, 0)) return true;
        }
    }

    return false;

    function backtrack(r, c, index) {
        if (index === word.length) return true;

        if (r < 0 || r >= board.length || c < 0 || c >= board[r].length || board[r][c] !== word[index]) return false;

        let current = board[r][c];
        board[r][c] = "*";

        let res =
            backtrack(r, c - 1, index + 1) ||
            backtrack(r, c + 1, index + 1) ||
            backtrack(r - 1, c, index + 1) ||
            backtrack(r + 1, c, index + 1);

        board[r][c] = current;

        return res;
    }
};

let board = [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
    ],
    word = "ABCCED";

console.log(exist(board, word)); // true
