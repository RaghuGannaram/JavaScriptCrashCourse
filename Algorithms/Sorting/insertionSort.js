function insertionSort(arr) {
	let j,
		temp,
		n = arr.length;

	for (let i = 1; i < n; i++) {
		j = i;
		temp = arr[j];

		while (arr[j - 1] > temp) {
			arr[j] = arr[j - 1];
			j--;
		}
		arr[j] = temp;
	}
	return arr;
}

let input = [234, 43, 234, -56, -56, 55, 63, 5, 6, 235, 547];
console.log("input : ", input);
let output = insertionSort(input);
console.log("output : ", output);
