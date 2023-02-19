/**
 * @param {TreeNode} root
 * @return {boolean}
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

var isBalanced = function (root) {
	if (!root) return true;

	return checkBalance(root) !== -1;

	function checkBalance(root) {
		if (!root) return 0;
		let left = checkBalance(root.left);
		let right = checkBalance(root.right);
		if (left == -1 || right == -1 || Math.abs(left - right) > 1) {
			return -1;
		}
		return 1 + Math.max(left, right);
	}
};

let root = insertLevelOrder([1, 2, null, 4, 5, null, null, 6, 7]);

console.log(isBalanced(root));
