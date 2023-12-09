/**
    @title 698. Partition to K Equal Sum Subsets
    @difficulty Medium
    @url https://leetcode.com/problems/partition-to-k-equal-sum-subsets/

    @description
        Given an integer array nums and an integer k, return true if it is possible to divide this array into k non-empty subsets whose sums are all equal.

    @param {number[]} nums
    @param {number} k
    @return {boolean}
 */

var canPartitionKSubsets = function (nums, k) {
    let visited = new Array(nums.length).fill(false),
        sum = nums.reduce((a, b) => a + b);

    if (sum % k !== 0) return false;

    let target = sum / k;

    return backtrack(0, 0, 0);

    function backtrack(cur, start, count) {
        if (count === k) return true;
        if (cur > target) return false;
        if (cur === target) return backtrack(0, 0, count + 1);

        for (let i = start; i < nums.length; i++) {
            if (visited[i] || cur + nums[i] > target) continue;

            visited[i] = true;
            if (backtrack(cur + nums[i], i + 1, count)) return true;
            visited[i] = false;
        }

        return false;
    }
};

let nums = [4, 3, 2, 3, 5, 2, 1],
    k = 4;

console.log(canPartitionKSubsets(nums, k)); // true
