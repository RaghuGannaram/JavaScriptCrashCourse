function gnomeSort(arr) {
	let pos = 0;
	while (pos < arr.length) {
		if (pos === 0 || arr[pos] >= arr[pos - 1]) {
			pos++;
		} else {
			[arr[pos], arr[pos - 1]] = [arr[pos - 1], arr[pos]];
			pos--;
		}
	}
	return arr;
}

let input = [234, 43, 234, -56, -56, 55, 63, 5, 6, 235, 547];
console.log("input : ", input);
let output = gnomeSort(input);
console.log("output : ", output);
