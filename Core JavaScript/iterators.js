// Array are iterable by default---
let daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday"];

daysArr[4] = "Thurday";
daysArr.penultimateDay = "Friday";
Object.defineProperty(daysArr, "lastDay", {
	value: "Saturday",
	enumerable: true,
});

console.log(daysArr);

for (let i in daysArr) {
	console.log(i);
}
for (let i of daysArr) {
	console.log(i);
}

// Objects should have Symbol.iterator method implemented to become iterable---
let daysObj = {
	0: "Sunday",
	1: "Monday",
	2: "Tuesday",
	3: "Wednesday",
};

daysObj[9] = "Thursday";
daysObj.penultimateMonth = "Friday";
Object.defineProperty(daysObj, "lastMonth", {
	value: "Saturday",
	enumerable: true,
});

// Making daysObj Iterable | Creating the Symbol.iterator methos on daysObj
daysObj[Symbol.iterator] = function () {
	let index = -1;
	let arrKeys = Object.keys(this);
	let arrValues = Object.values(this);

	return {
		next: function () {
			++index;
			return {
				value: arrValues[index],
				done: index >= arrKeys.length,
			};
		},
	};
};

console.log(daysObj);

for (let i in daysObj) {
	console.log(i);
}

for (let i of daysObj) {
	console.log(i);
}

//-------------------------------------------------------------------------------------------------
//Iterator which provides natural numbers upto specified limit
function simpleIterator(limit) {
	let count = 0;
	return {
		next: function () {
			count++;
			return {
				value: count <= limit ? count : undefined,
				done: count > limit,
			};
		},
	};
}

let naturalNumbers = simpleIterator(3);
console.log(naturalNumbers.next());
console.log(naturalNumbers.next());
console.log(naturalNumbers.next());
console.log(naturalNumbers.next());
console.log(naturalNumbers);

//Iterable which provides squared numbers upto specified limit
function squaredIterator(limit) {
	return {
		[Symbol.iterator]: function () {
			let n = 0;
			return {
				next: function () {
					n++;
					return {
						value: n <= limit ? n * n : undefined,
						done: n > limit,
					};
				},
			};
		},
	};
}

//Iterable
let squaredIterable = squaredIterator(3);
console.log(squaredIterable);
console.log(...squaredIterable);
for (let sqr of squaredIterable) {
	console.log(sqr);
}

//Iterator
let squaredItr = squaredIterable[Symbol.iterator]();
console.log(squaredItr.next());
console.log(squaredItr.next());
console.log(squaredItr.next());
console.log(squaredItr.next());

//Iterable
let nums = [5, 3, 7];

//Iterator
let numsIterator = nums[Symbol.iterator]();
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());

let arr = [10, 20, 30];
let itr = arr[Symbol.iterator]();

console.log(itr.toString());
console.log(arr[Symbol.iterator].toString());
// console.log(arr);

console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
