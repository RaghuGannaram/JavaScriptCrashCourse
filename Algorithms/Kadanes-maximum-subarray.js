/**
 * Kadane's Algorithm
 * 
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * 
 * Algorithm:
 * 1. Initialize maxSum and currentSum to 0.
 * 2. Loop through the array.
 * 3. Add current element to currentSum.
 * 4. Update maxSum if currentSum is greater than maxSum.
 * 5. If currentSum is less than 0, set currentSum to 0.
 * 6. Return maxSum.
 * 
 * Uses:
 * 1. Find the maximum sum of a contiguous subarray.
 * 
 * Time Complexity : O(n)
 * Space Complexity: O(1)
 */

function maxSubArray(nums) {
	let maxSum = 0,
		currentSum = 0;

	for (let i = 0; i < nums.length; i++) {
		currentSum += nums[i];
		maxSum = Math.max(currentSum, maxSum);
		if (currentSum < 0) currentSum = 0;
	}

	return maxSum;
}

let input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubArray(input));