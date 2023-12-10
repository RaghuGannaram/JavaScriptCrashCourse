/**
    @title 167. Two Sum II - Input array is sorted
    @difficulty Easy
    @url https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
    
    @description
        Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
        The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.
        Note: Your returned answers (both index1 and index2) are not zero-based.

    @param {number[]} numbers
    @param {number} target
    @return {number[]}
*/

var twoSum = function (numbers, target) {
    let sum,
        [l, r] = [0, numbers.length - 1];

    while (l < r) {
        sum = numbers[l] + numbers[r];
        if (sum === target) return [++l, ++r];

        sum < target ? l++ : r--;
    }
};

let numbers = [2, 7, 11, 15],
    target = 9;

console.log(twoSum(numbers, target));
