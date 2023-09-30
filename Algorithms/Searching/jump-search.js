function jumpSearch(arr, target) {
    const n = arr.length;
    const blockSize = Math.floor(Math.sqrt(n));

    let step = blockSize, prev = 0;

    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        step += blockSize;
        if (prev >= n) {
            return -1; // Target is not in the array
        }
    }

    // Step 2: Perform a linear search within the block
    for (let i = prev; i < Math.min(step, n); i++) {
        if (arr[i] === target) {
            return i; // Element found, return its index
        }
    }

    return -1; // Target not found in the array
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const targetElement = 13;
const result = jumpSearch(sortedArray, targetElement);

if (result !== -1) {
    console.log(`Element ${targetElement} found at index ${result}`);
} else {
    console.log(`Element ${targetElement} not found in the array`);
}
