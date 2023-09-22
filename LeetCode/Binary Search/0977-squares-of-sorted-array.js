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
    let len = nums.length;
    let l = 0, r = len - 1, n1, n2, res = new Array(len);

    len--;

    while (l <= r) {
        n1 = nums[l] * nums[l];
        n2 = nums[r] * nums[r];

        if (n1 > n2) {
            res[len] = n1;
            l++;
        } else {
            res[len] = n2;
            r--;
        }
        len--;
    }

    return res;
};

let nums = [-4, -1, 0, 3, 10];

console.log(sortedSquares(nums));