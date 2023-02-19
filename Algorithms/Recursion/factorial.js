function factorial1(n) {
	if (n < 2) return 1;
	return n * factorial1(n - 1);
}

function factorial2(n) {
	let result = 1n;
	for (i = 1n; i <= BigInt(n); i++) {
		result *= i;
	}
	return result;
}

let start = Date.now();
let result = factorial2(100000);
let end = Date.now();

console.log(result);
console.log(result.toString().length);
console.log("Time taken in milli seconds : ", end - start);
