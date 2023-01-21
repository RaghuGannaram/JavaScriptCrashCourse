let s1 = Symbol();
let s2 = Symbol("test");
let s3 = Symbol("test");

console.log(s1, s2, s3);
console.log(s2 == s3);

let sbl1 = Symbol.for("kites");
let sbl2 = Symbol.for("kites");

console.log(sbl1 === sbl2);

console.log(Symbol.keyFor(sbl1));

let obj = {
	a: "a-value",
	[Symbol.for("b")]: "b-value",
};

obj["c"] = "c-value";
obj[Symbol.for("d")] = "d-value";

console.log(obj);
console.log(obj[Symbol.for("b")]);

for (let i in obj) {
	console.log(i);
	console.log(obj[i]);
}

console.log(Object.getOwnPropertyNames(obj))
console.log(Object.getOwnPropertySymbols(obj))
