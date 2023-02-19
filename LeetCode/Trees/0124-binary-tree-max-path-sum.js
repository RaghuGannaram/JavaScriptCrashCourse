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

var maxPathSum = function (root) {
	let max = Number.MIN_SAFE_INTEGER;

	dfs(root);

	return max;

	function dfs(root) {
		if (!root) {
			return 0;
		}
		let lMax = dfs(root.left);
		let rMax = dfs(root.right);
		lMax = Math.max(lMax, 0);
		rMax = Math.max(rMax, 0);
		max = Math.max(max, root.val + lMax + rMax);

		return root.val + Math.max(lMax, rMax, 0);
	}
};

let root = insertLevelOrder([-10,9,20,null,null,15,7])
console.log(maxPathSum(root));
