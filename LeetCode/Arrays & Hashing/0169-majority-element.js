/**
    @title 169. Majority Element
    @difficulty easy
    @url https://leetcode.com/problems/majority-element/

    @description
        Given an array nums of size n, return the majority element.
        The majority element is the element that appears more than ⌊n / 2⌋ times.
        You may assume that the majority element always exists in the array.

    @param {number[]} nums
    @return {number}
 */

var majorityElement1 = function (nums) {
    let map = new Map();

    for (let n of nums) {
        map.set(n, (map.get(n) ?? 0) + 1);
    }
    let arr = new Array(...map);

    return arr.sort((a, b) => b[1] - a[1])[0][0];
};

var majorityElement2 = function (nums) {
    let count = 0,
        candidate = nums[0];

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        num === candidate ? count++ : count--;
    }

    return candidate;
};

let nums = [2, 2, 1, 1, 1, 2, 2];

console.log(majorityElement1(nums));
