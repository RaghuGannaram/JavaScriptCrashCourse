/**
    @title 543. Diameter of Binary Tree
    @difficulty easy
    @url https://leetcode.com/problems/diameter-of-binary-tree/

	@description
		Given the root of a binary tree, return the length of the diameter of the tree.
		The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
		This path may or may not pass through the root.
		The length of a path between two nodes is represented by the number of edges between them.

	@param {TreeNode} root
	@return {number}
 */

var diameterOfBinaryTreeRecursive = function (root) {
    let res = 0;

    dfs(root);

    return res;

    function dfs(node) {
        if (!node) return 0;

        const left = dfs(node.left);
        const right = dfs(node.right);

        res = Math.max(res, left + right);

        return 1 + Math.max(left, right);
    }
};

var diameterOfBinaryTreeIterative = function (root) {
    let dist,
        max = 0,
        current,
        queue = [];

    queue.push(root);

    while (queue.length > 0) {
        current = queue.shift();

        dist = dfs(current.left) + dfs(current.right);

        max = Math.max(max, dist);
        if (current.left && current.right) {
            queue.push(current.left);
            queue.push(current.right);
        }
    }

    return max;

    function dfs(root) {
        if (!root) return 0;
        return 1 + Math.max(dfs(root.left), dfs(root.right));
    }
};
