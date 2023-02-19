/**
 * @param {TreeNode} root
 * @return {TreeNode}
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

var invertTree1 = function (root) {
	dfs(root);
	return root;

	function dfs(node) {
		if (!node) return;
		let temp = node.left;
		node.left = node.right;
		node.right = temp;
		dfs(node.left);
		dfs(node.right);
	}
};

var invertTree2 = function (root) {
	if (!root) return null;
	
	let left = invertTree2(root.left);
	let right = invertTree2(root.right);

	root.left = right;
	root.right = left;

	return root;
};
let root = insertLevelOrder([4, 2, 7, 1, 3, 6, 9]);

console.log(root);
console.log(invertTree1(root));
