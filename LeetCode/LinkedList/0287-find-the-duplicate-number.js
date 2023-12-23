/**
    @title 287. Find the Duplicate Number
    @difficulty Medium
    @url https://leetcode.com/problems/find-the-duplicate-number/

    @description
        Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

        Example 1:

        Input: [1,3,4,2,2]
        Output: 2
        Example 2:

        Input: [3,1,3,4,2]
        Output: 3
        Note:

        You must not modify the array (assume the array is read only).
        You must use only constant, O(1) extra space.
        Your runtime complexity should be less than O(n2).
        There is only one duplicate number in the array, but it could be repeated more than once.

    @param {number[]} nums
    @return {number}
 */

var findDuplicate1 = function (nums) {
    let acc = 0,
        nSum,
        n = nums.length - 1;

    for (let i = 0; i < nums.length; i++) {
        acc += nums[i];
    }

    nSum = (n * n + n) / 2;

    return acc - nSum;
};

var findDuplicate2 = function (nums) {
    let slow = 0,
        fast = 0;

    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        if (slow === fast) {
            slow = 0;
            break;
        }
    }

    while (true) {
        slow = nums[slow];
        fast = nums[fast];
        if (slow === fast) {
            return slow;
        }
    }
};

console.log(findDuplicate2([1, 3, 4, 2, 2]));
