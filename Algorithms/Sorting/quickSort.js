/*
 * Quick Sort
 *	- QuickSort is a Divide and Conquer algorithm.
 *	- It picks an element as pivot and partitions the given array around the picked pivot.
 *	- There are many different versions of quickSort that pick pivot in different ways.
 *	- Always pick first element as pivot.
 *	- Always pick last element as pivot (implemented below)
 *	- Pick a random element as pivot.
 *	- Pick median as pivot.
 *	- The key process in quickSort is partition().
 *	- Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x,
 *	  and put all greater elements (greater than x) after x.
 *	- All this should be done in linear time.
 *
 * Time Complexity:  Best - O(nlogn)
 *				 Average - O(nlogn)
 *				   Worst - O(n^2)
 *
 * Space Complexity: Best - O(logn)
 *				 Average - O(logn)
 *			       Worst - O(n)
 *
 * type        - Comparison Sort
 * recursive   - Yes
 * stable      - No
 * in-Place    - Yes
 * adaptive    - No
 * online      - No
 */

function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[Math.floor(arr.length / 2)],
        equal = [],
        left = [],
        right = [];

    for (let n of arr) {
        if (n < pivot) left.push(n);
        else if (n > pivot) right.push(n);
        else equal.push(n);
    }

    return [...quickSort(left), ...equal, ...quickSort(right)];
}

let input = [234, 43, 234, -56, -56, 55, 63, 5, 6, 235, 547];
let output = quickSort(input);

console.log("input : ", input);
console.log("output : ", output);
