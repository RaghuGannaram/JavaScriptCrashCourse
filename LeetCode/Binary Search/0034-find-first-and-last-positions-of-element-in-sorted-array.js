/**
    @url https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
    @title 34. Find First and Last Position of Element in Sorted Array
    @difficulty Medium

    @description
        Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
        If target is not found in the array, return [-1, -1].
        Follow up: Could you write an algorithm with O(log n) runtime complexity?

    @param {number[]} nums
    @param {number} target
    @return {number[]}
 */

var searchRange1 = function (nums, target) {
    let res = [-1, -1], l = 0, r = nums.length - 1;

    while (nums[l] !== target && l < nums.length) l++;
    while (nums[r] !== target && r >= 0) r--;

    if (l !== nums.length)
        res[0] = l;
    res[1] = r;

    return res;
};

var searchRange2 = function (nums, target) {
    let l = 0, r = nums.length - 1, m;

    while (l <= r) {
        m = Math.floor((l + r) / 2);
        if (nums[m] === target) break;
        if (nums[m] < target) l = m + 1
        else r = m - 1;
    }

    if (l > r) {
        return [-1, -1];
    }

    l = r = m;

    while (nums[l] === target) l--;
    while (nums[r] === target) r++;

    return [++l, --r];
};

let nums = [5, 7, 7, 8, 8, 10], target = 8;

console.log(searchRange1(nums, target));