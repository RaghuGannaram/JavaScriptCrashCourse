let b = BigInt(5);
console.log(b);
console.log(typeof b);

let n1 = 9999999999999999999999999999999999999999999999999999999;
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
