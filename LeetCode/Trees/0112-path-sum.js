/**
    @title 112. Path Sum
    @difficulty Easy
    @url https://leetcode.com/problems/path-sum/

    @description
        Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that 
        adding up all the values along the path equals targetSum.
        A leaf is a node with no children.

    @param {TreeNode} root
    @param {number} targetSum
    @return {boolean}
 */

var hasPathSum = function (root, targetSum) {
    return dfs(root, targetSum);

    function dfs(node, remainder) {
        if (!node) return false;

        if (!node.left && !node.right) return remainder === node.val;

        return dfs(node.left, remainder - node.val) || dfs(node.right, remainder - node.val);
    }
};
