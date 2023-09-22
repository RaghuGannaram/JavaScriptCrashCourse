/**
    @url https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
    @title 81. Search in Rotated Sorted Array II
    @difficulty Medium

    @description
        There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).
        Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
        For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].
        Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.

    @param {number[]} nums
    @param {number} target
    @return {boolean}
 */

var search = function (nums, target) {
    let l = 0, r = nums.length - 1, m;

    while (l <= r) {
        m = Math.floor((l + r) / 2);

        if (target === nums[m]) return true;

        if (nums[l] === nums[m]) {
            l++;
            continue;
        }

        if (nums[l] <= nums[m]) {
            if (nums[l] <= target && target < nums[m]) r = m - 1;
            else l = m + 1;
        } else {
            if (nums[m] < target && target <= nums[r]) l = m + 1;
            else r = m - 1;
        }
    }


    return false;
};

let nums = [2, 5, 6, 0, 0, 1, 2], target = 0;

console.log(search(nums, target));