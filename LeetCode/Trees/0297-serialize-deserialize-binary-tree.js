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

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
	let result = [];

	dfs(root);

	return result.join(",");

	function dfs(root) {
		if (!root) {
			result.push("N");
			return;
		}
		result.push(root.val.toString());
		dfs(root.left);
		dfs(root.right);
	}
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
	let preorder = data.split(",");

	return dfs();

	function dfs() {
		if (preorder[0] === "N") {
			preorder.shift();
			return null;
		}
		let root = new TreeNode(Number(preorder.shift()));
		root.left = dfs();
		root.right = dfs();
		return root;
	}
};

let root = insertLevelOrder([1, 2, 3, null, null, 4, 5]);
let serializedData = serialize(root);
let deserializedData = deserialize(serializedData);

console.log(serializedData);
console.log(deserializedData);