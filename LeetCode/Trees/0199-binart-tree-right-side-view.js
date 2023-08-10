/**
 * @param {TreeNode} root
 * @return {number[]}
 */
class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

function insertLevelOrder(arr, index = 0) {
	let root = null;
	if (index < arr.length) {
		if (arr[index]) {
			if (arr[index]) {
				root = new TreeNode(arr[index]);
				root.left = insertLevelOrder(arr, 2 * index + 1);
				root.right = insertLevelOrder(arr, 2 * index + 2);
			}
		}
	}
	return root;
}

var rightSideView1 = function (root) {
	let result = [];

	dfs(root, 0);

	return result;

	function dfs(root, level) {
		if (!root) return;
		if (result[level] === undefined) {
			result.push(root.val);
		}
		dfs(root.right, level + 1);
		dfs(root.left, level + 1);
	}
};

var rightSideView2 = function (root) {
	let result = [],
		current,
		l;
	if (!root) return result;
	bfs([root]);
	return result;

	function bfs(queue) {
		while (queue.length > 0) {
			l = queue.length;
			for (let i = 0; i < l; i++) {
				current = queue.shift();
				current.left && queue.push(current.left);
				current.right && queue.push(current.right);
				if (i === l - 1) result.push(current.val);
			}
		}
	}
};

var rightSideView3 = function (root) {
	if (!root) return [];
	let res = [];

	dfs(root, 0);

	return res;

	function dfs(root, d) {
			if (!root) return;
			res[d] = root.val;
			dfs(root.left, d + 1);
			dfs(root.right, d + 1);
	}
};

let root = insertLevelOrder([1, 2, 3, null, 5, null, 4]);

console.log(rightSideView1(root));
