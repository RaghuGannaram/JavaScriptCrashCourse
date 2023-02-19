/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
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

var isSubtree = function (root, subRoot) {
	if (!root) {
		return false;
	} else if (isMatch(root, subRoot)) {
		return true;
	} else {
		return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
	}
};

function isMatch(root1, root2) {
	if (!root1 && !root2) {
		return true;
	}
	if (!root1 || !root2 || root1.val !== root2.val) {
		return false;
	}
	return isMatch(root1.left, root2.left) && isMatch(root1.right, root2.right);
}

let root = insertLevelOrder([3, 4, 5, 1, 2]);
let subRoot = insertLevelOrder([4, 1, 2]);

console.log(isSubtree(root, subRoot));
