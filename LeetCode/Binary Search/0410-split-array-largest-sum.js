/**
    @url https://leetcode.com/problems/split-array-largest-sum/
    @title 410. Split Array Largest Sum
    @difficulty Hard

    @description
        Given an array nums which consists of non-negative integers and an integer m, you can split the array into m non-empty continuous subarrays.
        Write an algorithm to minimize the largest sum among these m subarrays.

    @param {number[]} nums
    @param {number} m
    @return {number}
 */

var splitArray = function (nums, k) {
    let l = Math.max(...nums), r = nums.reduce((acc, cur) => acc + cur, 0), res;
    res = r;

    while (l <= r) {
        m = Math.floor((l + r) / 2);

        if (canSplit(m)) {
            res = m;
            r = m - 1;
        }
        else l = m + 1;
    }

    return res;

    function canSplit(m) {
        let sum = 0, count = 1;

        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];

            if (sum > m) {
                count++;
                sum = nums[i];
            }
        }

        return count <= k;
    }
};

let nums = [7, 2, 5, 10, 8], k = 2;

console.log(splitArray(nums, k));