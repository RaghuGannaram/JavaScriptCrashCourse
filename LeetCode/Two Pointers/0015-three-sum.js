/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum1 = function (nums) {
	let l,
		r,
		sum,
		result = [];

	nums.sort((a, b) => a - b);
    
	for (let i = 0; i < nums.length; i++) {
		l = i + 1;
		r = nums.length - 1;

		if (i > 0 && nums[i] === nums[i - 1]) continue;

		while (l < r) {
			sum = nums[i] + nums[l] + nums[r];

			if (sum === 0) {
				result.push([nums[i], nums[l], nums[r]]);
				l++;
				while (nums[l] === nums[l - 1] && l < r) l++;
			} else if (sum > 0) {
				r--;
			} else {
				l++;
			}
		}
	}

	return result;
};

console.log(threeSum1([-1, 0, 1, 2, -1, -4]));
