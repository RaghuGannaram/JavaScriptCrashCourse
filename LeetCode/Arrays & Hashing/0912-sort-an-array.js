/**
    @title 912. Sort an Array
    @difficulty Medium
    @url https://leetcode.com/problems/sort-an-array/

    @description
        Given an array of integers nums, sort the array in ascending order.

    @param {number[]} nums
    @return {number[]}
 */

var sortArray = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            }
        }
    }
};
