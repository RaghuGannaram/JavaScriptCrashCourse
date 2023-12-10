/**
    @title 1984. Minimum Difference Between Highest and Lowest of K Scores
    @difficulty Medium
    @url https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/

    @description
        You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. You are also given an integer k.
        Pick the scores of any k students from the array so that the difference between the highest and the lowest of the k scores is minimized.
        Return the minimum possible difference.

    @params {number[]} nums
    @params {number} k
    @return {number}
 */

var minimumDifference = function (nums, k) {
    if (k <= 1) return 0;

    let i = 0, difference = Number.MAX_SAFE_INTEGER;
    nums.sort((a, b) => a - b);

    while (i < nums.length - (k - 1)) {
        difference = Math.min(difference, nums[i + k - 1] - nums[i])
        i++;
    }

    return difference;
};

let input = [9, 4, 1, 7], k = 2;

console.log(minimumDifference(input, k));
