/**
    @title 45. Jump Game II
    @difficulty Medium
    @url https://leetcode.com/problems/jump-game-ii/

    @description
        Given an array of non-negative integers, you are initially positioned at the first index of the array.
        Each element in the array represents your maximum jump length at that position.
        Your goal is to reach the last index in the minimum number of jumps.
        You can assume that you can always reach the last index.

    @param {number[]} nums
    @return {number}
 */

var jump = function (nums) {
    let res = 0,
        l = 0,
        r = 0,
        farthest;

    while (r < nums.length - 1) {
        farthest = 0;

        for (let i = l; i <= r; i++) {
            farthest = Math.max(farthest, i + nums[i]);
        }
        l = r + 1;
        r = farthest;
        res++;
    }

    return res;
};
