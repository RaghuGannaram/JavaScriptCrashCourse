/**
    @title 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
    @difficulty Medium
    @url https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/

    @description   
        Given an array of integers arr and two integers k and threshold.
        Return the number of sub-arrays of size k and average greater than or equal to threshold.

    @param {number[]} arr
    @param {number} k
    @param {number} threshold
 */

var numOfSubarrays1 = function (arr, k, threshold) {
    let count = 0;

    for (let i = 0, avg; i < arr.length - (k - 1); i++) {
        if (i === 0) {
            avg = arr.slice(0, k).reduce((sum, cur) => sum + cur, 0) / k;
        } else {
            avg = avg - arr[i - 1] / k + arr[i + k - 1] / k;
        }
        if (avg >= threshold) count++;
    }

    return count;
};

var numOfSubarrays2 = function (arr, k, threshold) {
    let res = 0,
        avg = arr.slice(0, k).reduce((acc, cur) => acc + cur, 0) / k;

    if (avg >= threshold) res++;

    for (let i = k; i < arr.length; i++) {
        avg = (avg * k - arr[i - k] + arr[i]) / k;

        if (avg >= threshold) res++;
    }

    return res;
};

let arr = [2, 2, 2, 2, 5, 5, 5, 8],
    k = 3,
    threshold = 4;

console.log(numOfSubarrays1(arr, k, threshold));
