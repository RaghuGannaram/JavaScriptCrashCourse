/**
 * Boyer-Moore Voting Algorithm
 * 
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * 
 * Algorithm:
 * 1. Initialize a counter and candidate.
 * 2. Loop through the array.
 * 3. If counter is 0, set candidate to current element.
 * 4. If current element is equal to candidate, increment counter.
 * 5. Else, decrement counter.
 * 6. Return candidate.
 * 
 * Uses:
 * 1. Find the majority element in an array.
 * 2. Find the majority element in a stream of numbers.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function majorityElement(nums) {
    let count = 0, candidate;

    for (let num of nums) {
        if (count === 0) candidate = num;
        num === candidate ? count++ : count--;
    }

    return candidate;
}