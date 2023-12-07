/**
    @title 303. Range Sum Query - Immutable
    @difficulty easy
    @url https://leetcode.com/problems/range-sum-query-immutable/

    @description
        Given an integer array nums, handle multiple queries of the following type:
        Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
        Implement the NumArray class:
        NumArray(int[] nums) Initializes the object with the integer array nums.
        int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive
        (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

    @param {number[]} nums
 */

var NumArray = function (nums) {
    this.prefixSum = new Array(nums.length).fill(0);
    this.prefixSum[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        this.prefixSum[i] = this.prefixSum[i - 1] + nums[i];
    }
};

/**
 *
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

NumArray.prototype.sumRange = function (left, right) {
    return this.prefixSum[right] - (this.prefixSum[left - 1] ?? 0);
};
