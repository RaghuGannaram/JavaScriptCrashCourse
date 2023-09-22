/**
    @url https://leetcode.com/problems/search-insert-position/
    @title 35. Search Insert Position
    @difficulty Easy

    @description
        Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
        You may assume no duplicates in the array.

    @param {number[]} nums
    @param {number} target
    @return {number}
 */

var searchInsert1 = function (nums, target) {
    let l = 0, r = nums.length, m;

    while (l < r) {
        m = Math.floor((l + r) / 2);
        if (target === nums[m]) return m;

        else if (target > nums[m]) l = m + 1;
        else r = m;
    }

    return l;
};

var searchInsert2 = function (nums, target) {
    let l = 0, r = nums.length - 1, m;

    while (l <= r) {
        m = Math.floor((l + r) / 2);

        if (nums[m] === target) return m;

        if (nums[m] < target) l = m + 1;
        else r = m - 1;
    }

    return l;
};

let nums = [1, 3, 5, 6], target = 5;

console.log(searchInsert1(nums, target));