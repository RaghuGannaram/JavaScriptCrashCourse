/**
    @title 450. Delete Node in a BST
    @difficulty medium
    @url https://leetcode.com/problems/delete-node-in-a-bst/

    @description
        Given the root of a binary search tree and a value val, 
        delete the node with val from the tree, and return the root of the resulting binary search tree.
        If the node to be deleted has two children, 
        it will be replaced by the smallest node in its right subtree.

    @param {TreeNode} root
    @param {number} key
    @return {TreeNode}
 */

var deleteNode = function (root, key) {
    return dfs(root, key);

    function dfs(node, key) {
        if (!node) return null;

        if (key < node.val) {
            node.left = dfs(node.left, key);
        } else if (key > node.val) {
            node.right = dfs(node.right, key);
        } else {
            if (!node.left) return node.right;
            if (!node.right) return node.left;

            node.val = findMinValue(node.right);
            node.right = dfs(node.right, node.val);
        }

        return node;
    }

    function findMinValue(node) {
        while (node.left) {
            node = node.left;
        }
        return node.val;
    }
};
