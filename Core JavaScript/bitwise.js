let a = 0b1010;
let b = 0b1100;

console.log(a.toString(2));
console.log(a.toString(4));
console.log(a.toString(8));
console.log(a.toString(10));
console.log(a.toString(16));

console.log(a, b);

console.log(a & b);
console.log(a | b);
console.log(a ^ b);
console.log(~a.toString(2));

console.log((0b1100 << 2).toString(2));
console.log((0b1100 >> 2).toString(2));
console.log((0b1100 >>> 2).toString(2));
