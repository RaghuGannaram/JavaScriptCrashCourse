let dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function* iterateArr(arr) {
	for (let i in arr) {
		yield arr[i];
	}
	return "*completed*";
}

let iterateDayArr = iterateArr(dayArr);

console.log(iterateDayArr);
console.log(iterateDayArr.next());
console.log(iterateDayArr.next());
console.log(iterateDayArr.next());
console.log(iterateDayArr.next());
console.log(iterateDayArr.next());
console.log(iterateDayArr.next());
console.log(iterateDayArr.next());
console.log(iterateDayArr.next());
console.log(iterateDayArr.next());

let dayObj = {
    0: "Sunday",
    1: "Monday", 
    2: "Tuesday", 
    3: "Wednesday", 
    4: "Thursday", 
    5: "Friday", 
    6: "Saturday"
}

function* iterateObj(obj) {
	for (let i in obj) {
		yield obj[i];
	}
	return "*completed*";
}

let iterateDayObj = iterateObj(dayObj);

console.log(iterateDayObj);
console.log(iterateDayObj.next());
console.log(iterateDayObj.next());
console.log(iterateDayObj.next());
console.log(iterateDayObj.next());
console.log(iterateDayObj.next());
console.log(iterateDayObj.next());
console.log(iterateDayObj.next());
console.log(iterateDayObj.next());
console.log(iterateDayObj.next());




function* simpleGenerator() {
	//    console.log(yield 1)
	//    console.log(yield 2)
	//    console.log(yield 3)
	yield 2;
	yield 3;
}

let customSeries = simpleGenerator();
console.log(customSeries.next());
// console.log(customSeries.next().value)
console.log(customSeries.next());
// console.log(customSeries.next().value)

// console.log(customSeries.next("a").value)
// console.log(customSeries.next("b").value)
// console.log(customSeries.next("c").value)
// console.log(customSeries.next())
// console.log(customSeries.next())
// console.log(customSeries.next())

function* generateId() {
	let id = 1000;
	while (true) {
		let init = yield id;
		if (init) id += init;
		else id++;
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
