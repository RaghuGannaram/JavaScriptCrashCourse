/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
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

var findDuplicateSubtrees = function (root) {
	let map = new Map(),
		result = [],
		hash = "";

	dfs(root, hash);

	return result;

	function dfs(root, hash) {
		console.log(root)
		console.log(hash)
		if (!root) {
			return "#";
		}
		hash += `${root.val},${dfs(root.left, hash)},${dfs(root.right, hash)}`;
console.log(hash)
		map.set(hash, (map.get(hash) ?? 0) + 1);
		if (map.get(hash) === 2) {
			result.push(root);
		}
		return hash;
	}
};

let root = insertLevelOrder([1, 2, 3, 4, 4, 5, 5]);
console.log(root);
console.log(findDuplicateSubtrees(root));
