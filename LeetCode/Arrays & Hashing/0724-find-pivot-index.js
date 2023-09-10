/**
    @url https://leetcode.com/problems/find-pivot-index/
    @title 724. Find Pivot Index
    @difficulty Easy

    @description
        Given an array of integers nums, calculate the pivot index of this array.
        The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
        If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left.
        This also applies to the right edge of the array.
        Return the leftmost pivot index. If no such index exists, return -1.

    @param {number[]} nums
    @return {number}
 */

var pivotIndex1 = function (nums) {
    let left = 0, right = nums.reduce((acc, cur) => acc + cur, 0);

    for (let i = 0; i < nums.length; i++) {
        right -= nums[i];
        if (left === right) return i;
        left += nums[i];
    }

    return -1;
};

var pivotIndex2 = function (nums) {
    let left = 0, sum = nums.reduce((acc, cur) => acc + cur, 0);

    for (let i = 0; i < nums.length; i++) {
        if (left === sum - left - nums[i]) return i;
        left += nums[i];
    }

    return -1;
};

let nums = [1, 7, 3, 6, 5, 6];

console.log(pivotIndex1(nums));