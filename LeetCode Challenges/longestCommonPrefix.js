function longestCommonPrefix(list) {
	let prefix = '';
	if (list.length != 0) {
		let min = Math.min(...list.map((item) => item.length));
		if (min > 0) {
			for (let i = 0; i < min; i++) {
				let set = [];
				for (let j = 0; j < list.length; j++) set.push(list[j][i]);
				if (new Set(set).size == 1) prefix += set[0];
				else return prefix;
				// if (set.every((item) => item == set[0])) prefix += set[0];
				// else return prefix;
			}
		}
	}
	return prefix;
}

let input = ['flower', 'flow', 'flight'];
let output = longestCommonPrefix(input);
console.log(`The largest common prefix in "${input}" is ${output}`);
