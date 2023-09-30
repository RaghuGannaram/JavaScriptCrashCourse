/**
	@url https://leetcode.com/problems/number-of-islands/
	@title 200. Number of Islands
	@difficulty Medium

	@description
		Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
		An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
		You may assume all four edges of the grid are all surrounded by water.

	@param  {character[][]} grid
	@return {number}
 */

var numIslands1 = function (grid) {
	let res = 0, m = grid.length, n = grid[0].length, visited = new Set();

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === "1" && !visited.has(`${i}-${j}`)) {
				res++;
				dfs(i, j);
			}
		}
	}

	return res;

	function dfs(i, j) {
		if (i < 0 || i >= m || j < 0 || j >= n || visited.has(`${i}-${j}`) || grid[i][j] === "0") return;

		visited.add(`${i}-${j}`);

		dfs(i + 1, j);
		dfs(i - 1, j);
		dfs(i, j + 1);
		dfs(i, j - 1);
	}
};


var numIslands2 = function (grid) {
	let res = 0, m = grid.length, n = grid[0].length, visited = new Set();

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === "1" && !visited.has(`${i}-${j}`)) {
				res++;
				bfs(i, j);
			}
		}
	}

	return res;

	function bfs(i, j) {
		let l, queue = [];
		queue.push([i, j]);


		while (queue.length > 0) {
			l = queue.length;

			for (let i = 0; i < l; i++) {
				let [x, y] = queue.shift();

				if (x < 0 || x >= m || y < 0 || y >= n || visited.has(`${x}-${y}`) || grid[x][y] === "0") continue;

				visited.add(`${x}-${y}`);

				queue.push([x + 1, y]);
				queue.push([x - 1, y]);
				queue.push([x, y + 1]);
				queue.push([x, y - 1]);
			}
		}
	}
};

let grid = [
	["1", "1", "1", "1", "0"],
	["1", "1", "0", "1", "0"],
	["1", "1", "0", "0", "0"],
	["0", "0", "0", "0", "0"]
];

console.log(numIslands(grid));   // 1