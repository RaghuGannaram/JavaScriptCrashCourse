/**
 * @param {character[][]} board
 * @return {boolean}
 */

function isValidSudoku(board) {
	const rows = {};
	const cols = {};
	const squares = {};

	for (let r = 0; r < 9; r++) {
		for (let c = 0; c < 9; c++) {
			const num = board[r][c];

			if (num === ".") {
				continue;
			}
			const grid = `${Math.floor(r / 3)}${Math.floor(c / 3)}`;

			if (!rows[r]) {
				rows[r] = new Set();
			}
			if (!cols[c]) {
				cols[c] = new Set();
			}
			if (!squares[grid]) {
				squares[grid] = new Set();
			}

			if (rows[r].has(num) || cols[c].has(num) || squares[grid].has(num)) {
				return false;
			}

			rows[r].add(num);
			cols[c].add(num);
			squares[grid].add(num);
		}
	}

	return true;
}
console.log(
	isValidSudoku([
		["5", "3", ".", ".", "7", ".", ".", ".", "."],
		["6", ".", ".", "1", "9", "5", ".", ".", "."],
		[".", "9", "8", ".", ".", ".", ".", "6", "."],
		["8", ".", ".", ".", "6", ".", ".", ".", "3"],
		["4", ".", ".", "8", ".", "3", ".", ".", "1"],
		["7", ".", ".", ".", "2", ".", ".", ".", "6"],
		[".", "6", ".", ".", ".", ".", "2", "8", "."],
		[".", ".", ".", "4", "1", "9", ".", ".", "5"],
		[".", ".", ".", ".", "8", ".", ".", "7", "9"],
	])
);

// [00, 00, 00, 01, 01, 01, 02, 02, 02],
// [00, 00, 00, 01, 01, 01, 02, 02, 02],
// [00, 00, 00, 01, 01, 01, 02, 02, 02],
// [10, 10, 10, 11, 11, 11, 12, 12, 12],
// [10, 10, 10, 11, 11, 11, 12, 12, 12],
// [10, 10, 10, 11, 11, 11, 12, 12, 12],
// [20, 20, 20, 21, 21, 21, 22, 22, 22],
// [20, 20, 20, 21, 21, 21, 22, 22, 22],
// [20, 20, 20, 21, 21, 21, 22, 22, 22],
