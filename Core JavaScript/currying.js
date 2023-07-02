function curry(f) {
	return function (a) {
		return function (b) {
			return f(a, b);
		};
	};
}

function sum(a, b) {
	return a + b;
}

let curriedSum = curry(sum);

console.log(curriedSum(1)(2));


let add1 = (x) => x + 1;
let mul2 = (x) => x * 2;
let div4 = (x) => x / 4;

function curryArithmetic(applyChainedOperators) {
	return function (...operators) {
		return function (value) {
			return applyChainedOperators([...operators], value);
		};
	};
}

function applyChainedOperators(operators, value) {
	let result = value;
	operators.forEach((operator) => {
		result = operator(result);
	});
	return result;
}

let pipe = curryArithmetic(applyChainedOperators);

console.log("Expected 3, Result :", applyChainedOperators([add1, mul2, div4, add1], 3));
console.log("Expected 2, Result :", pipe(add1, mul2, div4)(3));
console.log("Expected 1.75, Result :", pipe(mul2, add1, div4)(3));
console.log("Expected 2.5, Result :", pipe(mul2, div4, add1)(3));
console.log("Expected 5, Result :", pipe(mul2, div4, add1, mul2)(3));

