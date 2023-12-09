/**
    @title 90. Subsets II
    @difficulty Medium
    @url https://leetcode.com/problems/subsets-ii/

    @description
        Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

        The solution set must not contain duplicate subsets. Return the solution in any order.

    @param {number[]} nums
    @return {number[][]}
 */

var subsetsWithDup = function (nums) {
    let res = [];
    nums.sort((a, b) => a - b);

    backtrack(0, []);

    return res;

    function backtrack(i, cur) {
        if (i === nums.length) {
            res.push([...cur]);
            return;
        }

        cur.push(nums[i]);
        backtrack(i + 1, cur);

        while (i < nums.length && nums[i] === nums[i + 1]) i++;

        cur.pop();
        backtrack(i + 1, cur);
    }
};

let nums = [1, 2, 2];

console.log(subsetsWithDup(nums)); // [[],[1],[1,2],[1,2,2],[2],[2,2]]
