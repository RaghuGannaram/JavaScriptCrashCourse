/**
    @url https://leetcode.com/problems/permutations/
    @title 46. Permutations
    @difficulty Medium

    @description
        Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

    @param {number[]} nums
    @return {number[][]}
 */

var permute = function (nums) {
    let res = [];

    backtrack([]);

    return res;

    function backtrack(cur) {
        if (cur.length === nums.length) {
            res.push([...cur]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (!cur.includes(nums[i])) {
                cur.push(nums[i]);
                backtrack(cur);
                cur.pop();
            }
        }
    }
};

let nums = [1, 2, 3];

console.log(permute(nums)); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]