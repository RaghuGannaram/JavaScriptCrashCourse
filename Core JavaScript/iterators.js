let monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September"];

monthsArr[9] = "October";
monthsArr.penultimateMonth = "November";
Object.defineProperty(monthsArr, "lastMonth", {
	value: "December",
	enumerable: true,
});

console.log(monthsArr);

for (let i in monthsArr) {
	console.log(i);
}
for (let i of monthsArr) {
	console.log(i);
}

let monthsObj = {
	0: "January",
	1: "February",
	2: "March",
	3: "April",
	4: "May",
	5: "June",
	6: "July",
	7: "August",
	8: "September",
};

monthsObj[9] = "October";
monthsObj.penultimateMonth = "November";
Object.defineProperty(monthsObj, "lastMonth", {
	value: "December",
	enumerable: true,
});

console.log(monthsObj);

for (let i in monthsObj) {
	console.log(i);
}

// for (let i of monthsObj) {
// 	// console.log(i);
// }

function simpleIterator() {
	let init = 0;
	return {
		next: function () {
			init += 10;
			return { value: init, done: false };
		},
	};
}

let itr = simpleIterator();
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());

let nums = [5, 3, 7, 2, 6];
let numsIterator = nums[Symbol.iterator]();
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());

function squared(max) {
	return {
		[Symbol.iterator]: function () {
			let num = 0;
			return {
				next: function () {
					num++;
					if (num <= max) return { value: num * num, done: false };
					else return { value: undefined, done: true };
				},
			};
		},
	};
}

console.log([...squared(10)]);

for (let sqr of squared(5)) {
	console.log(sqr);
}

for (let i in [4, 5, 3, 6, 1]) console.log(i);
for (let i of [4, 5, 3, 6, 1]) console.log(i);
