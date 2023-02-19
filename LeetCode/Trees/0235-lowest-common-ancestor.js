/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
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
			if (arr[index]) {
				root = new TreeNode(arr[index]);
				root.left = insertLevelOrder(arr, 2 * index + 1);
				root.right = insertLevelOrder(arr, 2 * index + 2);
			}
		}
	}
	return root;
}

var lowestCommonAncestor1 = function (root, p, q) {
	if (p.val < root.val && q.val < root.val) {
		return lowestCommonAncestor1(root.left, p, q);
	} else if (p.val > root.val && q.val > root.val) {
		return lowestCommonAncestor1(root.right, p, q);
	} else {
		return root;
	}
};

var lowestCommonAncestor2 = function (root, p, q) {
	while (root !== null) {
		if (root.val < p.val && root.val < q.val) {
			root = root.right;
			continue;
		}

		if (p.val < root.val && q.val < root.val) {
			root = root.left;
			continue;
		}

		break;
	}

	return root;
};

let root = insertLevelOrder([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
console.log(lowestCommonAncestor1(root, new TreeNode(3), new TreeNode(5)));
