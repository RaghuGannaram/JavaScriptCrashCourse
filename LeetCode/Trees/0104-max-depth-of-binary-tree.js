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
		root = new TreeNode(arr[index]);
		root.left = insertLevelOrder(arr, 2 * index + 1);
		root.right = insertLevelOrder(arr, 2 * index + 2);
	}
	return root;
}

var maxDepth = function (root) {
	if (!root) return null;
	return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

let root = insertLevelOrder([3, 9, 20, null, null, 15, 7]);

console.log(root);
console.log(maxDepth(root));
