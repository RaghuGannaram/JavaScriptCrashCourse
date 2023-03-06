function countingSort(arr) {
	let result = Array(arr.length),
		min = Math.min(...arr),
		max = Math.max(...arr);

	let range = max - min + 1;

	let counter = Array(range).fill(0);
  
	for (let i = 0; i < arr.length; i++) {
		counter[arr[i] - min]++;
	}

	for (let i = 1; i < counter.length; i++) {
		counter[i] += counter[i - 1];
	}

	for (let i = arr.length - 1; i >= 0; i--) {
		result[counter[arr[i] - min] - 1] = arr[i];
		counter[arr[i] - min]--;
	}
	return result;
}

let input = [234, 43, 234, -56, -56, 55, 63, 5, 6, 235, 547];
console.log("input : ", input);
let output = countingSort(input);
console.log("output : ", output);
