//Simple Generator
function* simpleGenerator() {
	// yield "alpha";
	console.log(yield "a");
	console.log(yield "b");
	console.log(yield "c");
	console.log("Hello World...1");
	console.log("Hello World...2");
	console.log("Hello World...3");
	yield 1;
	yield 2;
}

let customSeries = simpleGenerator();
// console.log(customSeries.next());
// console.log(customSeries.next().value)
// console.log(customSeries.next());
// console.log(customSeries.next().value)
// console.log(customSeries.next());
// console.log(customSeries.next().value)
// console.log(customSeries.next());
// console.log(customSeries.next().value)

console.log(customSeries.next("x").value);
console.log(customSeries.next("y").value);
console.log(customSeries.next("z").value);
console.log(customSeries.next());
console.log(customSeries.next());
console.log(customSeries.next());

//ID Generator
function* generateId() {
	let id = 1000;
	while (true) {
		let skip = yield id;
		if (skip) {
			id += skip;
		} else {
			id++;
		}
	}
}

let uniqueId = generateId();
console.log(uniqueId.next());
console.log(uniqueId.next(500));
console.log(uniqueId.next());
console.log(uniqueId.next());
console.log(uniqueId.next());
console.log(uniqueId.return(10000));
console.log(uniqueId.next());
// console.log(uniqueId.throw(new Error("Hello World")))
console.log(uniqueId.next());

//Fibonacci Generator
function* fibonacci() {
	let [current, next] = [0, 1];
	while (true) {
		const reset = yield current;
		if (reset) {
			current = 0;
			next = 1;
		} else {
			[current, next] = [next, next + current];
		}
	}
}

const sequence = fibonacci();
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next(true).value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);

//-------------------------------------------------------------------------------------------------

let daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function* daysGenereratorA(arr) {
	for (let i in arr) {
		yield arr[i];
	}
	return "------";
}

let daysIteratorA = daysGenereratorA(daysArr);

console.log(daysIteratorA);
console.log(daysIteratorA.next());
console.log(daysIteratorA.next());
console.log(daysIteratorA.next());
// console.log(daysIteratorA.next());
// console.log(daysIteratorA.next());
// console.log(daysIteratorA.next());
// console.log(daysIteratorA.next());
// console.log(daysIteratorA.next());
// console.log(daysIteratorA.next());

for (let day of daysIteratorA) {
	console.log(day);
}

let daysObj = {
	0: "Sunday",
	1: "Monday",
	2: "Tuesday",
	3: "Wednesday",
	4: "Thursday",
	5: "Friday",
	6: "Saturday",
};

function* daysGenereratorO(obj) {
	for (let i in obj) {
		yield obj[i];
	}
	return "------";
}

let daysIteratorO = daysGenereratorO(daysObj);

console.log(daysIteratorO);
console.log(daysIteratorO.next());
console.log(daysIteratorO.next());
console.log(daysIteratorO.next());
// console.log(daysIteratorO.next());
// console.log(daysIteratorO.next());
// console.log(daysIteratorO.next());
// console.log(daysIteratorO.next());
// console.log(daysIteratorO.next());
// console.log(daysIteratorO.next());
for (let day of daysIteratorO) {
	console.log(day);
}

function* employeeIdGenerator() {
	let offset,
		id = 1071082;

	while (true) {
		offset = yield id;
		id += offset ?? 1;
		// offset ? (id += offset) : id++;
	}
}

const generateEmpId = employeeIdGenerator();
console.log(generateEmpId.next());
console.log(generateEmpId.next(8));
console.log(generateEmpId.next());

function* fibonacciGenerator() {
	let reset,
		x = 0,
		y = 1;

	while (true) {
		reset = yield x + y;
		[x, y] = reset ? [0, 1] : [y, x + y];
	}
}

const generateFib = fibonacciGenerator();

console.log(generateFib.next());
console.log(generateFib.next());
console.log(generateFib.next());
console.log(generateFib.next());
console.log(generateFib.next());
console.log(generateFib.next());
console.log(generateFib.next());
console.log(generateFib.next());
console.log(generateFib.next());
console.log(generateFib.next(true));
console.log(generateFib.next());
console.log(generateFib.next());
console.log(generateFib.next());
