/**
    @url https://leetcode.com/problems/non-decreasing-array/
    @title 665. Non-decreasing Array
    @difficulty easy

    @description
        Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.
        We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).

    @param {number[]} nums
    @return {boolean}
 */

var checkPossibility = function (nums) {
    let choices = 1;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] < nums[i]) {
            if (choices === 0) return false;

            if (i > 0 && nums[i + 1] < nums[i - 1]) {
                nums[i + 1] = nums[i];
            }

            choices--;
        }
    }

    return true;
};

let input = [4, 2, 3];

console.log(checkPossibility(input));
