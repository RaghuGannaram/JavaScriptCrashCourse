/**
    @title 152. Maximum Product Subarray
    @difficulty Medium
    @url https://leetcode.com/problems/maximum-product-subarray/

    @description
        Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

    @param {number[]} nums
    @return {number}
 */

var maxProduct = function (nums) {
    let res = Math.max(...nums),
        curMin = 1,
        curMax = 1;

    for (let num of nums) {
        if (num === 0) {
            [curMin, curMax] = [1, 1];
            continue;
        }

        [curMin, curMax] = [Math.min(num, num * curMin, num * curMax), Math.max(num, num * curMin, num * curMax)];
        res = Math.max(res, curMax);
    }

    return res;
};
