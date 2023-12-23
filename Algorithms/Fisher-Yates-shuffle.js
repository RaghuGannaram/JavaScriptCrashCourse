/**
 * Fisher-Yates shuffle algorithm
 *
 * Algorithm:
 * 1. Start from the last element and swap one by one.
 * 2. Call random function to generate index between 0 and i.
 * 3. Swap arr[i] with the element at random index.
 * 4. Repeat until array is shuffled
 *
 * Uses:
 * 1. Shuffle a given array.
 * 2. Shuffle a deck of cards.
 * 3. Generate a random permutation of a given array.
 *
 * Time Complexity : O(n)
 * Space Complexity: O(1)
 */

function shuffle(arr) {
    for (let i = arr.length - 1, r; i > 0; i--) {
        r = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

let input = ["A", "B", "C", "D", "E", "F"];

console.log(shuffle(input));
