function shellSort(arr) {
	let j,
		temp,
		n = arr.length;

	for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
		for (let i = gap; i < n; i++) {
			j = i;
			temp = arr[j];

			while (j >= gap && arr[j - gap] > temp) {
				arr[j] = arr[j - gap];
				j -= gap;
			}

			arr[j] = temp;
		}
	}

	return arr;
}

let input = [234, 43, 234, -56, -56, 55, 63, 5, 6, 235, 547];
console.log("input : ", input);
let output = shellSort(input);
console.log("output : ", output);
