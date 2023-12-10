/**
 	@title 15. 3Sum
 	@difficulty Medium
 	@url https://leetcode.com/problems/3sum/

	@description 
		Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
		such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
		Notice that the solution set must not contain duplicate triplets.

	@param {number[]} nums
	@return {number[][]}	
 */

var threeSum = function (nums) {
    let res = [];

    nums.sort((a, b) => a - b);

    for (let l, r, sum, i = 0; i < nums.length - (3 - 1); i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        l = i + 1;
        r = nums.length - 1;

        while (l < r) {
            sum = nums[i] + nums[l] + nums[r];

            if (sum === 0) {
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                while (nums[l] === nums[l - 1] && l < r) l++;
            }
            sum > 0 ? r-- : l++;
        }
    }

    return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
