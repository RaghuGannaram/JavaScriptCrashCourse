/**
    @url https://leetcode.com/problems/median-of-two-sorted-arrays/
    @title 4. Median of Two Sorted Arrays
    @difficulty Hard

    @description
        Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
        The overall run time complexity should be O(log (m+n)).

    @param {number[]} nums1
    @param {number[]} nums2
    @return {number}
 */

var findMedianSortedArrays = function (nums1, nums2) {
    let m = nums1.length, n = nums2.length, l = 0, r = m, i, j, k, res;

    while (l <= r) {
        i = Math.floor((l + r) / 2);
        j = Math.floor((m + n + 1) / 2) - i;

        if (i > 0 && nums1[i - 1] > nums2[j]) r = i - 1;
        else if (i < m && nums2[j - 1] > nums1[i]) l = i + 1;
        else {
            if (i === 0) res = nums2[j - 1];
            else if (j === 0) res = nums1[i - 1];
            else res = Math.max(nums1[i - 1], nums2[j - 1]);

            break;
        }
    }

    if ((m + n) % 2 === 1) return res;

    if (i === m) res += nums2[j];
    else if (j === n) res += nums1[i];
    else res += Math.min(nums1[i], nums2[j]);

    return res / 2;
};