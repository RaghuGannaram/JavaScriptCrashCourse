/** 
 	@title 217. Contains Duplicate
 	@difficulty easy
 	@url https://leetcode.com/problems/contains-duplicate/

	@description
		Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

	@param {number[]} nums
	@return {boolean}	

*/

// Bruteforce |Time Complexity = O(n^2), Space Complexity = O(1)
var containsDuplicate1 = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) return true;
        }
    }
    return false;
};

//First method using Set() (exit early if true)
var containsDuplicate2 = function (nums) {
    const numsSet = new Set();
    for (const i of nums) {
        if (numsSet.has(i)) {
            return true;
        }
        numsSet.add(i);
    }
    return false;
};

var containsDuplicate3 = function (nums) {
    const totalWithoutDuplicates = new Map(nums.map((num, index) => [num, index]));
	console.log(totalWithoutDuplicates)
    return totalWithoutDuplicates.size !== nums.length;
};

//Third method using Set() (Fastest runtime at 91.95% and very readable code)
var containsDuplicate4 = function (nums) {
    return new Set(nums).size !== nums.length;
};

console.log(containsDuplicate3([10, 30, 20, 40, 20, 50]));
