/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
	let temp, temp2;
	n = nums.length;

	for (let i = 0; i < n; i++) {
		while (nums[i] - 1 !== i) {
			console.log(nums);
			temp = nums[i] - 1;
			temp2 = nums[i];
			nums[i] = nums[temp];
			nums[temp] = temp2;
			// [, nums[temp]] = [nums[temp], nums[i]];
		}
	}
	console.log(nums);
};

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
