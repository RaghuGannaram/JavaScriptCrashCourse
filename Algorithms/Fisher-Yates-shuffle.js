function shuffle(arr) {
	let i,
		n = arr.length;

	while (n) {
		i = Math.floor(Math.random() * n--);
		[arr[i], arr[n]] = [arr[n], arr[i]];
	}

	return arr;
}

let input = ["A", "B", "C", "D", "E", "F"];
console.log("input : ", input);
let output = shuffle(input);
console.log("output : ", output);
