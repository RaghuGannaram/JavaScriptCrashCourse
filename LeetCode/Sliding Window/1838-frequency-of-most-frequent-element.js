/**
    @title  1838. Frequency of the Most Frequent Element
    @difficulty Medium
    @url https://leetcode.com/problems/frequency-of-the-most-frequent-element/

    @description
        The frequency of an element is the number of times it occurs in an array.
        You are given an integer array nums and an integer k.
        In one operation, you can choose an index of nums and increment the element at that index by 1.
        Return the maximum possible frequency of an element after performing at most k operations.

    @param {number[]} nums
    @param {number} k
    @return {number}
 */

var maxFrequency = function (nums, k) {
    let res = 0,
        l = 0,
        r = 0,
        sum = 0;

    nums.sort((a, b) => a - b);

    while (r < nums.length) {
        sum += nums[r];

        while (nums[r] * (r - l + 1) - sum > k) {
            sum -= nums[l];
            l++;
        }

        res = Math.max(res, r - l + 1);
        r++;
    }

    return res;
};
