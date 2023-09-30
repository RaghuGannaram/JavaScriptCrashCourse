/**
 * @param {string[]} tokens
 * @return {number}
 */

var evalRPN1 = function (tokens) {
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

var evalRPN2 = function (tokens) {
    let stack = [], x, y;

    for (let token of tokens) {
        switch (token) {
            case "+":
                y = stack.pop();
                x = stack.pop();
                stack.push(x + y);
                break;
            case "-":
                y = stack.pop();
                x = stack.pop();
                stack.push(x - y);
                break;
            case "*":
                y = stack.pop();
                x = stack.pop();
                stack.push(x * y);
                break;
            case "/":
                y = stack.pop();
                x = stack.pop();
                stack.push(x / y >= 0 ? Math.floor(x / y) : Math.ceil(x / y));
                break;
            default:
                stack.push(Number(token));
                break;

        }
    }

    return stack[0];
};

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));
