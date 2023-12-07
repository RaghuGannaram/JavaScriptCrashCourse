/**
    @title 560. Subarray Sum Equals K
    @difficulty Medium
    @url https://leetcode.com/problems/subarray-sum-equals-k/

    @description    
        Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

    @param {number[]} nums
    @param {number} k
    @return {number}
 */


// Solution 1: Brute Force
// Time: O(n^2) Space: O(1)

var subarraySum1 = function (nums, k) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let sum = 0;

        for (let j = i; j < nums.length; j++) {
            sum += nums[j];

            if (sum === k) {
                count++;
            }
        }
    }

    return count;
}

// Solution 2: Hash Map
// Time: O(n) Space: O(n)

var subarraySum2 = function (nums, k) {
    let sum = 0, count = 0, map = new Map();

    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) { 
        sum += nums[i];
        
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }

        map.set(sum, (map.get(sum) ?? 0) + 1);
    }

    return count;
};

let nums = [1, 1, 1], k = 2;

console.log(subarraySum1(nums, k));