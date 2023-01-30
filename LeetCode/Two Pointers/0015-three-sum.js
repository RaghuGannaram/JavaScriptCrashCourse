/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum1 = function (nums) {
	let l,
		r,
		sum,
		res = [];

	nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length; i++) {
		l = i + 1;
		r = nums.length - 1;

		if (i > 0 && nums[i] === nums[i - 1]) continue;

		while (l < r) {
			sum = nums[i] + nums[l] + nums[r];

			if (sum === 0) {
				res.push([nums[i], nums[l], nums[r]]);
				l++;
				while (nums[l] === nums[l - 1] && l < r) l++;
			} else if (sum > 0) {
				r--;
			} else {
				l++;
			}
		}
	}

	return res;
};

var threeSum2 = function (nums) {
	let l,
		r,
		sum,
		res = [];

	nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length; i++) {
		l = i + 1;
		r = nums.length - 1;

		if (i > 0 && nums[i - 1] === nums[i]) continue;

		while (l < r) {
			sum = nums[i] + nums[l] + nums[r];

			if (sum < 0) {
				l++;
			}
			if (sum > 0) {
				r--;
			}
			if (sum === 0) {
				res.push([nums[i], nums[l], nums[r]]);
				l++;
				while (nums[l - 1] === nums[l] && l < r) {
					l++;
				}
			}
		}
	}

	return res;
};

console.log(threeSum2([-1, 0, 1, 2, -1, -4]));
