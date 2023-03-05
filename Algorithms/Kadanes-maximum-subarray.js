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
	let max = nums[0],
		sum = 0;

	for (let i = 0; i < nums.length; i++) {
		if (sum < 0) sum = 0;
		sum += nums[i];
		max = Math.max(max, sum);
	}

	return max;
};

let input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("input : ", input);
let output = maxSubArray(input);
console.log("output : ", output);
