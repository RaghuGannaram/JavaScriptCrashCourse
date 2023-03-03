function combSort1(arr) {
	let shrink = 1.3,
		n = arr.length;

	for (let gap = Math.floor(n / shrink); gap >= 1; gap = Math.floor(gap / shrink)) {
		for (let i = 0; i + gap < n; i++) {
			if (arr[i] > arr[i + gap]) {
				[arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
			}
		}
	}
	return arr;
}

function combSort2(arr) {
	let i,
		gap = arr.length,
		shrink = 1.3,
		sorted = false;

	while (!sorted) {
		i = 0;
		gap = Math.floor(gap / shrink);

		if (gap <= 1) {
			gap = 1;
			sorted = true;
		}

		while (i + gap < arr.length) {
			if (arr[i] > arr[i + gap]) {
				[arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
				sorted = false;
			}
			i++;
		}
	}
	return arr;
}

let input = [234, 43, 234, -56, -56, 55, 63, 5, 6, 235, 547];
console.log("input : ", input);
let output = combSort1(input);
console.log("output : ", output);
