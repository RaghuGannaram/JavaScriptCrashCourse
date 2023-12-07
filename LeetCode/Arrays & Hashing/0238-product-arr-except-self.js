/**
 	@title 238. Product of Array Except Self
 	@difficulty medium
 	@url https://leetcode.com/problems/product-of-array-except-self/

	@description
		Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
		The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
		You must write an algorithm that runs in O(n) time and without using the division operation.

	@params	{number[]} nums
	@return {number[]}
 */

var productExceptSelf1 = function (nums) {
    let res = new Array(nums.length).fill(1);

    for (let i = 0, p = 1; i < nums.length; i++) {
        res[i] = p;
        p *= nums[i];
    }

    for (let i = nums.length - 1, p = 1; i >= 0; i--) {
        res[i] *= p;
        p *= nums[i];
    }

    return res;
};

var productExceptSelf2 = function (nums) {
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
