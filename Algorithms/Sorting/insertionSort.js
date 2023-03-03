function insertionSort(arr) {
	for (let i = 1, j; i < arr.length; i++) {
		j = i - 1;
		while (arr[j] > arr[j + 1]) {
			[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			j--;
		}
	}
	return arr;
}

let input = [234, 43, 234, -56, -56, 55, 63, 5, 6, 235, 547];
console.log("input : ", input);
let output = insertionSort(input);
console.log("output : ", output);
