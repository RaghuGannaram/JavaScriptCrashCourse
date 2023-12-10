/**
    @title 18. 4Sum
    @difficulty Medium
    @url https://leetcode.com/problems/4sum/
 
    @description
        Given an array nums of n integers, return an array of all the unique quadruplets
        [nums[a], nums[b], nums[c], nums[d]] such that:
        0 <= a, b, c, d < n
        a, b, c, and d are distinct.
        nums[a] + nums[b] + nums[c] + nums[d] == target
        You may return the answer in any order.

    @param {number[]} nums
    @param {number} target
    @return {number[][]}
 */

var fourSum1 = function (nums, target) {
    let res = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - (4 - 1); i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        for (let l, r, sum, j = i + 1; j < nums.length - (3 - 1); j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            l = j + 1;
            r = nums.length - 1;

            while (l < r) {
                sum = nums[i] + nums[j] + nums[l] + nums[r];

                if (sum === target) {
                    res.push([nums[i], nums[j], nums[l], nums[r]]);
                    l++;
                    while (nums[l] === nums[l - 1] && l < r) l++;
                }

                sum < target ? l++ : r--;
            }
        }
    }
    return res;
};

var fourSum2 = function (nums, target) {
    let res = [],
        cur = [];

    nums.sort((a, b) => a - b);

    kSum(4, 0, target);

    return res;

    function kSum(k, start, target) {
        if (k > 2) {
            for (let i = start; i < nums.length - (k - 1); i++) {
                if (i > start && nums[i] === nums[i - 1]) continue;

                cur.push(nums[i]);
                kSum(k - 1, i + 1, target - nums[i]);
                cur.pop();
            }
            return;
        }

        let sum,
            l = start,
            r = nums.length - 1;

        while (l < r) {
            sum = nums[l] + nums[r];

            if (sum === target) {
                res.push([...cur, nums[l], nums[r]]);
                l++;
                while (nums[l] === nums[l - 1] && l < r) l++;
            }

            sum < target ? l++ : r--;
        }
    }
};

let nums = [1, 0, -1, 0, -2, 2],
    target = 0;

console.log(fourSum2(nums, target)); // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
