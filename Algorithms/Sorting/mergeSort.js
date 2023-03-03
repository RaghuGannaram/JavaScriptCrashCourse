function mergeSort(arr) {
	if (arr.length <= 1) return arr;

	let mIndex = Math.floor(arr.length / 2);
	return merge(mergeSort(arr.slice(0, mIndex)), mergeSort(arr.slice(mIndex)));
}

function merge(arr1, arr2) {
	let sortedArr = [];
	while (arr1.length && arr2.length) {
		if (arr1[0] < arr2[0]) sortedArr.push(arr1.shift());
		else sortedArr.push(arr2.shift());
	}
	return [...sortedArr, ...arr1, ...arr2];
}

let input = [234, 43, 234, -56, -56, 55, 63, 5, 6, 235, 547];
console.log("input : ", input);
let output = mergeSort(input);
console.log("output : ", output);
