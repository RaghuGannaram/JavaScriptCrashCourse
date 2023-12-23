/**
    @url https://leetcode.com/problems/find-peak-element/
    @title 162. Find Peak Element
    @difficulty Medium

    @description
        A peak element is an element that is greater than its neighbors.
        Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.
        The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.
        You may imagine that nums[-1] = nums[n] = -∞.

    @param {number[]} nums
    @return {number}
 */

var findPeakElement1 = function (nums) {
    let l = 0,
        r = nums.length - 1,
        m;

    while (l <= r) {
        m = Math.floor((l + r) / 2);

        nums[m] < nums[m + 1] ? (l = m + 1) : (r = m - 1);
    }

    return l;
};

var findPeakElement2 = function (nums) {
    let l = 0,
        r = nums.length - 1,
        m;

    while (l <= r) {
        m = Math.floor((l + r) / 2);

        nums[m] < nums[m - 1] ? (r = m - 1) : (l = m + 1);
    }

    return r;
};

var findPeakElement3 = function (nums) {
    let l = 0,
        r = nums.length - 1,
        m;

    while (l <= r) {
        m = Math.floor((l + r) / 2);

        if ((nums[m - 1] ?? Number.MIN_SAFE_INTEGER) < nums[m] && nums[m] > (nums[m + 1] ?? Number.MIN_SAFE_INTEGER))
            return m;

        nums[m] < nums[m + 1] ? (l = m + 1) : (r = m - 1);
    }

    return l;
};

var findPeakElement4 = function (nums) {
    let l = 0,
        r = nums.length - 1,
        m;

    while (l <= r) {
        m = Math.floor((l + r) / 2);

        if ((nums[m - 1] ?? Number.MIN_SAFE_INTEGER) < nums[m] && nums[m] > (nums[m + 1] ?? Number.MIN_SAFE_INTEGER))
            return m;

        nums[m] < nums[m - 1] ? (r = m - 1) : (l = m + 1);
    }

    return r;
};

let nums = [1, 2, 3, 1];

console.log(findPeakElement1(nums));
