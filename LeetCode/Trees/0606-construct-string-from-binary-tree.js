/**
    @title 606. Construct String from Binary Tree
    @difficulty Easy
    @url https://leetcode.com/problems/construct-string-from-binary-tree/

    @description
        You need to construct a string consists of parenthesis and integers from a binary tree with the preorder traversing way.
        The null node needs to be represented by empty parenthesis pair "()". 
        And you need to omit all the empty parenthesis pairs that don't affect the one-to-one mapping relationship between the string and the original binary tree.

    @param {TreeNode} root
    @return {string}
 */

var tree2str = function (root) {
    return dfs(root);

    function dfs(node) {
        if (!node) return "";

        let leftStr = dfs(node.left);
        let rightStr = dfs(node.right);

        return `${node.val}${leftStr || rightStr ? `(${leftStr})${rightStr ? `(${rightStr})` : ""}` : ""}`;
    }
};
