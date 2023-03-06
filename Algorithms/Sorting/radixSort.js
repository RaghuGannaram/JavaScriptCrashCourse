function radixSort(nums) {
	let minVal = Math.min(...nums);

	if (minVal < 0) {
		nums.forEach((num, index) => {
			nums[index] = num - minVal;
		});
	}

	let max = Math.max(...nums.map((num) => num.toString().length));

	for (let k = 0; k < max; k++) {
		let buckets = Array.from({ length: 10 }, () => []);

		for (let i = 0; i < nums.length; i++) {
			let digit = Math.floor(Math.abs(nums[i]) / Math.pow(10, k)) % 10;
			buckets[digit].push(nums[i]);
		}

		nums = [].concat(...buckets);
	}

	if (minVal < 0) {
		nums.forEach((num, index) => {
			nums[index] = num + minVal;
		});
	}
	
	return nums;
}

let input = [234, 43, 234, -56, -56, 55, 63, 5, 6, 235, 547];
console.log("input : ", input);
let output = radixSort(input);
console.log("output : ", output);
