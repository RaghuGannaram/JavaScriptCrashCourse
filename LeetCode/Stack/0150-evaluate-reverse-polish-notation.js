/**
 * @param {string[]} tokens
 * @return {number}
 */

var evalRPN = function (tokens) {
	let stack = [],
		operators = new Set(["+", "-", "*", "/"]),
		current,
		a,
		b,
		result;

	while (tokens.length) {
		current = tokens.shift();
		if (operators.has(current)) {
			b = stack.pop();
			a = stack.pop();
			result = evaluate(parseInt(a), parseInt(b), current);
			stack.push(result);
		} else {
			stack.push(current);
		}
	}

	return stack.pop();

	function evaluate(a, b, operation) {
		if (operation === "+") return a + b;
		if (operation === "-") return a - b;
		if (operation === "*") return a * b;
		if (operation === "/") return a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b);
	}
};

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));
