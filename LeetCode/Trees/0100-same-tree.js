/**
 * @param {TreeNode} p
 * @param {TreeNode} q
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

var isSameTree = function (p, q) {
	return travel(p, q);

	function travel(root1, root2) {
		if (!root1 && !root2) {
			return true;
		}
		if (!root1 || !root2 || root1.val !== root2.val) {
			return false;
		}
		return travel(root1.left, root2.left) && travel(root1.right, root2.right);
	}
};

let root1 = insertLevelOrder([1, 2, null, 3]);
let root2 = insertLevelOrder([1, 2, null, 3]);

console.log(isSameTree(root1, root2));
