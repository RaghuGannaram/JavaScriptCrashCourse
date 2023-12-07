/**
 	@title 128. Longest Consecutive Sequence
 	@difficulty hard
 	@url https://leetcode.com/problems/longest-consecutive-sequence/

	@description
		Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
		You must write an algorithm that runs in O(n) time.

	@params	{number[]} nums
	@return {number}
 */

var longestConsecutive = function (nums) {
	let streak, res = 0, set = new Set(nums);

	for (let n of nums) {
		if (set.has(n - 1)) continue;
		streak = 0;

		while (set.has(n + streak)) {
			streak++;
		}

		res = Math.max(res, streak);
	}

	return res;
};

let nums = [100, 4, 200, 1, 3, 2];

console.log(longestConsecutive(nums));