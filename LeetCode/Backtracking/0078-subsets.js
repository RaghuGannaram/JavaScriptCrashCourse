/**
    @title 78. Subsets
    @difficulty Medium
    @url https://leetcode.com/problems/subsets/

    @description
        Given an integer array nums of unique elements, return all possible subsets (the power set).
        The solution set must not contain duplicate subsets. Return the solution in any order.

    @param {number[]} nums
    @return {number[][]}
 */

var subsets = function (nums) {
    let res = [];

    backtrack(0, []);

    return res;

    function backtrack(i, cur) {
        if (i === nums.length) {
            res.push([...cur]);
            return;
        }
        cur.push(nums[i]);
        backtrack(i + 1, cur);

        cur.pop();
        backtrack(i + 1, cur);
    }
};

let nums = [1, 2, 3];

console.log(subsets(nums)); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
