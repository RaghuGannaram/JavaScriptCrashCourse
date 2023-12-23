/**
    @title 103. Binary Tree Zigzag Level Order Traversal
    @difficulty medium
    @url https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

    @description
        Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

    @param {TreeNode} root
    @return {number[][]}
 */

var zigzagLevelOrder = function (root) {
    let res = [],
        toggle = true,
        current,
        l,
        level = [],
        queue = [];

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

        res.push(toggle ? level : level.reverse());
        toggle = !toggle;
    }

    return res;
};
