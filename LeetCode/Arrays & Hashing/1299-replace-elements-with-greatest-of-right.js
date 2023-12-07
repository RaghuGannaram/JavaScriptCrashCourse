/**
    @title 1299. Replace Elements with Greatest Element on Right Side
    @difficulty easy
    @url https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

    @description
        Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
        After doing so, return the array.

    @param {number[]} arr
    @return {number[]} 
 */

var replaceElements = function (arr) {
    let max = -1;

    for (let current, i = arr.length - 1; i >= 0; i--) {
        current = arr[i];
        arr[i] = max;
        max = Math.max(current, max);
    }

    return arr;
};

let arr = [17, 18, 5, 4, 6, 1];

console.log(replaceElements(arr));
