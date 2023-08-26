/*
 * Merge Sort
 * - Merge sort is an efficient, general-purpose, comparison-based sorting algorithm.
 * - Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output.
 * - Merge sort is a divide and conquer algorithm that was invented by John von Neumann in 1945.
 * - A detailed description and analysis of bottom-up mergesort appeared in a report by Goldstine and von Neumann as early as 1948.
 * - Merge sort was one of the earliest sorting algorithms invented, and is still the most commonly used.
 * - Merge sort is a comparison sort, meaning that it can sort items of any type for which a less-than relation (formally, a total order) is defined.
 * - Conceptually, a merge sort works as follows:
 * 		1. Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
 * 		2. Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.
 * - Top-down implementation:
 *		1. Divide the unsorted list into two sublists of about half the size.
 *		2. Sort each sublist recursively by re-applying the merge sort.
 *		3. Merge the two sublists back into one sorted list.
 * - Bottom-up implementation:
 *		1. Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
 *		2. Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.
 * - Merge sort has an average and worst-case performance of O(n log n).
 * - If the running time of merge sort for a list of length n is T(n), then the recurrence T(n) = 2T(n/2) + n follows from the definition of the algorithm (apply the algorithm to two lists of half the size of the original list, and add the n steps taken to merge the resulting two lists).
 * - The closed form follows from the master theorem for divide-and-conquer recurrences.
 * - Merge sort is more efficient than quicksort for some types of lists if the data to be sorted can only be efficiently accessed sequentially, and is thus popular in languages such as Lisp, where sequentially accessed data structures are very common.
 * - Unlike some (efficient) implementations of quicksort, merge sort is a stable sort.
 * - Merge sort is also used for sorting of parallel computers, as it is a stable sort and can be easily parallelized.
 * - Merge sort itself is the standard internal sorting algorithm in Java and Python; timsort, the standard sorting algorithm in Python, is a hybrid of merge sort and insertion sort.
 * - Merge sort is used for counting inversions in a list, as it is one of the most efficient sorting algorithms in terms of computational complexity.
 * - Merge sort is used in external sorting.
 * - Merge sort is used in online algorithm for finding the median in a unsorted list (nth_element function in C++ and C++11).
 * - Merge sort is used in External merge sort, a sorting algorithm for external memory.
 * - Merge sort is used in Parallel merge sort, a parallelized version of merge sort exploiting multiple processors.
 * - Merge sort is used in Sample sort, a sorting algorithm that works better in situations where there are large amounts of data that cannot fit into memory.
 * - Merge sort is used in Sorting networks, a parallel sorting algorithm.
 * - Merge sort is used in Block sort, an algorithm for sorting using blocks.
 * - Merge sort is used in Tournament sort, an algorithm for sorting using tournaments.
 * - Merge sort is used in Bucket sort, an algorithm for sorting using buckets.
 * - Merge sort is used in Burstsort, a sorting algorithm that is cache-efficient.
 * - Merge sort is used in Postman sort, a variation of merge sort that is cache-efficient.
 * - Merge sort is used in Timsort, a hybrid sorting algorithm, derived from merge sort and insertion sort, designed to perform well on many kinds of real-world data.
 * - Merge sort is used in Gapped insertion sort, a variation of insertion sort that uses merge sort to sort groups of elements at a time.
 * - Merge sort is used in Library sort, a variation of insertion sort that uses merge sort to sort groups of elements at a time.
 * - Merge sort is used in Super Scalar Sample Sort, a variation of sample sort that uses merge sort to sort groups of elements at a time.
 * - Merge sort is used in Spaghetti sort, a variation of bubble sort that uses merge sort to sort groups of elements at a time.
 * - Merge sort is used in Block merge sort, a variation of merge sort that sorts blocks of elements at a time.
 * - Merge sort is used in Pairwise sorting network, a sorting network that uses merge sort to sort pairs of elements at a time.
 * - Merge sort is used in Odd-even merge sort, a variation of merge sort that sorts pairs of elements at a time.
 * - Merge sort is used in Bitonic merge sort, a variation of merge sort that sorts pairs of elements at a time.
 * - Merge sort is used in Batchers' odd-even merge sort, a variation of merge sort that sorts pairs of elements at a time.
 * - Merge sort is used in Bitonic sorter, a variation of merge sort that sorts pairs of elements at a time.
 * - Merge sort is used in Batcher's bitonic sorting network, a sorting network that uses merge sort to sort pairs of elements at a time.
 * - Merge sort is used in Batcher's odd-even mergesort, a variation of merge sort that sorts pairs of elements at a time.
 * - Merge sort is used in Batcher's bitonic mergesort, a variation of merge sort that sorts pairs of elements at a time.
 *
 * Time Complexity: Best - O(nlogn)
 * 				 Average - O(nlogn)
 * 				   Worst - O(nlogn)
 *
 * Space Complexity: Best - O(n)
 * 				  Average - O(n)
 * 				    Worst - O(n)
 *
 * type       - Comparison Sort
 * stable     - Yes
 * in-Place   - No
 * recursive  - Yes
 * online     - No
 * adaptive   - No
 */

function mergeSort(arr) {
	if (arr.length <= 1) return arr;

	let mIndex = Math.floor(arr.length / 2);
	return merge(mergeSort(arr.slice(0, mIndex)), mergeSort(arr.slice(mIndex)));
}

function merge(arr1, arr2) {
	let sortedArr = [];
	while (arr1.length && arr2.length) {
		if (arr1[0] < arr2[0]) sortedArr.push(arr1.shift());
		else sortedArr.push(arr2.shift());
	}
	return [...sortedArr, ...arr1, ...arr2];
}

let input = [234, 43, 234, -56, -56, 55, 63, 5, 6, 235, 547];
let output = mergeSort(input);

console.log("input : ", input);
console.log("output : ", output);
