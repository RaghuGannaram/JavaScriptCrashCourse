/**
 * @param {string} s
 * @return {boolean}
 */
var isValidParantheses = function (s) {
	let stack = [],
		bracketPairs = {
			"(": ")",
			"{": "}",
			"[": "]",
		};

	for (let char of s) {
		if (!stack.length) {
			stack.push(char);
			continue;
		}
		if (bracketPairs[stack.at(-1)] == char) {
			stack.pop();
		} else {
			stack.push(char);
		}
	}

	return stack.length == 0;
};

console.log(isValidParantheses("[]()"));
