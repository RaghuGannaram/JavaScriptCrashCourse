//Fibonacci Series : 0 1 1 2 3 5 8 13 21 34 55

function fibonacci1(n) {
	if (n <= 0) return undefined;
	else if (n === 1) return 0;
	else if (n === 2) return 1;
	else {
		return fibonacci1(n - 1) + fibonacci1(n - 2);
	}
}

function fibonacci2(n) {
	let cache = new Map();

	return calc(n);
	function calc(x) {
		if (x <= 0) return undefined;
		else if (x === 1) return 0;
		else if (x === 2) return 1;
		else if (cache.has(x)) {
			return cache.get(x);
		} else {
			let c1 = calc(x - 1);
			let c2 = calc(x - 2);
			cache.set(x, c1 + c2);
			return c1 + c2;
		}
	}
}

function fibonacci3(n) {
	if (n <= 0) return undefined;
	else if (n === 1) return 0;
	else if (n === 2) return 1;

	let a = 0,
		b = 1,
		c;

	for (let i = 3; i <= n; i++) {
		c = a + b;
		a = b;
		b = c;
	}
	return c;
}

let start = Date.now();
let result = fibonacci1(1);
let end = Date.now();

console.log("Time taken in milli seconds : ", end - start);
console.log(result);
