/**
    @title 283. Move Zeroes
    @difficulty Easy
    @url https://leetcode.com/problems/move-zeroes/

    @description
        Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
        Note that you must do this in-place without making a copy of the array.

    @param {number[]} nums
    @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
    let l = 0, r = 0;

    while (r < nums.length) {
        if (nums[r]) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
        }
        r++;
    }
};

let nums = [0, 1, 0, 3, 12];

moveZeroes(nums);

console.log(nums);