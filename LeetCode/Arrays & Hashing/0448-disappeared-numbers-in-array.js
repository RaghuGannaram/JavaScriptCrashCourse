/**
    @url https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
    @title 448. Find All Numbers Disappeared in an Array
    @difficulty easy

    @description
        Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n]
        that do not appear in nums.

    @params	{number[]} nums
    @return {number[]}
 */

var findDisappearedNumbers1 = function (nums) {
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        nums[Math.abs(nums[i]) - 1] = -Math.abs(nums[Math.abs(nums[i]) - 1]);
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) result.push(i + 1);
    }
    return result;
}

var findDisappearedNumbers2 = function (nums) {
    let res = [];

    for (let i = 0, temp; i < nums.length; i++) {
        while (nums[nums[i] - 1] !== nums[i]) {
            temp = nums[i] - 1;
            [nums[i], nums[temp]] = [nums[temp], nums[i]];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] - 1 !== i) {
            res.push(i + 1);
        }
    }

    return res;
};

let nums = [4, 3, 2, 7, 8, 2, 3, 1];

console.log(findDisappearedNumbers1(nums));