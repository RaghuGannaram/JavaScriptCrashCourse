//Fibonacci Series : 0 1 1 2 3 5 8 13 21

function fibonacci1(n) {
	if (n === 0) {
		return 0;
	} else if (n === 1) {
		return 1;
	} else {
		return fibonacci1(n - 1) + fibonacci1(n - 2);
	}
}

function fibonacci2(n) {
	let cache = new Map();

	return calc(n);
	function calc(x) {
		if (x < 2) {
			return x;
		} else if (cache.has(x)) {
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
	let a = 0,
		b = 1,
		c;
	if (n < 2) {
		return n;
	}

	for (let i = 0; i < n - 1; i++) {
		c = a + b;
		a = b;
		b = c;
	}
	return c;
}

let start = Date.now();
let result = fibonacci3(0);
let end = Date.now();

console.log("Time taken in milli seconds : ", end - start);
console.log(result);
