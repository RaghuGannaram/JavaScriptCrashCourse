/**
    @title 55. Jump Game
    @difficulty Medium
    @url https://leetcode.com/problems/jump-game/

    @description
        Given an array of non-negative integers, you are initially positioned at the first index of the array.
        Each element in the array represents your maximum jump length at that position.
        Determine if you are able to reach the last index.

    @param {number[]} nums
    @return {boolean}
 */

var canJump1 = function (nums) {
    const dp = new Array(nums.length).fill(0),
        n = nums.length;

    dp[0] = nums[0];

    for (let i = 1; i < n; i++) {
        if (dp[i - 1] < i) {
            return false;
        }
        dp[i] = Math.max(dp[i - 1], i + nums[i]);
    }

    return dp[n - 1] >= n - 1;
};

var canJump2 = function (nums) {
    let canReachFrom = nums.length - 1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= canReachFrom) {
            canReachFrom = i;
        }
    }

    return canReachFrom === 0;
};
