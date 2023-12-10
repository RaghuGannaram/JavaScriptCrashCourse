/**
    @title 88. Merge Sorted Array
    @difficulty Easy
     @url https://leetcode.com/problems/merge-sorted-array/

    @description
        Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
        The number of elements initialized in nums1 and nums2 are m and n respectively.
        You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

    @param {number[]} nums1
    @param {number} m
    @param {number[]} nums2
    @param {number} n
    @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge1 = function (nums1, m, nums2, n) {
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

var merge2 = function (nums1, m, nums2, n) {
    let l = m + n;

    while (n > 0) {
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[l - 1] = nums1[m - 1];
            m--;
            l--;
        } else {
            nums1[l - 1] = nums2[n - 1];
            n--;
            l--;
        }
    }
};

var merge3 = function (nums1, m, nums2, n) {
    let l = m + n - 1;
    m--;
    n--;

    while (n >= 0) {
        nums1[l--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
    }
};

let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3;

merge1(nums1, m, nums2, n);

console.log(nums1);