/**
    @title 27. Remove Element
    @difficulty easy
    @url https://leetcode.com/problems/remove-element/

    @description
        Given an array nums and a value val, remove all instances of that value in-place and return the new length.
        Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
        The order of elements can be changed. It doesn't matter what you leave beyond the new length.

    @param {number[]} nums
    @param {number} val
    @return {number}
 */
var removeElement = function (nums, val) {
    let l = 0, r = 0;

    while (r < nums.length) {
        if (nums[r] !== val) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
        }
        r++;
    }

    return l;
};  

let nums = [3, 2, 2, 3], val = 3;

console.log(removeElement(nums, val), nums);
