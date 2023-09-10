/**
    @url https://leetcode.com/problems/sort-colors/
    @title 75. Sort Colors
    @difficulty medium

    @description
        Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent,
        with the colors in the order red, white, and blue.
        We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
        You must solve this problem without using the library's sort function.

    @params	{number[]} nums
    @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors1 = function (nums) {
    let l = 0, r = nums.length - 1;

    for (let i = 0; i <= r; i++) {
        if (nums[i] === 0) {
            [nums[i], nums[l]] = [nums[l], nums[i]];
            l++;
        } else if (nums[i] === 2) {
            [nums[i], nums[r]] = [nums[r], nums[i]];
            r--;
            i--;
        }
    }
};
    
let input = [2, 0, 2, 1, 1, 0];

sortColors1(input);
console.log(input);