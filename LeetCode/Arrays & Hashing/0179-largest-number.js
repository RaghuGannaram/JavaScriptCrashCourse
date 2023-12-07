/**
    @title 179. Largest Number
    @difficulty medium
    @url https://leetcode.com/problems/largest-number/

    @description
        Given a list of non-negative integers nums, arrange them such that they form the largest number.
        Note: The result may be very large, so you need to return a string instead of an integer.

    @param {number[]} nums
    @return {string}
 */

var largestNumber = function (nums) {
    let res = nums
        .map((n) => n.toString())
        .sort((a, b) => b + a - (a + b))
        .join("");
    return res[0] === "0" ? "0" : res;
};

let nums = [3, 30, 34, 5, 9];

console.log(largestNumber(nums));
