/**
    @title 94. Binary Tree Inorder Traversal
    @difficulty easy
    @url https://leetcode.com/problems/binary-tree-inorder-traversal/

    @description
        Given the root of a binary tree, return the inorder traversal of its nodes' values.

    @param {TreeNode} root
    @return {number[]}
 */

var inOrderTraversalRecursive = function (root) {
    let res = [];

    dfs(root);

    return res;

    function dfs(node) {
        if (!node) return;

        dfs(node.left);
        res.push(node.val);
        dfs(node.right);
    }
};

var inOrderTraversalIterative = function (root) {
    let res = [],
        current,
        stack = [];

    current = root;

    while (current || stack.length) {
        while (current) {
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();
        res.push(current.val);
        current = current.right;
    }

    return res;
};
