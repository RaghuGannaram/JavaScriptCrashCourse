/**
    @title 494. Target Sum
    @difficulty Medium
    @url https://leetcode.com/problems/target-sum/

    @description
        You are given a list of non-negative integers, a1, a2, ..., an, and a target, S.
        Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.
        Find out how many ways to assign symbols to make sum of integers equal to target S.

    @param {number[]} nums
    @param {number} S
    @return {number}
 */

var findTargetSumWays1 = function (nums, target) {
    return backtrack(0, 0);

    function backtrack(sum, i) {
        if (i === nums.length) {
            if (sum === target) return 1;
            else return 0;
        }

        return backtrack(sum + nums[i], i + 1) + backtrack(sum - nums[i], i + 1);
    }
};

var findTargetSumWays2 = function (nums, target) {
    let dp = new Map();

    return backtrack(0, 0);

    function backtrack(sum, i) {
        if (dp.has(`${sum}-${i}`)) return dp.get(`${sum}-${i}`);

        if (i === nums.length) {
            if (sum === target) return 1;
            else return 0;
        }

        let count = backtrack(sum + nums[i], i + 1) + backtrack(sum - nums[i], i + 1);

        dp.set(`${sum}-${i}`, count);

        return count;
    }
};