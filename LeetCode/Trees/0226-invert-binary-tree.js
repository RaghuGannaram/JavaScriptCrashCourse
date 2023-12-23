/**
    @title 226. Invert Binary Tree
    @difficulty easy
    @url https://leetcode.com/problems/invert-binary-tree/

	@description	
		Given the root of a binary tree, invert the tree, and return its root.

	@param {TreeNode} root
	@return {TreeNode}
 */

var invertTreeRecursive = function (root) {
    return dfs(root);

    function dfs(node) {
        if (!node) return null;

        [node.left, node.right] = [node.right, node.left];

        dfs(node.left);
        dfs(node.right);

        return node;
    }
};

var invertTreeIterative = function (root) {
    if (!root) return null;

    let queue = [root];

    while (queue.length) {
        let current = queue.shift();

        [current.left, current.right] = [current.right, current.left];

        current.left && queue.push(current.left);
        current.right && queue.push(current.right);
    }

    return root;
};
