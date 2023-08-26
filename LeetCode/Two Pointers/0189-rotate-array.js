/**
    @url https://leetcode.com/problems/rotate-array/
    @title 189. Rotate Array
    @difficulty Easy

    @description
        Given an array, rotate the array to the right by k steps, where k is non-negative.

    @param {number[]} nums
    @param {number} k
    @return {void} Do not return anything, modify nums in-place instead.
 */

// 1. Brute Force
// Time: O(n*k)
// Space: O(1)
var rotate1 = function (nums, k) {
    let temp, previous;

    for (let i = 0; i < k; i++) {
        previous = nums[nums.length - 1];
        for (let j = 0; j < nums.length; j++) {
            temp = nums[j];
            nums[j] = previous;
            previous = temp;
        }
    }
}

// 2. Using Extra Array
// Time: O(n)
// Space: O(n)
var rotate2 = function (nums, k) {
    let a = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        a[(i + k) % nums.length] = nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = a[i];
    }
}

// 3. Using Cyclic Replacements
// Time: O(n)
// Space: O(1)
var rotate3 = function (nums, k) {

    k %= nums.length;

    let count = 0;

    for (let start = 0; count < nums.length; start++) {
        let current = start;
        let prev = nums[start];
        do {
            let next = (current + k) % nums.length;
            let temp = nums[next];
            nums[next] = prev;
            prev = temp;
            current = next;
            count++;
        } while (start !== current);
    }
}
