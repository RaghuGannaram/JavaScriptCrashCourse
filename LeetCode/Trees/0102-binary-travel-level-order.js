/**
	@title 102. Binary Tree Level Order Traversal
	@difficulty medium
	@url https://leetcode.com/problems/binary-tree-level-order-traversal/

	@description
		Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

	@param {TreeNode} root
	@return {number[][]}
 */

var levelOrder = function (root) {
    let res = [],
        current,
        level = [],
        queue = [],
        l;

    if (!root) return res;

    queue.push(root);

    while (queue.length > 0) {
        l = queue.length;
        level = [];

        for (let i = 0; i < l; i++) {
            current = queue.shift();
            level.push(current.val);

            current.left && queue.push(current.left);
            current.right && queue.push(current.right);
        }

        res.push(level);
    }
    return res;
};
