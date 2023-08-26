/*
 * Counting Sort
 *	- Counting sort is a sorting technique based on keys between a specific range.
 *	- It works by counting the number of objects having distinct key values (kind of hashing).
 *	- It is often used as a sub-routine to another sorting algorithm like radix sort.
 *	- Counting sort uses a partial hashing to count the occurrence of the data object in O(1).
 *	- Counting sort can be extended to work for negative inputs also.
 *	- Counting sort is a linear time sorting algorithm that sort in O(n+k) time when elements are in range from 1 to k.
 *
 * Time Complexity: Best - O(n+k)
 * 				 Average - O(n+k)
 * 				   Worst - O(n+k)
 * 
 * Space Complexity: Best - O(n+k)
 * 				  Average - O(n+k)
 * 				    Worst - O(n+k)
 * 
 * type       - Non-Comparison Sort
 * stable     - Yes
 * in-Place   - No
 * recursive  - No
 * online     - No
 * adaptive   - No
 */

function countingSort(arr) {
	const result = new Array(arr.length),
		min = Math.min(...arr),
		max = Math.max(...arr);

	const counter = new Array(max - min + 1).fill(0);

	for (let i = 0; i < arr.length; i++) {
		counter[arr[i] - min]++;
	}

	for (let i = 1; i < counter.length; i++) {
		counter[i] += counter[i - 1];
	}

	for (let i = arr.length - 1; i >= 0; i--) {
		counter[arr[i] - min]--;
		result[counter[arr[i] - min]] = arr[i];
	}
	return result;
}

let input = [234, 43, 234, -56, -56, 55, 63, 5, 6, 235, 547];
let output = countingSort(input);

console.log("input : ", input);
console.log("output : ", output);
