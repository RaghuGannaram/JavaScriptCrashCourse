/**
    @title 1929. Concatenation of Array
    @difficulty easy
    @url https://leetcode.com/problems/concatenation-of-array/

    @description    
        Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
        Specifically, ans is the concatenation of two nums arrays.
        Return the array ans.

    @param {number[]} nums
    @return {number[]}
 */

var getConcatenation = function (nums) {
    let res = Array.from(nums);

    for (let n of nums) res.push(n);

    return res;
};

let nums = [1, 2, 1];

console.log(getConcatenation(nums));
