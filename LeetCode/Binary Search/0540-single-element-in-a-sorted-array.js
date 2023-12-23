/**
    @url https://leetcode.com/problems/single-element-in-a-sorted-array/
    @title 540. Single Element in a Sorted Array
    @difficulty Medium

    @description
        Given a sorted array consisting of only integers where every element appears twice except for one element which appears once. Find this single element that appears only once.
        Note: Your solution should run in O(log n) time and O(1) space.

    @param {number[]} nums
    @return {number}
 */

var singleNonDuplicate1 = function (nums) {
    let l = 0,
        r = nums.length - 1,
        m;

    while (l <= r) {
        m = Math.floor((l + r) / 2);

        if (nums[m - 1] !== nums[m] && nums[m] !== nums[m + 1]) return nums[m];

        if (m % 2 === 0) {
            nums[m] === nums[m + 1] ? (l = m + 1) : (r = m - 1);
        } else {
            nums[m] === nums[m - 1] ? (l = m + 1) : (r = m - 1);
        }
    }

    return nums[l];
};

var singleNonDuplicate2 = function (nums) {
    let l = 0,
        r = nums.length - 1,
        m;

    while (l < r) {
        m = Math.floor((l + r) / 2);
        if (m % 2 === 1) m--;

        nums[m] === nums[m + 1] ? (l = m + 2) : (r = m);
    }

    return nums[l];
};

let nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];

console.log(singleNonDuplicate1(nums));
