let binA = 0b1100100;
let binB = 0b110010;
console.log(binA + binB);

let octA = 0o144;
let octB = 0o62;
console.log(octA + octB);

let hexA = 0x64;
let hexB = 0x32;
console.log(hexA + hexB);

console.log(octA + hexA);

//-------------------------------------------Number Constructure-----------------------------------
let numCnstr1 = new Number();
let numCnstr2 = new Number("5");
let numCnstr3 = Number("5");
console.log(numCnstr1 + 5);
console.log(numCnstr2 + 5);
console.log(numCnstr3 + 5);
console.log(typeof numCnstr1);
console.log(typeof numCnstr3);
console.log(numCnstr1 instanceof Number);
console.log(numCnstr3 instanceof Number);

//---------------------------------------------Number Properties-----------------------------------
console.log(Number.EPSILON);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

console.log(Number.MAX_SAFE_INTEGER * Number.EPSILON);
console.log(0.2 + 0.3 === 0.5);

//---------------------------------------------Number Coercion-------------------------------------
console.log(Number());
console.log(Number(undefined));
console.log(Number(null));
console.log(Number(true));
console.log(Number(false));
console.log(Number(""));
console.log(Number(" "));
console.log(Number("a"));
console.log(Number("5"));
console.log(Number("+5"));
console.log(Number("-5"));
console.log(Number([5]));
console.log(Number([5, 6]));
console.log(Number({ a: 5 }));
console.log(Number(Infinity));
console.log(Number(-Infinity));
console.log(Number("Infinity"));
console.log(Number("-Infinity"));
console.log(typeof +"100");

//---------------------------------------------Number.isFinite()-------------------------------------
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(1 / 0));
console.log(Number.isFinite(1 / 1));
console.log(Number.isFinite(0));
console.log(Number.isFinite(""));
console.log(Number.isFinite("5"));

console.log(isFinite(""));
console.log(isFinite("5"));
console.log(isFinite("Infinity"));

//---------------------------------------------Number.isInteger()-------------------------------------
console.log(Number.isInteger(5));
console.log(Number.isInteger(5.0));
console.log(Number.isInteger(5.1));
console.log(Number.isInteger(4 / 3));
console.log(Number.isInteger(4 / 2));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(NaN));
console.log(Number.isInteger("5"));

//---------------------------------------------Number.isNaN()-------------------------------------
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN("a"));
console.log(Number.isNaN(+"a"));
console.log(Number.isNaN(5));
console.log(Number.isNaN("5"));

console.log(isNaN(5));
console.log(isNaN("a"));
console.log(isNaN("5"));

//---------------------------------------------Number.isSafeInteger()-------------------------------------
console.log(Number.isSafeInteger(5));
console.log(Number.isSafeInteger("5"));
console.log(Number.isSafeInteger(+"5"));
console.log(Number.isSafeInteger(5.0));
console.log(Number.isSafeInteger(5.1));
console.log(Number.isSafeInteger(2 ** 53));
console.log(Number.isSafeInteger(2 ** 53 - 1));
console.log(Number.isSafeInteger(NaN));
console.log(Number.isSafeInteger(Infinity));

//---------------------------------------------Number.parseFloat()-------------------------------------
console.log(Number.parseFloat("5.123"));
console.log(Number.parseFloat("5.123abc"));

//---------------------------------------------Number.parseInt()-------------------------------------
console.log(Number.parseInt("5.123"));
console.log(Number.parseInt("5.123abc"));
console.log(Number.parseInt(111, 2));
console.log(Number.parseInt("1100100", 2));
console.log(Number.parseInt("144", 8));
console.log(Number.parseInt("64", 16));

//---------------------------------------------Number.prototype.toExponential()-------------------------------------
console.log((101.222).toExponential());
console.log((101.222).toExponential(2));
console.log((101.222).toExponential(10));
console.log((101.222).toExponential(0));

//---------------------------------------------Number.prototype.toFixed()-------------------------------------
console.log((101.222).toFixed());
console.log((101.222).toFixed(2));
console.log((101.222).toFixed(10));
console.log((101.222).toFixed(0));

//---------------------------------------------Number.prototype.toLocalString()-------------------------------------
console.log((101.222).toLocaleString());
console.log((101.222).toLocaleString(""));
console.log((101.222).toLocaleString("ar-EG"));
console.log((101.222).toLocaleString("pt-BR"));
console.log((101.222).toLocaleString("en-US"));

//---------------------------------------------Number.prototype.toPrecision()-------------------------------------
console.log((101.222).toPrecision());
console.log((101.222).toPrecision(1));
console.log((101.222).toPrecision(2));
console.log((101.222).toPrecision(3));
console.log((101.222).toPrecision(10));

//---------------------------------------------Number.prototype.toString()-------------------------------------
console.log(typeof (101.222).toString());
console.log((100).toString());
console.log((100).toString(undefined));
console.log((100).toString(2));
console.log((100).toString(8));
console.log((100).toString(16));
