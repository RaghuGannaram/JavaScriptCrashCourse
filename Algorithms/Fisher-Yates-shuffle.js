function shuffle(arr) {
	let r,
		i = arr.length - 1;

	while (i > 0) {
		r = Math.floor(Math.random() * (i + 1));
		[arr[r], arr[i]] = [arr[i], arr[r]];
		i--;
	}

	return arr;
}

let input = ["A", "B", "C", "D", "E", "F"];
console.log("input : ", input);
let output = shuffle(input);
console.log("output : ", output);
