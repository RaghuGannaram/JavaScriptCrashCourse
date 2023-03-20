// ------------------------------------ Labeled for-statement------------------
let i, j;

// The first for statement is labeled "loop1"
loop1: for (i = 0; i < 3; i++) {
	// The second for statement is labeled "loop2"
	loop2: for (j = 0; j < 3; j++) {
		if (i === 1 && j === 1) {
			continue loop1;
		}
		console.log(`${i}${j}`);
	}
}

//-----------------------------------------------------------------------------
let arr1 = [20, 42, 220, 60, 2];
let arr2 = [30, 70, 91, 52, 6, 78];
let arr3 = [210, 412, 24, 8, 12];

let table = [arr1, arr2, arr3];
let evenArrays = [];
let firstEvenArrays = [];

outer1: for (i = 0; i < table.length; i++) {
	inner1: for (j = 0; j < table[i].length; j++) {
		if (table[i][j] % 2 !== 0) {
			continue outer1;
		}
	}
	evenArrays.push(table[i]);
}

console.log(evenArrays);

outer2: for (i = 0; i < table.length; i++) {
	inner2: for (j = 0; j < table[i].length; j++) {
		if (table[i][j] % 2 !== 0) {
			break outer2;
		}
	}
	firstEvenArrays.push(table[i]);
}

console.log(firstEvenArrays);
//-----------------------------------------------------------------------------

printEssentials: {
	console.log("This code needs to be executed...!");
	break printEssentials;
	console.log("This code should not be executed");
}
console.log("This will always be executed...!");

