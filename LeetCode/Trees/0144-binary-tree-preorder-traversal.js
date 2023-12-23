/**
    @title 144. Binary Tree Preorder Traversal
    @difficulty easy
 @  url https://leetcode.com/problems/binary-tree-preorder-traversal/

    @description
        Given the root of a binary tree, return the preorder traversal of its nodes' values.

    @param {TreeNode} root
    @return {number[]}
 */

var preOrderTraversalRecursive = function (root) {
    let res = [];

    dfs(root);

    return res;

    function dfs(node) {
        if (!node) return;

        res.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
};

var preOrderTraversalIterative = function (root) {
    let res = [],
        current,
        stack = [];

    stack.push(root);

    while (stack.length > 0) {
        current = stack.pop();

        res.push(current.val);

        current.right && stack.push(current.right);
        current.left && stack.push(current.left);
    }

    return res;
};
