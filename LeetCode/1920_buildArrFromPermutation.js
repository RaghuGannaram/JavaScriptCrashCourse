/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray1 = function (nums) {
	return nums.map((num)=> nums[num]);
};

var buildArray2 = function (nums) {
	let l = nums.length;
	for (let i = 0; i < l; i++) {
		nums[i] += l * (nums[nums[i]] % l);
	}
	for (let i = 0; i < l; i++) {
		nums[i] = Math.floor(nums[i] / l);
	}

	return nums;
};

console.log(buildArray1([5, 0, 1, 2, 3, 4]));
