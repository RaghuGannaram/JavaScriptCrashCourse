/**
    @url https://leetcode.com/problems/number-of-zero-filled-subarrays/
    @title 2348. Number of Zero-Filled Subarrays
    @difficulty medium

    @description
        Given an array of integers nums and an integer k, return the number of non-empty subarrays that have a sum equal to 0.

    @params	{number[]} nums
    @return {number}
 */

var zeroFilledSubarray = function (nums) {
    let count = 0, res = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            count++;
            continue;
        }
        if (count !== 0) {
            res += count * ((count + 1) / 2);
            count = 0;
        }
    }

    if (count) {
        res += count * ((count + 1) / 2);
    }

    return res;
};

let input = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

console.log(zeroFilledSubarray(input));