/**
    @title 26. Remove Duplicates from Sorted Array
    @difficulty Easy
    @url https://leetcode.com/problems/remove-duplicates-from-sorted-array/

    @description
        Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
        Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

    @param {number[]} nums
    @return {number}
 */

var removeDuplicates = function (nums) {
    let l = 0, r = 0;

    while (r < nums.length) {
        if (nums[l] !== nums[r]) {
            l++;
            nums[l] = nums[r]
        }
        r++;
    }

    return l + 1;
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums));

console.log(nums);