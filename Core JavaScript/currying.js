let add1 = (x) => x + 1;
let mul2 = (x) => x * 2;
let div4 = (x) => x / 4;

function curryArithmetic(func) {
	return function (...operators) {
		return function (value) {
			return func([...operators], value);
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
console.log("Expected 3, Result :", applyChainedOperators([add1, mul2, div4, add1], 3));

let pipe = curryArithmetic(applyChainedOperators);
console.log("Expected 2, Result :", pipe(add1, mul2, div4)(3));
console.log("Expected 1.75, Result :", pipe(mul2, add1, div4)(3));
console.log("Expected 2.5, Result :", pipe(mul2, div4, add1)(3));
console.log("Expected 5, Result :", pipe(mul2, div4, add1, mul2)(3));

function logger(date, message) {
	return `Date : ${date} , Message : ${message}`;
}

console.log(logger("Jan", "Happy New Year"));

function curryLogger(func) {
	return function (date) {
		return function (message) {
			return func(date, message);
		};
	};
}

const curriedLogger = curryLogger(logger);
const septLogs = curriedLogger("sept");
const octLogs = curriedLogger("oct");

console.log(septLogs("Happy Teacher's Day"));
console.log(octLogs("Happy Dasara"));

function sum(a, b) {
	return a + b;
}

function curry(fn) {
	return function (a) {
		return function (b) {
			return fn(a, b);
		};
	};
}

function infiniteCurry(fn) {
	return function recurse(a) {
		return function (b) {
			if (b) {
				return recurse(fn(a, b));
			}
			return a;
		};
	};
}

let curriedSum = curry(sum);
console.log(curriedSum(1)(2));

let infiniteCurriesSum = infiniteCurry(sum);
console.log(infiniteCurriesSum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(11)(12)());
