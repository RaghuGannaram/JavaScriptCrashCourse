/*
  Maximum subarray achieved with one pass
  Time Complexity : O(n)
  Space Complexity : O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
	let maxSum = 0,
		currentSum = 0;

	for (let i = 0; i < nums.length; i++) {
		currentSum += nums[i];
		maxSum = Math.max(currentSum, maxSum);
		if (currentSum < 0) currentSum = 0;
	}

	return maxSum;
};

let input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("input : ", input);
let output = maxSubArray(input);
console.log("output : ", output);
