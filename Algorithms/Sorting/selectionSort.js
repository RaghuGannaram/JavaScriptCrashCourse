/*
* Selection Sort
* - Selection sort is noted for its simplicity and has performance advantages over more complicated algorithms in certain situations,
*   particularly where auxiliary memory is limited.
* - The algorithm divides the input list into two parts: a sorted sublist of items which is built up from left to right at the front (left) of the list
*   and a sublist of the remaining unsorted items that occupy the rest of the list.
* - Initially, the sorted sublist is empty and the unsorted sublist is the entire input list.
* - The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist,
*   exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order),
*   and moving the sublist boundaries one element to the right.
*
* Time Complexity:  Best - O(n^2)
* 				 Average - O(n^2)
* 				   Worst - O(n^2)
*
* Space Complexity:  Best - O(1)
* 				  Average - O(1)
* 				    Worst - O(1)
*
* type       - Comparison Sort
* stable     - No
* in-place   - Yes
* recursive  - No
* online     - No
* adaptive   - No
*/

function selectionSort(arr) {
	for (let i = 0, min; i < arr.length; i++) {
		min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) min = j;
		}
		if (i !== min) {
			[arr[i], arr[min]] = [arr[min], arr[i]];
		}
	}
	return arr;
}

let input = [234, 43, 234, -56, -56, 55, 63, 5, 6, 235, 547];
let output = selectionSort(input);

console.log("input : ", input);
console.log("output : ", output);
