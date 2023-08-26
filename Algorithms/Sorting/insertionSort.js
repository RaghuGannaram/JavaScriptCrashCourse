/*
 * Insertion Sort
 * - It can be practical if the input is usually in sort order but may occasionally have some out-of-order elements nearly in position.
 * - It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.
 * - It is a stable sort, meaning that it preserves the relative order of elements that compare equal.
 * - Insertion sort is used when the number of elements is small.
 * - It can also be useful when input array is almost sorted, only few elements are misplaced in complete big array.
 * - Insertion sort is a good choice in online sorting when the list is being built up live, and it is desired that the list is sorted so far with each new element inserted.
 * - It is also useful in the case of online algorithms to sort dynamically changing data.
 * - Insertion sort is used in Hybrid sort which combines different sorting algorithms to improve performance.
 * - Insertion sort is used in Tim sort or smooth sort, algorithms used in sorting elements in real-time applications.
 * - Insertion sort is used in Patience sorting, an algorithm for solving the Patience sorting problem.
 * - Insertion sort is used in Gnome sort, an algorithm for sorting very small arrays.
 * - Insertion sort is used in Shell sort, an algorithm for sorting using sequence of increments.
 * - Insertion sort is used in Cycle sort, an in-place unstable algorithm for sorting.
 * - Insertion sort is used in Binary tree sort, an algorithm for sorting using binary search trees.
 * - Insertion sort is used in Binary insertion sort, an algorithm for sorting using binary search.
 * - Insertion sort is used in Library sort, an algorithm for online sorting.
 * - Insertion sort is used in Tree sort, an algorithm for sorting using binary search trees.
 * - Insertion sort is used in Introsort, an algorithm for sorting that uses quicksort and insertion sort to improve performance.
 * - Insertion sort is used in Block sort, an algorithm for sorting data on rewritable media.
 * - Insertion sort is used in Tournament sort, an algorithm for sorting using binary search trees.
 * - Insertion sort is used in Bucket sort, an algorithm for sorting using buckets.
 * - Insertion sort is used in Counting sort, an algorithm for sorting using counts.
 * - Insertion sort is used in Pigeonhole sort, an algorithm for sorting using pigeonhole principle.
 * - Insertion sort is used in Radix sort, an algorithm for sorting using radixes.
 * - Insertion sort is used in Bead sort, an algorithm for sorting using beads.
 * - Insertion sort is used in Pancake sorting, an algorithm for sorting a permutation of integers.
 * - Insertion sort is used in Selection sort, an algorithm for sorting using selection.
 * - Insertion sort is used in Bogosort, an algorithm for sorting using randomization.
 * - Insertion sort is used in Stooge sort, an algorithm for sorting using recursion.
 * - Insertion sort is used in Comb sort, an algorithm for sorting using gaps.
 * - Insertion sort is used in Cocktail sort, an algorithm for sorting using bidirectionality.
 * - Insertion sort is used in Odd-even sort, an algorithm for sorting using bidirectionality.
 * - Insertion sort is used in Gries–Mills sort, an algorithm for sorting using bidirectionality.
 * - Insertion sort is used in Patience sorting, an algorithm for sorting using piles.
 * - Insertion sort is used in Spaghetti sort, an algorithm for sorting using linked lists.
 * - Insertion sort is used in Smoothsort, an algorithm for sorting using insertion sort and heapsort.
 * - Insertion sort is used in Quickselect, an algorithm for finding the kth smallest element in an unsorted list.
 * - Insertion sort is used in Quickhull, an algorithm for computing the convex hull of a set of points.
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

function insertionSort(arr) {
	for (let i = 1, j, temp; i < arr.length; i++) {
		j = i;
		temp = arr[j];

		while (arr[j - 1] > temp) {
			arr[j] = arr[--j];
		}
		arr[j] = temp;
	}
	return arr;
}

let input = [234, 43, 234, -56, -56, 55, 63, 5, 6, 235, 547];
let output = insertionSort(input);

console.log("input : ", input);
console.log("output : ", output);
