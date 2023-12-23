/**
    @title  958. Check Completeness of a Binary Tree
    @difficulty medium
    @url https://leetcode.com/problems/check-completeness-of-a-binary-tree/

    @description
        Given the root of a binary tree, determine if it is a complete binary tree.
        In a complete binary tree, every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible.
        It can have between 1 and 2h nodes inclusive at the last level h.

    @param {TreeNode} root
    @return {boolean}
 */

var isCompleteTree = function (root) {
    let current,
        foundNull = false,
        queue = [];

    if (!root) return false;

    queue.push(root);

    while (queue.length > 0) {
        current = queue.shift();

        if (!current) foundNull = true;
        else {
            if (foundNull) return false;

            queue.push(current.left);
            queue.push(current.right);
        }
    }

    return true;
};
