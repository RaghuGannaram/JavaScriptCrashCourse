/**
    @url https://leetcode.com/problems/merge-sorted-array/
    @title 88. Merge Sorted Array
    @difficulty Easy

    @description
        Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
        The number of elements initialized in nums1 and nums2 are m and n respectively.
        You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

    @param {number[]} nums1
    @param {number} m
    @param {number[]} nums2
 */

var merge = function (nums1, m, nums2, n) {
    let i1 = m - 1, i2 = n - 1;

    for (let i = m + n - 1; i >= 0; i--) {
        if (i2 < 0) break;
        
        if (nums1[i1] > nums2[i2]) {
            nums1[i] = nums1[i1];
            i1--;
        } else {
            nums1[i] = nums2[i2];
            i2--;
        }
    }
};

let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);