/**
 * @param {string[]} strs
 * @return {string}
 */

var encode = function (strs) {
	return strs.map((str) => `${str.length}#${str}`).join("");
};

var decode = function (str) {
	let i = 0,
		result = [];

	while (i < str.length) {
		let j = i;
		while (str[j] !== "#") {
			++j;
		}

		const len = Number(str.slice(i, j));
		result.push(str.slice(++j, j + len));
		i = j + len;
	}

	return result;
};
console.log(encode(["abc", "def"]));
console.log(decode("3#abc3#def"));
