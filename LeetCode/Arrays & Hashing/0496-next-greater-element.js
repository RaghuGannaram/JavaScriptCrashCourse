/**
    @title 496. Next Greater Element I
    @difficulty easy
    @url https://leetcode.com/problems/next-greater-element-i/

    @description
        The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
        You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
        For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2.
        If there is no next greater element, then the answer for this query is -1.
        Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

    @param {number[]} nums1
    @param {number[]} nums2
    @return {number[]}
 */

var nextGreaterElement1 = function (nums1, nums2) {
    const res = [],
        map = new Map(),
        stack = [];

    for (let i = nums2.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack.at(-1) <= nums2[i]) {
            stack.pop();
        }

        map.set(nums2[i], stack.at(-1) ?? -1);

        stack.push(nums2[i]);
    }

    for (const num of nums1) {
        res.push(map.get(num));
    }

    return res;
};

var nextGreaterElement2 = function (nums1, nums2) {
    let res = new Array(nums1.length).fill(-1);

    for (let i = 0; i < nums1.length; i++) {
        j = nums2.indexOf(nums1[i]);
        while (j < nums2.length) {
            if (nums2[j] > nums1[i]) {
                res[i] = nums2[j];
                break;
            }
            j++;
        }
    }

    return res;
};

let nums1 = [4, 1, 2],
    nums2 = [2, 1, 4, 2];

console.log(nextGreaterElement1(nums1, nums2));
