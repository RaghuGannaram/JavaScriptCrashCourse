function gravitySort(arr) {
	let sum = 0,
		n = arr.length,
		max = Math.max(...arr);

	let beads = Array(n)
		.fill(0)
		.map((_) => Array(max).fill(0));

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i]; j++) {
			beads[i][j] = 1;
		}
	}
  console.log(beads)

	for (let j = 0; j < max; j++) {
		sum = 0;
		for (let i = 0; i < arr.length; i++) {
			sum += beads[i][j];
			beads[i][j] = 0;
		}
    console.log(sum)

		for (let i = arr.length - 1; i >= arr.length - sum; i--) {
			arr[i] = j + 1;
		}
	}
	return arr;
}

let input = [4, 1, 3, 2, 10];
console.log("input : ", input);
let output = gravitySort(input);
console.log("output : ", output);
