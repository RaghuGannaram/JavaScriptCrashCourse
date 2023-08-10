var numIslands1 = function (grid) {
	let islands = [],
		membership = [],
		refactoredIslands = [];

	outer: for (let i = 0; i < grid.length; i++) {
		inner: for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === "1") {
				if (islands.length === 0) {
					let newIsland = new Set([`${i}${j}`]);
					islands.push(newIsland);
					continue inner;
				}
				membership = [];
				for (let island of islands) {
					if (island.has(`${i - 1}${j}`) || island.has(`${i + 1}${j}`) || island.has(`${i}${j - 1}`) || island.has(`${i}${j + 1}`)) {
						island.add(`${i}${j}`);
						membership.push(island);
					}
				}
				if (membership.length === 0) {

					islands.push(new Set([`${i}${j}`]));
				} else if (membership.length === 1) {
					continue inner;
				} else {
					refactoredIslands = [];
					for (let island of islands) {
						if (!membership.includes(island)) {
							refactoredIslands.push(island);
						}
					}
					let unionSet = new Set();
					for (let island of membership) {
						unionSet = new Set([...unionSet, ...island]);
					}
					refactoredIslands.push(unionSet);
					islands = refactoredIslands;
				}
			}
		}
	}

	return islands.length;
};

var numIslands2 = function (grid) {
    let visited = new Set(), islands = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1" && !visited.has(`${i}${j}`)) {
                bfs(i, j);
                islands++;
            }
        }
    }

    return islands;

    function bfs(i, j) {
        let queue = [], directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        visited.add(`${i}${j}`);

        queue.push([i, j]);

        while (queue.length > 0) {
            let [r, c] = queue.pop();
            for (let [i, j] of directions) {
                let [x, y] = [r - i, c - j];
                if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && grid[x][y] === "1" && !visited.has(`${x}${y}`)) {
                    queue.push([x, y]);
                    visited.add(`${x}${y}`);
                }
            }
        }
    }
};

console.log(
	numIslands1([
		["0", "1", "1", "1", "0"],
		["1", "1", "0", "1", "0"],
		["1", "1", "0", "0", "0"],
		["0", "0", "0", "0", "0"],
	])
);
