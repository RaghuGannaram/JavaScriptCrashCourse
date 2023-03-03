function selectionSort(arr) {
	for (let i = 0, min; i < arr.length; i++) {
		min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) min = j;
		}
		if (i !== min) {
			[arr[i], arr[min]] = [arr[min], arr[i]];
		}
	}
	return arr;
}

let input = [234, 43, 234, -56, -56, 55, 63, 5, 6, 235, 547];
console.log("input : ", input);
let output = selectionSort(input);
console.log("output : ", output);
