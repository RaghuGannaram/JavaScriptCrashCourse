/**
    @title 701. Insert into a Binary Search Tree
    @difficulty medium
    @url https://leetcode.com/problems/insert-into-a-binary-search-tree/

    @description
        You are given the root node of a binary search tree (BST) and a value to insert into the tree.
        Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.
        Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

    @param {TreeNode} root
    @param {number} val
    @return {TreeNode}
 */

var insertIntoBSTRecursive = function (root, val) {
    return dfs(root, val);

    function dfs(node, val) {
        if (!node) return new TreeNode(val);

        if (val < node.val) {
            node.left = dfs(node.left, val);
        } else {
            node.right = dfs(node.right, val);
        }

        return node;
    }
};
