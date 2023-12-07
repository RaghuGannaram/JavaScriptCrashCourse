/**
 	@title 1. Two Sum
 	@difficulty easy
 	@url https://leetcode.com/problems/two-sum/

	@description
		Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
		You may assume that each input would have exactly one solution, and you may not use the same element twice.
		You can return the answer in any order.

	@param {number[]} nums
	@param {number} target
 */
//Bruteforce Time complexity = O(n^2), Space complexity = O(1)
var twoSum1 = function (nums, target) {
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] == target) {
				return [i, j];
			}
		}
	}
};

//Hashmap using Object
var twoSum2 = function (nums, target) {
	let hashMap = {};

	for (let i = 0; i < nums.length; i++) {
		console.log(hashMap);
		if (target - nums[i] in hashMap) {
			return [hashMap[target - nums[i]], i];
		} else {
			hashMap[nums[i]] = i;
		}
	}
};

//hashMap using Map
var twoSum3 = function (nums, target) {
	let map = new Map();
	for (let i = 0; i < nums.length; i++) {
		console.log(map);
		if (map.has(target - nums[i])) {
			return [map.get(target - nums[i]), i];
		} else {
			map.set(nums[i], i);
		}
	}
};

console.log(twoSum3([10, 15, 30, 20, 5, 6, 7], 50));
