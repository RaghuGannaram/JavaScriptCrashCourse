let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupitor", "Saturn", "Uranus", "Neptune", "Pluto"];

// Array.prototype.push() : time complexity = O(1), mutating, returns => final length
// Array.prototype.pop() : time complexity = O(1), mutating, returns => removed element
console.log(planets.pop());
console.log(planets.push("Pluto"));

// Array.prototype.unshift() : time complexity = O(n), mutating, returns => final length
// Array.prototype.shift() : time complexity = O(n), mutating, returns => removed element
console.log(planets.shift());
console.log(planets.unshift("Mercury"));

let fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];

//Array.prototype.slice() : time complexity = O(n), non-mutating, returns => sliced out portion
console.log(fruits.slice());
console.log(fruits.slice(-2));
console.log(fruits.slice(-6));
console.log(fruits.slice(2));
console.log(fruits.slice(5));
console.log(fruits.slice(2, 3));
console.log(fruits.slice(2, 30));
console.log(fruits.slice(2, -1));
console.log(fruits.slice(2, 2));
console.log(fruits.slice(undefined));
console.log(fruits.slice(undefined, undefined));
console.log(fruits.slice(null));
console.log(fruits.slice(null, null));
console.log(fruits);

//Array.prototype.splice() : time complexity = O(n), mutating, returns => removed portion
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
console.log(fruits.splice(5, 0, "Lemon", "Kiwi"));
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

//Array.prototype.indexOf() : time complexity = O(n), non-mutating, returns => index
console.log(fruits.indexOf());
console.log(fruits.indexOf("Apple"));
console.log(fruits.indexOf("Apple", 1));
console.log(fruits.indexOf("Apple", 100));
console.log(fruits.indexOf("Apple", -100));
console.log(fruits.indexOf("App"));

//Array.prototype.lastIndexOf() : time complexity = O(n), non-mutating, returns => index
console.log(fruits.lastIndexOf());
console.log(fruits.lastIndexOf("Apple"));
console.log(fruits.lastIndexOf("Apple", 4));
console.log(fruits.lastIndexOf("Apple", 100));
console.log(fruits.lastIndexOf("Apple", -100));
console.log(fruits.indexOf("App"));

//Array.prototype.includes() : time complexity = O(n), non-mutating, returns => boolean
console.log(fruits.indexOf("Banana"));
console.log(fruits.length);
console.log(fruits.includes("Banana"));
console.log(fruits.includes("Ban"));
console.log(fruits.includes("Banana", 2));
console.log(fruits.includes("Banana", 6));
console.log(fruits.includes("Banana", -2));
console.log(fruits.includes("Banana", -5));
console.log(fruits.includes("Banana", -6));

//Array.prototype.concat() : time complexity = O(n), non-mutating, returns => created array
console.log(fruits);
console.log(fruits.concat([]));
console.log(fruits.concat(["a", , "b"], "Pears"));
console.log(fruits.concat("Pears", ["a", "b"]));
let nestedArr1 = [[10, 20], 3, 4];
let concatedArr1 = nestedArr1.concat([5, 6]);
console.log(concatedArr1);
nestedArr1[0].push(30);
console.log(concatedArr1);

//Array.prototype.toString() : time complexity = O(n), non-mutating, returns => comma-separated items as string
//Array.prototype.join() : time complexity = O(n), non-mutating, returns => specifier-separated items as string
console.log(fruits);
console.log(fruits.toString());
console.log(fruits.join());
console.log(fruits.join(""));
console.log(fruits.join(" "));
console.log(fruits.join("-"));

//Array.prototype.at() : non-mutating, returns => item at given index
console.log(fruits);
console.log(fruits.at());
console.log(fruits.at(1));
console.log(fruits.at(-1));

//Array.prototype.copyWithin() : mutating, returns => mutated array
fruits = ["Apple", "Banana", "Cherries", , "Orange", "Mango"];
console.log(fruits.copyWithin(0));
fruits = ["Apple", "Banana", "Cherries", , "Orange", "Mango"];
console.log(fruits.copyWithin(2, 1));
fruits = ["Apple", "Banana", "Cherries", , "Orange", "Mango"];
console.log(fruits.copyWithin(2, 1, 3));
fruits = ["Apple", "Banana", "Cherries", , "Orange", "Mango"];
console.log(fruits.copyWithin(0, 1));

//Array.prototype.fill() : time complexity = O(n), mutating, returns => mutated array
fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];
console.log(fruits.fill());
fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];
console.log(fruits.fill(""));
fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];
console.log(fruits.fill("", 2, 3));
fruits = ["Apple", "Banana", , "Orange", "Mango"];
console.log(fruits.fill("Guava", 3));

let numbers = [234, 43, 234, -57, -56, -20, 55, 63, 5, 6, 235, 547];

//Array.prototype.every() : non-mutating, returns => boolean
console.log(numbers.every((num) => num < 1000));
console.log([10, , 15].every((num) => num >= 10));
console.log([].every((num) => num >= 10));
console.log(
	[].every(() => {
		return;
	})
);
console.log([].every(() => false));

//Array.prototype.some() : non-mutating, returns => boolean
console.log(numbers.some((num) => num < -50));
console.log([10, , 15].some((num) => num <= 10));
console.log([].some((num) => num >= 10));
console.log([].some(() => true));

//Array.prototype.find() : time complexity = O(n), non-mutating, returns => found first element
console.log(numbers.find((num) => num > 500));
console.log(numbers.find((num) => num > 600));
console.log(numbers.find((num) => true));
console.log(numbers.find((num) => false));

// //Array.prototype.findLast() : time complexity = O(n), non-mutating, returns => found last element
// console.log(numbers.findLast((num) => num > 500));
// console.log(numbers.findLast((num) => num > 600));
// console.log(numbers.findLast((num) => true));
// console.log(numbers.findLast((num) => false));

//Array.prototype.findIndex() : time complexity = O(n), non-mutating, returns => found element's first index
console.log(numbers.findIndex((num) => num > 500));
console.log(numbers.findIndex((num) => num > 600));
console.log(numbers.findIndex((num) => true));
console.log(numbers.findIndex((num) => false));

// //Array.prototype.findLastIndex() : time complexity = O(n), non-mutating, returns => found element's last index
// console.log(numbers.findLastIndex((num) => num > 500));
// console.log(numbers.findLastIndex((num) => num > 600));
// console.log(numbers.findLastIndex((num) => true));
// console.log(numbers.findLastIndex((num) => false));

//Array.prototype.entries() : time complexity = O(n), non-mutating, returns => Array Iterator
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

//Array.prototype.keys() : time complexity = O(n), non-mutating, returns => Array Iterator
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

//Array.prototype.values() : time complexity = O(n), non-mutating, returns => Array Iterator
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

//Array.prototype.flat() : non-mutating, returns => flattened array
let flatArr1 = [1, 2, , [40, [500, 600, [7000]]]];
console.log(flatArr1.flat());
console.log(flatArr1.flat(0));
console.log(flatArr1.flat(2));
console.log(flatArr1.flat(3));
console.log(flatArr1.flat(100));

//Array.prototype.flatMap() : non-mutating, returns => flattened array
console.log([1, 2, 3, 4].flatMap((item) => item));
console.log([1, 2, 3, 4].flatMap((item) => [item, item * 3]));

//Array.prototype.from() : returns => created array
console.log(Array.from("").length);
console.log(Array.from(" ").length);
console.log(Array.from([1,2]).length);
console.log(Array.from([1, 2, 3], x => x + x));
console.log(Array.from("foo"));
console.log(Array.from(new Set(["foo", "bar", "baz", "foo"])));
console.log(Array.from(new Map([
  [1, 2],
  [2, 4],
  [4, 8],
])));

//Array.isArray() : returns => boolean
console.log(Array.isArray())
console.log(Array.isArray([]))
console.log(Array.isArray([1]))
console.log(Array.isArray("abc"))



//Array.prototype.sort() : time complexity = O(nlog(n)), mutating, returns => sorted array
//Array.prototype.reverse() : time complexity = O(n), mutating, returns => reversed array
console.log(numbers);
console.log(numbers.sort());
console.log(numbers.sort((a, b) => a - b));
console.log(numbers.sort((a, b) => b - a));
console.log(numbers.sort(() => 0.5 - Math.random()));
console.log(numbers.sort((a, b) => a - b));
console.log(numbers.sort((a, b) => a - b)[0]);
console.log(numbers.sort((a, b) => a - b)[numbers.length - 1]);
console.log(numbers);
console.log(numbers.reverse());
console.log(numbers);

let avengers = ["Captain America", "Iron Man", "Thor", "Hulk", "HawkEye", "Black Widow"];

let [captain, ...team] = avengers;

console.log(avengers);
console.log(captain);
console.log(team);

function avengerList(...heros) {
	for (let hero of heros) {
		console.log(`Hello ${hero} 🤟`);
	}
}

avengerList(...avengers);

for (let i in fruits) console.log(i);
for (let [i, j] in fruits) console.log(i, j);
for (let i of fruits) console.log(i);
// for (let [i, j] of fruits) console.log(i, j);
// for (let [i, ...j] of fruits) console.log(i, j);

let nums = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
let l = nums.length;

// nums[nums.length-1] = nums[nums.length-1]+ 100
console.log(
	String(BigInt(nums.join("")) + BigInt(1))
		.split("")
		.map((n) => Number(n))
);
nums[0] = 10;
console.log(nums);

let [x1, ...result] = ["a", "b", "c"];

console.log(result);
console.log(typeof result);
console.log(result instanceof Object);
console.log(result instanceof Array);
console.log(Array.isArray(result));

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(
	months.filter((month) => {
		return month.startsWith("J");
	})
);

console.log(
	months.map((month) => {
		return month.toUpperCase();
	})
);
console.log(months);
months.forEach((month) => {
	month.toLowerCase();
});
console.log(months);


console.log(Array.of())
console.log(Array.of(""))
console.log(Array.of(1))
console.log(Array.of(1, 2, 3))