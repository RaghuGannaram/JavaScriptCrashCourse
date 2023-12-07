/**
    @title 75. Sort Colors
    @difficulty medium
    @url https://leetcode.com/problems/sort-colors/

    @description
        Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent,
        with the colors in the order red, white, and blue.
        We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
        You must solve this problem without using the library's sort function.

    @params	{number[]} nums
    @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function (nums) {
    let l = 0,
        m = 0,
        r = nums.length - 1;

    while (m <= r) {
        if (nums[m] === 0) {
            [nums[l], nums[m]] = [nums[m], nums[l]];
            l++;
            m++;
        } else if (nums[m] === 2) {
            [nums[m], nums[r]] = [nums[r], nums[m]];
            r--;
        } else {
            m++;
        }
    }
};

let input = [2, 0, 2, 1, 1, 0];

sortColors(input);
console.log(input);
