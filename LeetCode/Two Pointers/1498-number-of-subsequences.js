/**
    @title 1498. Number of Subsequences That Satisfy the Given Sum Condition
    @difficulty Medium
    @url https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition

    @description
        You are given an array of integers nums and an integer target.
        Return the number of non-empty subsequences of nums such that the sum of the minimum and maximum element on it is less or equal to target. 
        Since the answer may be too large, return it modulo 109 + 7.

    @param {number[]} nums
    @param {number} target
    @return {number}
 */

var numSubseq1 = function (nums, target) {
    let res = 0,
        mod = 10 ** 9 + 7;

    nums.sort((a, b) => a - b);

    for (let l, r, i = 0; i < nums.length; i++) {
        l = i;
        r = nums.length - 1;

        while (nums[l] + nums[r] > target && l <= r) r--;

        if (l <= r) {
            res += 2 ** (r - l) % mod;
            res %= mod;
        }
    }

    return res;
};

var numSubseq2 = function (nums, target) {
    const mod = 1000000007,
        arr = [];
    let num = 1;

    for (let i = 0; i < nums.length; i++) {
        arr.push(num);
        num = (num * 2) % mod;
    }

    nums.sort((a, b) => a - b);

    let count = 0,
        j = nums.length - 1;

    for (let i = 0; i < nums.length && nums[i] * 2 <= target; i++) {
        while (j && nums[j] + nums[i] > target) j--;

        count = (count + arr[j - i]) % mod;
    }
    return count;
};
