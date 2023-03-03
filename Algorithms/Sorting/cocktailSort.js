function cocktailSort(arr) {
	let l = 0,
		r = arr.length,
		swapped = true;

	while (swapped) {
		swapped = false;
		for (let i = l; i < r - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
				swapped = true;
			}
		}

		r--;
		if (!swapped) break;

		swapped = false;
		for (let i = r - 1; i > l; i--) {
			if (arr[i - 1] > arr[i]) {
				[arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
				swapped = true;
			}
		}

		l++;
	}

	return arr;
}

let input = [234, 43, 234, -56, -56, 55, 63, 5, 6, 235, 547];
console.log("input : ", input);
let output = cocktailSort(input);
console.log("output : ", output);
