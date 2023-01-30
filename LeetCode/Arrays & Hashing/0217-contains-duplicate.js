/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Bruteforce |Time Complexity = O(n^2), Space Complexity = O(1)
var containsDuplicate1 = function (nums) {
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] === nums[j]) return true;
		}
	}
	return false;
};

//First method using Set() (exit early if true)
var containsDuplicate2 = function (nums) {
	const numsSet = new Set();
	for (const i of nums) {
		if (numsSet.has(i)) {
			return true;
		}
		numsSet.add(i);
	}
	return false;
};

var containsDuplicate2 = function (nums) {
	console.log(nums.map((i, index) => [i, index]));
	const totalWithoutDuplicates = new Map(nums.map((i, index) => [i, index]));
	console.log(totalWithoutDuplicates);
	return totalWithoutDuplicates.size !== nums.length;
};

//Third method using Set() (Fastest runtime at 91.95% and very readable code)
var containsDuplicate3 = function (nums) {
	//Pass the array into a Set() (which removes duplicates) and then compare its size to the original array.
	return new Set(nums).size !== nums.length;
};

console.log(containsDuplicate2([1, 3, 2, 4, 2, 5]));
