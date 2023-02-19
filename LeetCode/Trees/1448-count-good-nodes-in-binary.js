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
			if (arr[index]) {
				root = new TreeNode(arr[index]);
				root.left = insertLevelOrder(arr, 2 * index + 1);
				root.right = insertLevelOrder(arr, 2 * index + 2);
			}
		}
	}
	return root;
}

var goodNodes1 = function (root) {
	return dfs(root, root.val);

	function dfs(root, max) {
		let count;
		if (!root) {
			return 0;
		}
		root.val >= max ? (count = 1) : (count = 0);
		count += dfs(root.left, Math.max(max, root.val));
		count += dfs(root.right, Math.max(max, root.val));
		return count;
	}
};

var goodNodes2 = function (root) {
	let count = 0;

	dfs(root, root.val);

	return count;

	function dfs(root, max) {
		if (!root) {
			return;
		}
		root.val >= max && count++;
		dfs(root.left, Math.max(max, root.val));
		dfs(root.right, Math.max(max, root.val));
	}
};

let root = insertLevelOrder();
console.log(goodNodes1(root));
