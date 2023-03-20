console.log(BigInt(99999999999999999999999999999999999999999999999999999999999999999999999));
console.log(BigInt("99999999999999999999999999999999999999999999999999999999999999999999999"));
let b = BigInt(5);
console.log(b);
console.log(typeof b);

let n1 = 999999999999999;
let n2 = 9999999999999999999999999999999999999999999999999999999;
let b1 = 9999999999999999999999999999999999999999999999999999999n;
let b2 = 9999999999999999999999999999999999999999999999999999999n;
console.log(n1 * n2);
console.log(b1 * b2);
console.log((b1 * b2).toString().length);

//---------------------------------------------BigInt Coercion-------------------------------------
try {
	console.log(BigInt());
	console.log(BigInt(undefined));
	console.log(BigInt(null));
} catch (error) {
	console.log(error);
}

console.log(BigInt(true));
console.log(BigInt(false));
console.log(BigInt(""));
console.log(BigInt(" "));
// console.log(BigInt("a"));
console.log(BigInt("5"));
console.log(BigInt("+5"));
console.log(BigInt("-5"));
console.log(BigInt([5]));
// console.log(BigInt([5, 6]));
// console.log(BigInt({ a: 5 }));
// console.log(BigInt(Infinity));
// console.log(BigInt(-Infinity));
// console.log(BigInt("Infinity"));
// console.log(BigInt("-Infinity"));

const mixed = [4n, 6, -12n, 10, 4, 0, 0n];
// [4n, 6, -12n, 10, 4, 0, 0n]
console.log(mixed)
mixed.sort(); // default sorting behavior
// [ -12n, 0, 0n, 10, 4n, 4, 6 ]
console.log(mixed)
try {
	mixed.sort((a, b) => a - b);
} catch (error) {
	console.log(error);
}
console.log(mixed)
// won't work since subtraction will not work with mixed types
// TypeError: can't convert BigInt value to Number value

// sort with an appropriate numeric comparator
mixed.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
console.log(mixed)
// [ -12n, 0, 0n, 4n, 4, 6, 10 ]
