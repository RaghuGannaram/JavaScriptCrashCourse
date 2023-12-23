/**
    @title 101. Symmetric Tree
    @difficulty Easy
    @url https://leetcode.com/problems/symmetric-tree/

    @description
        Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

    @param {TreeNode} root
    @return {boolean}
 */

var isSymmetric = function (root) {
    if (!root) return true;

    return dfs(root.left, root.right);

    function dfs(node1, node2) {
        if (!node1 && !node2) return true;

        if (!node1 || !node2 || node1.val !== node2.val) return false;

        return dfs(node1.left, node2.right) && dfs(node1.right, node2.left);
    }
};
