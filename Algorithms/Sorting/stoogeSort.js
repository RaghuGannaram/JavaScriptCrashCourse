function stoogeSort(arr, l = 0, r = arr.length - 1) {
	if (arr[l] > arr[r]) {
		[arr[l], arr[r]] = [arr[r], arr[l]];
	}

	if (r - l + 1 > 2) {
		let t = Math.floor((r - l + 1) / 3);
		stoogeSort(arr, l, r - t);
		stoogeSort(arr, l + t, r);
		stoogeSort(arr, l, r - t);
	}

  return arr;
}

let input = [234, 43, 234, -56, -56, 55, 63, 5, 6, 235, 547];
console.log("input : ", input);
let output = stoogeSort(input, 0, input.length - 1);
console.log("output : ", output);
