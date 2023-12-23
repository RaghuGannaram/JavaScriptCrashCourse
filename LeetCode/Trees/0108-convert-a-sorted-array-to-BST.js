/**
    @title 108. Convert Sorted Array to Binary Search Tree
    @difficulty Easy
    @url https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

    @description    
        Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
        
        A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

    @param {number[]} nums
    @return {TreeNode}
 */

var sortedArrayToBST = function (nums) {
    return dfs(0, nums.length - 1);

    function dfs(start, end) {
        if (start > end) return null;

        const mid = Math.floor((start + end) / 2);
        const node = new TreeNode(nums[mid]);

        node.left = dfs(start, mid - 1);
        node.right = dfs(mid + 1, end);

        return node;
    }
};
console.log(null?.val)