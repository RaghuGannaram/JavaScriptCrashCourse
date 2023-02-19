/**
 * @param {TreeNode} root
 * @return {number}
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
			root = new TreeNode(arr[index]);
			root.left = insertLevelOrder(arr, 2 * index + 1);
			root.right = insertLevelOrder(arr, 2 * index + 2);
		}
	}
	return root;
}

var diameterOfBinaryTree1 = function (root) {
	let dist,
		max = 0,
		current,
		queue = [];

	queue.push(root);

	while (queue.length > 0) {
		current = queue.shift();
		dist = dfs(current.left) + dfs(current.right);
		max = Math.max(max, dist);
		if (current.left && current.right) {
			queue.push(current.left);
			queue.push(current.right);
		}
	}

	return max;

	function dfs(root) {
		if (!root) return 0;
		return Math.max(dfs(root.left), dfs(root.right)) + 1;
	}
};

var diameterOfBinaryTree2 = function (root) {
	let result = 0;

	dfs(root);

	return result;

	function dfs(root) {
		if (!root) return -1;

		let left = dfs(root.left);
		let right = dfs(root.right);

		result = Math.max(result, 2 + left + right);

		return 1 + Math.max(left, right);
	}
};
let root = insertLevelOrder([1, 2, 3, 4, 5, 6, 7]);

console.log(diameterOfBinaryTree1(root));
