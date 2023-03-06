function pegionholeSort(arr) {
	let min = Math.min(...arr),
		max = Math.max(...arr);

	let range = max - min + 1;
	let aux = Array(range);

	for (let i = 0; i < arr.length; i++) {
		aux[arr[i] - min] = arr[i];
	}

	return aux;
}

let input = [10, 11, 9, 6, 8, 7];
console.log("input : ", input);
let output = pegionholeSort(input);
console.log("output : ", output);
