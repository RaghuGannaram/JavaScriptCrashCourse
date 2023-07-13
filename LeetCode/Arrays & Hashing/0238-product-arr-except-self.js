/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf1 = function (nums) {
	const res = [];

	let product = 1;

	for (let i = 0; i < nums.length; i++) {
		res[i] = product;
		product *= nums[i];
	}

	product = 1;
	for (let j = nums.length - 1; j >= 0; j--) {
		res[j] *= product;
		product *= nums[j];
	}

	return res;
};

var productExceptSelf2 = function (nums) {
	let product = 1,
		left = new Array(nums.length),
		right = new Array(nums.right),
		res = [];

	for (let i = 0; i < nums.length; i++) {
		left[i] = product;
		product *= nums[i];
	}

	product = 1;
	for (let j = nums.length - 1; j >= 0; j--) {
		right[j] = product;
		product *= nums[j];
	}

	for (let k = 0; k < nums.length; k++) {
		res[k] = left[k] * right[k];
	}

	return res;
};

var productExceptSelf3 = function (nums) {
	const l = nums.length;
	const result = [],
			leftProductArr = new Array(l),
			rightProductArr = new Array(l);

	for (let i = 0; i < l; i++) {
			leftProductArr[i] = (leftProductArr[i - 1] ?? 1) * (nums[i - 1] ?? 1);
			rightProductArr[l - 1 - i] = (rightProductArr[l - i] ?? 1) * (nums[l - i] ?? 1);
	}

	for (let i = 0; i < l; i++) {
			result.push(leftProductArr[i] * rightProductArr[i]);
	}
	return result;
};

console.log(productExceptSelf2([2, 3, 4, 5, 6]));
