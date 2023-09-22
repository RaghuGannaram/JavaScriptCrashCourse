/**
    @url https://leetcode.com/problems/binary-search/
    @title 704. Binary Search
    @difficulty Easy

    @description
        Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums.
        If target exists, then return its index, otherwise return -1.

    @param {number[]} nums
    @param {number} target
    @return {number}
 */

var search1 = function (nums, target) {
  let l = 0, r = nums.length, m;

  while (l < r) {
    m = Math.floor((l + r) / 2);
    if (target === nums[m]) return m;

    else if (target > nums[m]) l = m + 1;
    else r = m;
  }
  return -1;
};


var search2 = function (nums, target) {
  let l = 0, r = nums.length - 1, mid;

  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) return mid;

    if (nums[mid] < target) l = mid + 1;
    else r = mid - 1;
  }

  return -1;
};

let nums = [-1, 0, 3, 5, 9, 12], target = 9;

console.log(search1(nums, target));