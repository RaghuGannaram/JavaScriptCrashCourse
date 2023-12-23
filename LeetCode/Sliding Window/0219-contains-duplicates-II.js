/**
    @title 219. Contains Duplicate II
    @difficulty Easy
    @url https://leetcode.com/problems/contains-duplicate-ii/

    @description
        Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that
        nums[i] = nums[j] and the absolute difference between i and j is at most k.

    @param {number[]} nums
    @param {number} k
 */

var containsNearbyDuplicates1 = function (nums, k) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) return true;

        map.set(nums[i], i);
    }

    return false;
};

var containsNearbyDuplicate2 = function (nums, k) {
    let set = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) return true;

        set.add(nums[i]);

        if (set.size > k) set.delete(nums[i - k]);
    }

    return false;
};

let nums = [1, 2, 3, 1],
    k = 3;

console.log(containsNearbyDuplicates1(nums, k));
