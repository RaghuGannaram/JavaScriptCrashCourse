/**
    @title 572. Subtree of Another Tree
    @difficulty easy
    @url https://leetcode.com/problems/subtree-of-another-tree/

	@description
		Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
		A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

	@param {TreeNode} root
	@param {TreeNode} subRoot
	@return {boolean}
 */

var isSubtree = function (root, subRoot) {
    return dfs(root);

    function dfs(node) {
        if (!node) return false;
        if (compare(node, subRoot)) return true;

        return dfs(node.left) || dfs(node.right);
    }

    function compare(node1, node2) {
        if (!node1 && !node2) return true;
        if (!node1 || !node2 || node1.val !== node2.val) return false;

        return compare(node1.left, node2.left) && compare(node1.right, node2.right);
    }
};
