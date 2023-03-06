const timSort = (arr) => {
	let RUN = 4,
		n = arr.length;

	for (let i = 0; i < n; i += RUN) {
		insertionSort(arr, i, Math.min(i + RUN - 1, n - 1));
	}
  console.log(arr)

	for (let size = RUN; size < n; size *= 2) {
		for (let left = 0; left < n; left += 2 * size) {
			const mid = left + size - 1;
			const right = Math.min(left + 2 * size - 1, n - 1);
			merge(arr, left, mid, right);
		}
	}
	return arr;
};

const insertionSort = (arr, left, right) => {
	for (let temp, j, i = left + 1; i <= right; i++) {
		j = i;
		temp = arr[j];

		while (j > left && arr[j - 1] > temp) {
			arr[j] = arr[j - 1];
			j--;
		}
		arr[j] = temp;
	}
};

const merge = (arr, left, mid, right) => {
	if (mid >= right) return;
	const len1 = mid - left + 1;
	const len2 = right - mid;
	const larr = Array(len1);
	const rarr = Array(len2);
	for (let i = 0; i < len1; i++) {
		larr[i] = arr[left + i];
	}
	for (let i = 0; i < len2; i++) {
		rarr[i] = arr[mid + 1 + i];
	}
	let i = 0;
	let j = 0;
	let k = left;
	while (i < larr.length && j < rarr.length) {
		if (larr[i] < rarr[j]) {
			arr[k++] = larr[i++];
		} else {
			arr[k++] = rarr[j++];
		}
	}
	while (i < larr.length) {
		arr[k++] = larr[i++];
	}
	while (j < rarr.length) {
		arr[k++] = rarr[j++];
	}
};

let input = [234, 43, 234, -56, -56, 55, 63, 5, 6, 235, 547];
console.log("input : ", input);
let output = timSort(input);
console.log("output : ", output);
