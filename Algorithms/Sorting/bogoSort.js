function bogoSort(arr) {
	let count = 0;

	while (!sorted(arr)) {
		shuffle(arr);
		console.log(`${arr}`);
		count++;
	}
	return { count, arr };

	function sorted(arr) {
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				return false;
			}
		}
		return true;
	}

	function shuffle(arr) {
		let i,
			n = arr.length;

		while (n) {
			i = Math.floor(Math.random() * n--);
			[arr[i], arr[n]] = [arr[n], arr[i]];
		}
		return arr;
	}
}

let input = [2, 3, 1, 3];
console.log("input : ", input);
let { arr, count } = bogoSort(input);
console.log(`output : ${arr}\nTotal attempts : ${count}`);
