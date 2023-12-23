/**
    @url https://leetcode.com/problems/squares-of-a-sorted-array/
    @title 977. Squares of a Sorted Array
    @difficulty Easy

    @description
        Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

    @param {number[]} nums
    @return {number[]}
 */

var sortedSquares = function (nums) {
    let l = 0,
        r = nums.length - 1,
        i = nums.length - 1,
        res = new Array(nums.length),
        lsq,
        rsq;

    while (l <= r) {
        lsq = nums[l] ** 2;
        rsq = nums[r] ** 2;
        if (lsq > rsq) {
            res[i] = lsq;
            l++;
        } else {
            res[i] = rsq;
            r--;
        }
        i--;
    }

    return res;
};

let nums = [-4, -1, 0, 3, 10];

console.log(sortedSquares(nums));
