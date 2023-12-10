/**
    @title 80. Remove Duplicates from Sorted Array II
    @difficulty Medium
    @url https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

    @description
        Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.
        Do not allocate extra space for another array; you must do this by modifying the input array in-place with O(1) extra memory.

    @param {number[]} nums
    @return {number}
 */

var removeDuplicates = function (nums) {
    let l = 0,
        r = 1,
        choices = 1;

    while (r < nums.length) {
        if (nums[l] !== nums[r]) {
            choices = 1;
            l++;
            nums[l] = nums[r];
        } else {
            if (choices) {
                choices = 0;
                l++;
                nums[l] = nums[r];
            }
        }
        r++;
    }
    return l + 1;
};

let nums = [1, 1, 1, 2, 2, 3];

console.log(removeDuplicates(nums)); // 5
