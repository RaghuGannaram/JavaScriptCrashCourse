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

var maxDepth1 = function (root) {
	if (!root) return 0;
	return Math.max(maxDepth1(root.left), maxDepth1(root.right)) + 1;
};

var maxDepth2 = function (root) {
	if (!root) return 0;
	let left = maxDepth1(root.left);
	let right = maxDepth1(root.right);
	let max = Math.max(left, right);
	return max + 1;
};

let root = insertLevelOrder([3, 9, 20, null, null, 15, 7]);

console.log(root);
console.log(maxDepth2(root));
