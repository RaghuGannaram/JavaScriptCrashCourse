/*
 *Bubble Sort
 *	- Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.
 *	- Bubble sort is a stable, in-place sorting algorithm that is named for the way smaller or larger elements "bubble" to the top of the list.
 *	- Although the algorithm is simple, it is too slow and impractical for most problems even when compared to insertion sort.
 *	- It can be practical if the input is usually in sort order but may occasionally have some out-of-order elements nearly in position.
 *
 * Time Complexity: Best - O(n)
 * 				 Average - O(n^2)
 * 				   Worst - O(n^2)
 *
 * Space Complexity: Best - O(1)
 * 				  Average - O(1)
 * 				    Worst - O(1)
 *
 * type       - Comparison Sort
 * stable     - Yes
 * in-place   - Yes
 * recursive  - No
 * online     - Yes
 * adaptive   - Yes
 */

function bubbleSort1(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	return arr;
}

function bubbleSort2(arr) {
	let swaps = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				swaps++;
			}
		}
		if (!swaps) break;
	}
	return { arr, swaps };
}

function bubbleSort3() {
	const readline = require("readline");

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	function bubbleSort(arr) {
		const n = arr.length;

		for (let i = 0; i < n - 1; i++) {
			for (let j = 0; j < n - i - 1; j++) {
				if (arr[j] > arr[j + 1]) {
					[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				}
			}
		}

		return arr;
	}

	const sortedArray = [];

	function inputAndSort() {
		rl.question('Enter a number (or "q" to quit): ', (input) => {
			if (input.toLowerCase() === "q") {
				rl.close();
				return;
			}

			const number = parseInt(input);

			if (!isNaN(number)) {
				sortedArray.push(number);
				const sortedResult = bubbleSort([...sortedArray]);
				console.log("Sorted Array:", sortedResult);
			}

			inputAndSort();
		});
	}

	console.log('Enter numbers to sort. Type "q" to quit.');
	inputAndSort();
}

// let input = [234, 43, 234, -56, -56, 55, 63, 5, 6, 235, 547];
// let output = bubbleSort1(input);
// let { arr: optimizedOutput, swaps } = bubbleSort2(input);

// console.log("input : ", input);
// console.log("output : ", output);
// console.log(`No of swaps : ${swaps} \nOutput : `, optimizedOutput);

bubbleSort3();