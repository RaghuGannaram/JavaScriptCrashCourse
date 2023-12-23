/**
    @title 617. Merge Two Binary Trees
    @difficulty Easy
    @url https://leetcode.com/problems/merge-two-binary-trees/

    @description
        You are given two binary trees root1 and root2.

        Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. 
        You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, 
        then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

        Return the merged tree.

        Note: The merging process must start from the root nodes of both trees.

    @param {TreeNode} root1
    @param {TreeNode} root2
 */

var mergeTrees = function (root1, root2) {
    return dfs(root1, root2);

    function dfs(node1, node2) {
        if (!node1) return node2;
        if (!node2) return node1;

        let node = new TreeNode(node1.val + node2.val);

        node.left = dfs(node1.left, node2.left);
        node.right = dfs(node1.right, node2.right);

        return node;
    }
};
