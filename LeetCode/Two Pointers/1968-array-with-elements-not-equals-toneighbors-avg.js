/**
    @title 1968. Array With Elements Not Equal to Average of Neighbors
    @difficulty Medium
    @url https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/

    @description
        You are given a 0-indexed array nums of distinct integers. You want to rearrange the elements in the array such that every element in the rearranged array is not equal to the average of its neighbors.
        More formally, the rearranged array should have the property such that for every i in the range 1 <= i < nums.length - 1, (nums[i-1] + nums[i+1]) / 2 != nums[i].
        Return any rearrangement of nums that meets the requirements.

    @param {number[]} nums
    @return {number[]}
 */

var rearrangeArray1 = function (nums) {
    let res = [], l = 0, r = nums.length - 1;

    nums.sort((a, b) => a - b);

    while (l <= r) {
        res.push(nums[l]);
        l++;

        if (l < r) {
            res.push(nums[r]);
            r--;
        }
    }

    return res;
};

var rearrangeArray2 = function (nums) {
    nums.sort((a, b) => a - b);
    for (let i = 1; i < nums.length - 1; i += 2) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
    }
    return nums;
};

var rearrangeArray3 = function (nums) {
    let res = [], l = 0, r = nums.length - 1;

    nums.sort((a, b) => a - b);

    while (l < r) {
        res.push(nums[l]);
        res.push(nums[r]);
        l++;
        r--;
    }

    if (res.length < nums.length) res.push(nums[l])

    return res;
};

let nums = [1, 2, 3, 4, 5];

console.log(rearrangeArray1(nums)); // [1, 5, 2, 4, 3]