let fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];
let numbers = [234, 43, 234, -57, -56, -20, 55, 63, 5, 6, 235, 547];
let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupitor", "Saturn", "Uranus", "Neptune", "Pluto"];

//-----------------------------------------------Array() constructor----------------------------
//(n)=> [1...n], (n1,n2..)=> [n1,n2,...]
console.log(new Array());
console.log(new Array().length);
console.log(new Array(0));
console.log(new Array(0).length);
console.log(new Array(1));
console.log(new Array(1).length);
console.log(new Array(undefined));
console.log(new Array(undefined).length);
console.log(new Array(null));
console.log(new Array(null).length);
console.log(new Array(""));
console.log(new Array(" "));
console.log(new Array("  "));
console.log(new Array("  ").length);
console.log(new Array(5));
console.log(new Array(5)[0]);
console.log(new Array(5).length);
console.log(new Array("a", "b"));
console.log(new Array(5, 6));
console.log(new Array("a", 2));
console.log(new Array([5, 6]));
console.log(new Array(...[5, 6]));
console.log(new Array(...[5]));
console.log(new Array({ a: 1 }));
console.log(new Array(new Set(["foo", "bar", "baz", "foo"])));
console.log(new Array(...new Set(["foo", "bar", "baz", "foo"])));
console.log(
	new Array(
		new Map([
			[1, 2],
			[2, 4],
			[4, 8],
		])
	)
);
console.log(
	new Array(
		...new Map([
			[1, 2],
			[2, 4],
			[4, 8],
		])
	)
);
console.log(Array());
console.log(Array().length);
console.log(Array(0));
console.log(Array(0).length);
console.log(Array(1));
console.log(Array(1).length);
console.log(Array(undefined));
console.log(Array(undefined).length);
console.log(Array(null));
console.log(Array(null).length);
console.log(Array(""));
console.log(Array(" "));
console.log(Array("  "));
console.log(Array(5));
console.log(Array(5)[0]);
console.log(Array(5).length);
console.log(Array("a", "b"));
console.log(Array(5, 6));
console.log(Array("a", 2));
console.log(Array([5, 6]));
console.log(Array(...[5, 6]));
console.log(Array(...[5]));
console.log(Array({ a: 1 }));
console.log(Array(new Set(["foo", "bar", "baz", "foo"])));
console.log(Array(...new Set(["foo", "bar", "baz", "foo"])));
console.log(
	Array(
		new Map([
			[1, 2],
			[2, 4],
			[4, 8],
		])
	)
);
console.log(
	Array(
		...new Map([
			[1, 2],
			[2, 4],
			[4, 8],
		])
	)
);
//-----------------------------------------Array.prototype.of()----------------------------------
//Shallow Copies | (n) => [n]
console.log(Array.of());
console.log(Array.of(undefined));
console.log(Array.of(""));
console.log(Array.of(" "));
console.log(Array.of("  "));
console.log(Array.of("  ")[0].length);
console.log(Array.of(5));
console.log(Array.of(5, 6));
console.log(Array.of([5, 6]));
console.log(Array.of(...[5, 6]));
console.log(Array.of(...[5]));
let arrOf1 = [10, 20, 30, [40, 50]];
let arrOf2 = Array.of(arrOf1);
console.log(arrOf2);
arrOf1[3].push(60);
console.log(arrOf2);
console.log(Array.of(new Set(["foo", "bar", "baz", "foo"])));
console.log(Array.of(...(new Set(["foo", "bar", "baz", "foo"]))));
console.log(
	Array.of(
		new Map([
			[1, 2],
			[2, 4],
			[4, 8],
		])
	)
);
console.log(
	Array.of(
		...(new Map([
			[1, 2],
			[2, 4],
			[4, 8],
		]))
	)
);

//-----------------------------------------Array.prototype.from()----------------------------------
//Shallow Copies | (Iterable) => newArr
try {
	// console.log(Array.from());
	console.log(Array.from(undefined));
} catch (error) {
	console.log(error);
}
try {
	console.log(Array.from(5, 6));
} catch (error) {
	console.log(error);
}
console.log(Array.from(5));
console.log(Array.from(""));
console.log(Array.from(" "));
console.log(Array.from("  "));
console.log(Array.from("foo"));
console.log(Array.from([5, 6]));
console.log(Array.from([...[5, 6], [7, 8]]));
console.log(Array.from([5, 6], (x) => x + 10));
console.log(Array.from(new Set(["foo", "bar", "baz", "foo"])));
try {
	console.log(Array.from(...(new Set(["foo", "bar", "baz", "foo"]))));
} catch (error) {
	console.log(error);
}
console.log(
	Array.from(
		new Map([
			[1, 2],
			[2, 4],
			[4, 8],
		])
	)
);
let arrFrm1 = [10, 20, 30, [40, 50]];
let arrFrm2 = Array.from(arrFrm1);
console.log(arrFrm2);
arrFrm1[3].push(60);
console.log(arrFrm2);

//-----------------------------------------------Array.isArray()-----------------------------------
// arr=> boolean
console.log(Array.isArray());
console.log(Array.isArray([]));
console.log(Array.isArray([1]));
console.log(Array.isArray("abc"));
console.log(Array.isArray(Array()));

//-----------------------------------------------Array.prototype.slice()----------------------------
//time complexity = O(n), non-mutating, returns => sliced out portion
console.log(fruits.slice());
console.log(fruits.slice(-2));
console.log(fruits.slice(-5));
console.log(fruits.slice(-100));
console.log(fruits.slice(2));
console.log(fruits.slice(5));
console.log(fruits.slice(2, 3));
console.log(fruits.slice(2, 30));
console.log(fruits.slice(2, -1));
console.log(fruits.slice(2, 2));
console.log(fruits.slice(0));
console.log(fruits.slice(0, 0));
console.log(fruits.slice(0, null));
console.log(fruits.slice(0, undefined));
console.log(fruits.slice(null));
console.log(fruits.slice(null, null));
console.log(fruits.slice(undefined));
console.log(fruits.slice(undefined, undefined));
console.log(fruits);

//-----------------------------------------------Array.prototype.splice()--------------------------
//time complexity = O(n), mutating, returns => removed portion
console.log(fruits.splice());
console.log(fruits);
console.log(fruits.splice(3));
console.log(fruits);
console.log(fruits.splice(4, 0, "Guava", "Grapes"));
console.log(fruits);
console.log(fruits.splice(4, 1, "Poppaya"));
console.log(fruits);
console.log(fruits.splice(2, 0, "Sapota"));
console.log(fruits);
console.log(fruits.splice(-2, 1, "Kiwis"));
console.log(fruits);
console.log(fruits.splice(3, 1, "Muskmelon"));
console.log(fruits);
console.log(fruits.splice(5, 0, "Lemon", "Pomegranate"));
console.log(fruits);
console.log(fruits.splice(5, 1));
console.log(fruits);
console.log(fruits.splice(6, "a"));
console.log(fruits);
console.log(fruits.splice(6, "1"));
console.log(fruits);
console.log(fruits.splice(2, "a", "Dummy fruit"));
console.log(fruits);
console.log(fruits.splice(2, "1"));
console.log(fruits);

fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];
console.log(fruits.splice(undefined));
console.log(fruits);
fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];
console.log(fruits.splice(undefined, undefined));
console.log(fruits);
fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];
console.log(fruits.splice(undefined, undefined, undefined));
console.log(fruits);
// console.log(fruits.splice( ,  , undefined));
console.log(fruits);
fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];
console.log(fruits.splice(null));
console.log(fruits);
fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];
console.log(fruits.splice(null, null));
console.log(fruits);
fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];
console.log(fruits.splice(null, null, null));
console.log(fruits);

fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango", "Apple"];

//-----------------------------------------------Array.prototype.includes()------------------------
//time complexity = O(n), non-mutating, returns => boolean
console.log(fruits.indexOf("Banana"));
console.log(fruits.length);
console.log(fruits.includes("Banana"));
console.log(fruits.includes("Ban"));
console.log(fruits.includes("Banana", 2));
console.log(fruits.includes("Banana", 6));
console.log(fruits.includes("Banana", -2));
console.log(fruits.includes("Banana", -5));
console.log(fruits.includes("Banana", -6));

//-----------------------------------------------Array.prototype.indexOf()-------------------------
//time complexity = O(n), non-mutating, returns => index
console.log(fruits.indexOf());
console.log(fruits.indexOf("Apple"));
console.log(fruits.indexOf("Apple", 1));
console.log(fruits.indexOf("Apple", 100));
console.log(fruits.indexOf("Apple", -100));
console.log(fruits.indexOf("App"));

//-----------------------------------------------Array.prototype.lastIndexOf()--------------------
//time complexity = O(n), non-mutating, returns => index
console.log(fruits.lastIndexOf());
console.log(fruits.lastIndexOf("Apple"));
console.log(fruits.lastIndexOf("Apple", 4));
console.log(fruits.lastIndexOf("Apple", 100));
console.log(fruits.lastIndexOf("Apple", -100));
console.log(fruits.indexOf("App"));

//-----------------------------------------------Array.prototype.at()-----------------------------
//non-mutating, returns => item at given index
console.log(fruits);
console.log(fruits.at());
console.log(fruits.at(1));
console.log(fruits.at(-1));

console.log(numbers);
//-----------------------------------------------Array.prototype.find()---------------------------
//time complexity = O(n), non-mutating, returns => found first element
console.log(numbers.find((num) => num > 500));
console.log(numbers.find((num) => num > 600));
console.log(numbers.find((num) => true));
console.log(numbers.find((num) => false));

// //Array.prototype.findLast() : time complexity = O(n), non-mutating, returns => found last element
// console.log(numbers.findLast((num) => num > 500));
// console.log(numbers.findLast((num) => num > 600));
// console.log(numbers.findLast((num) => true));
// console.log(numbers.findLast((num) => false));

//-----------------------------------------------Array.prototype.findIndex()-----------------------
//time complexity = O(n), non-mutating, returns => found element's first index
console.log(numbers.findIndex((num) => num > 500));
console.log(numbers.findIndex((num) => num > 600));
console.log(numbers.findIndex((num) => true));
console.log(numbers.findIndex((num) => false));

// //Array.prototype.findLastIndex() : time complexity = O(n), non-mutating, returns => found element's last index
// console.log(numbers.findLastIndex((num) => num > 500));
// console.log(numbers.findLastIndex((num) => num > 600));
// console.log(numbers.findLastIndex((num) => true));
// console.log(numbers.findLastIndex((num) => false));

console.log(planets);
//------------------------------------------------Array.prototype.pop()----------------------------
//time complexity = O(1), mutating, returns => removed element
console.log(planets.pop());
//----------------------------------------------- Array.prototype.push()---------------------------
//time complexity = O(1), mutating, returns => final length
console.log(planets.push("Pluto"));

//----------------------------------------------- Array.prototype.shift()---------------------------
//time complexity = O(n), mutating, returns => removed element
console.log(planets.shift());
//------------------------------------------------Array.prototype.unshift()-------------------------
//time complexity = O(n), mutating, returns => final length
console.log(planets.unshift("Mercury"));

//-----------------------------------------------Array.prototype.toString()------------------------
//time complexity = O(n), non-mutating, returns => comma-separated items as string,
//Internally uses join method
console.log(fruits.toString());
let arrToStr1 = [10, 20, 30];
console.log(arrToStr1.join.toString());
console.log(arrToStr1.toString());
arrToStr1.join = "Hello World...!";
console.log(arrToStr1.toString());
arrToStr1.join = () => "a";
console.log(arrToStr1.toString());
arrToStr1.join = function () {
	return Array.prototype.join.call(this);
	// return this.reduce((a, i) => a + "," + i, "").slice(1);
};
// arrToStr1.join = Array.prototype.join.apply(arrToStr1);
console.log(arrToStr1.toString());

//-----------------------------------------------Array.prototype.join()----------------------------
//time complexity = O(n), non-mutating, returns => specifier-separated items as string
console.log(fruits);
console.log(fruits.join());
console.log(fruits.join(""));
console.log(fruits.join(" "));
console.log(fruits.join("-"));

//-----------------------------------------------Array.prototype.concat()--------------------------
//time complexity = O(n), non-mutating, Shallow Copies, returns => created array
console.log(fruits);
console.log(fruits.concat([]));
console.log(fruits.concat(["a", , "b"], "Pears"));
console.log(fruits.concat("Pears", ["a", "b"]));
console.log(fruits.concat("Pears"));
console.log(fruits);
let nestedArr1 = [[10, 20], 3, 4];
let nestedArr2 = [[100, 200], 30, 40];
let concatedArr1 = nestedArr1.concat(nestedArr2);
console.log(concatedArr1);
nestedArr1[0].push(30);
nestedArr2[0].push(300);
console.log(concatedArr1);

//-----------------------------------------------Array.prototype.copyWithin()-----------------------
//shallow copies,mutating, mutating, returns => mutated array
fruits = ["Apple", "Banana", "Cherries", , "Orange", "Mango"];
console.log(fruits.copyWithin(0));
fruits = ["Apple", "Banana", "Cherries", , "Orange", "Mango"];
console.log(fruits.copyWithin(2, 1));
fruits = ["Apple", "Banana", "Cherries", , "Orange", "Mango"];
console.log(fruits.copyWithin(2, 1, 4));
fruits = ["Apple", "Banana", "Cherries", , "Orange", "Mango"];
console.log(fruits.copyWithin(0, 1));

//------------------------------------------------Array.prototype.fill()----------------------------
//time complexity = O(n), mutating, returns => mutated array
fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];
console.log(fruits.fill());
fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];
console.log(fruits.fill(""));
fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];
console.log(fruits.fill("", 2));
fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];
console.log(fruits.fill("", 2, 3));
fruits = ["Apple", "Banana","Dummy fruit" , "Orange", "Mango"];
console.log(fruits.fill("Cherries", 2, 3));

console.log(numbers);
//-----------------------------------------------Array.prototype.every()----------------------------
//non-mutating, returns => boolean
console.log(numbers.every((x) => false));
console.log(numbers.every((num) => num < 1000));
console.log([10, , 15].every((num) => num >= 10));
console.log([10, , 15].every((num) => num !== undefined && num >= 10));
console.log([10, undefined, 15].every((num) => num !== undefined && num >= 10));

console.log([].every((num) => num >= 10));
console.log(
	[].every(() => {
		return;
	})
);
console.log([].every(() => false));

//----------------------------------------------Array.prototype.some()-----------------------------
//non-mutating, returns => boolean
console.log(numbers.some((num) => num < -50));
console.log(numbers.some((num) => num < -150));
console.log([10, , 15].some((num) => num <= 10));
console.log([].some((num) => num <= 10));
console.log([].some(() => true));

//-----------------------------------------------Array.prototype.flat()----------------------------
//non-mutating, returns => flattened array
let flatArr1 = [1, 2, , [40, [500, 600, [7000]]]];
console.log(flatArr1.flat());
console.log(flatArr1.flat(1));
console.log(flatArr1.flat(0));
console.log(flatArr1.flat(2));
console.log(flatArr1.flat(3));
console.log(flatArr1.flat(100));

//-----------------------------------------------Array.prototype.flatMap()-------------------------
//non-mutating, returns => flattened array
console.log([1, 2, 3, 4].flatMap((item) => item));
console.log([1, 2, 3, 4].map((item) => [item, item * 3]));
console.log([1, 2, 3, 4].flatMap((item) => [item, item * 3]));

//-----------------------------------------------Array.prototype.sort()---------------------------
//time complexity = O(nlog(n)), mutating, returns => sorted array
console.log(numbers);
console.log(numbers.sort());
console.log(numbers.sort((a, b) => a - b));
console.log(numbers.sort((a, b) => b - a));
console.log(numbers.sort(() => 0.5 - Math.random()));
console.log(numbers.sort((a, b) => a - b));
console.log(numbers.sort((a, b) => a - b).at(0));
console.log(numbers.sort((a, b) => a - b).at(-1));
console.log(numbers.sort((a, b) => a - b)[0]);
console.log(numbers.sort((a, b) => a - b)[numbers.length - 1]);
console.log(numbers);

let pairs = [
	[100, 20],
	[1, 200],
	[10, 2],
];
console.log(pairs.sort((a, b) => a[0] - b[0]));
console.log(pairs.sort((a, b) => a[1] - b[1]));
for (let [i, j] of pairs) console.log(i, j);

//-----------------------------------------------Array.prototype.reverse()------------------------
//time complexity = O(n), mutating, returns => reversed array
console.log(numbers);
console.log(numbers.reverse());
console.log(numbers);

//----------------------------------------------Array.prototype.entries()--------------------------
//time complexity = O(n), non-mutating, returns => Array Iterator
let numsItr = [10, , 20, 30].entries();
console.log(numsItr instanceof Array);
console.log(numsItr instanceof Object);
console.log(numsItr);
// console.log(...numsItr);
// for (let [index, element] of numsItr) {
// 	console.log(index, element);
// }
console.log(numsItr.next());
console.log(numsItr.next());
console.log(numsItr.next());
console.log(numsItr.next());
console.log(numsItr.next());

//-----------------------------------------------Array.prototype.keys()-----------------------------
//time complexity = O(n), non-mutating, returns => Array Iterator
let numKeys = [10, 20, 30, , 50].keys();
console.log(numKeys instanceof Array);
console.log(numKeys instanceof Object);
console.log(numKeys);
// console.log(...numKeys);
// for (let element of numKeys) {
// console.log(element);
// }
console.log(numKeys.next());
console.log(numKeys.next());
console.log(numKeys.next());
console.log(numKeys.next());
console.log(numKeys.next());
console.log(numKeys.next());

//------------------------------------------------Array.prototype.values()---------------------------
//time complexity = O(n), non-mutating, returns => Array Iterator
let numValues = [10, 20, 30, , 50].values();
console.log(numValues instanceof Array);
console.log(numValues instanceof Object);
console.log(numValues);
// console.log(...numValues);
// for (let element of numValues) {
// console.log(element);
// }
console.log(numValues.next());
console.log(numValues.next());
console.log(numValues.next());
console.log(numValues.next());
console.log(numValues.next());
console.log(numValues.next());

let avengers = ["Captain America", "Iron Man", "Thor", "Hulk", "HawkEye", "Black Widow", "Spider Man"];
let [captain, ...team] = avengers;

console.log(avengers);
console.log(captain);
console.log(team);

avengerList(...avengers);

function avengerList(...heros) {
	for (let hero of heros) {
		console.log(`Hello ${hero} 🤟`);
	}
}
avengers.forEach((hero) => {
	console.log(hero.toUpperCase());
	console.log(hero.toLowerCase());
});

console.log(
	avengers.map((hero) => {
		return hero.toUpperCase();
	})
);

console.log(
	avengers.filter((hero) => {
		return hero.toLowerCase().startsWith("i");
	})
);
console.log(
	avengers.filter((hero) => {
		return hero.match(/man/i);
	})
);

console.log(avengers);
avengers.forEach((hero) => {
	console.log(hero.toUpperCase());
});
console.log(avengers);

for (let i in avengers) console.log(i);
for (let i of avengers) console.log(i);
for (let [i, j] in avengers) console.log(i, j);
for (let [i, j] of avengers) console.log(i, j);
for (let [i, ...j] of avengers) console.log(i, j);
for (let [i, j] of avengers.entries()) console.log(i, j);
