/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutiveSequence = function (nums) {
	let max = 0,
		currentMax,
		set = new Set(nums);

	for (let i = 0; i < nums.length; i++) {
		if (set.has(nums[i] - 1)) {
			continue;
		}
		currentMax = 1;
		while (set.has(nums[i] + currentMax)) {
			currentMax += 1;
		}
		max = Math.max(max, currentMax);
	}
	return max;
};

console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]));
