/**
    * Dutch national flag
    * Given an array A[] consisting 0s, 1s and 2s. The task is to write a function that sorts the given array.
    * The functions should put all 0s first, then all 1s and all 2s in last.
    * 
    * Algorithm:
    * 1. Initialize low = 0, mid = 0, high = n-1.
    * 2. Loop through the array.
    * 3. If the current element is 0, swap the element at index low with the element at index mid and increment low and mid.
    * 4. If the current element is 1, increment mid.
    * 5. If the current element is 2, swap the element at index mid with the element at index high and decrement high.
    * 
    * Uses:
    * 1. Sort an array of 0s, 1s and 2s.
    *   
    * Time Complexity : O(n)
    * Space Complexity: O(1)
 */

function dutchNationalFlag(nums) {
    let low = 0,
        mid = 0,
        high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
}

let input = [0, 1, 2, 0, 1, 2];

dutchNationalFlag(input);
console.log(input);