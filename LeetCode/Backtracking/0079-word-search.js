function findSubsets(nums) {
	let result = [];

	backtrack([], 0);

	return result;

	function backtrack(subset, index) {
		if (index >= nums.length) {
			result.push(subset);
			return;
		}
		backtrack([...subset], index + 1);
		subset.push(nums[index]);
		backtrack([...subset], index + 1);
	}
}

function wordsearch(board, word) {
	let r = board.length,
		c = board[0].length,
		visited = new Set();

	function backtrack(row, col, index) {
		if (index === word.length) {
			return true;
		}
		if (row < 0 || row >= r || col < 0 || col >= c || word[index] !== board[row][col] || visited.has((row, col))) {
			return false;
		}

		visited.add((row, col));
		let result =
			backtrack(row + 1, col, index + 1) ||
			backtrack(row - 1, col, index + 1) ||
			backtrack(row, col + 1, index + 1) ||
			backtrack(row, col - 1, index + 1);
		visited.delete((row, col));
		return result;
	}

	for (let i = 0; i < r; i++) {
		for (let j = 0; j < c; j++) {
			if (backtrack(i, j, 0)) {
				return true;
			}
		}
	}
	return false;
}

console.log(
	wordsearch(
		[
			["A", "B", "C", "E"],
			["S", "F", "C", "S"],
			["A", "D", "E", "E"],
		],
		"ABCCED"
	)
);

