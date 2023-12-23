/**
    @title 658. Find K Closest Elements
    @difficulty Medium
    @url https://leetcode.com/problems/find-k-closest-elements/

    @description
        Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.
        An integer a is closer to x than an integer b if:
            |a - x| < |b - x|, or
            |a - x| == |b - x| and a < b

    @param {number[]} arr
    @param {number} k
    @param {number} x
    @return {number[]}
 */

var findClosestElements1 = function (arr, k, x) {
    let res = arr.slice(0, k),
        cur = 0,
        min = Number.MAX_SAFE_INTEGER;

    cur = res.reduce((acc, cur) => acc + Math.abs(cur - x), 0);
    min = cur;

    for (let i = 1; i < arr.length - (k - 1); i++) {
        cur -= Math.abs(arr[i - 1] - x);
        cur += Math.abs(arr[i + (k - 1)] - x);

        if (cur < min) {
            min = cur;
            res.shift();
            res.push(arr[i + (k - 1)]);
        }
    }

    return res;
};

var findClosestElements2 = function (arr, k, x) {
    let l = 0,
        r = arr.length - k,
        m;

    while (l < r) {
        m = Math.floor((l + r) / 2);

        if (x - arr[m] > arr[m + k] - x) l = m + 1;
        else r = m;
    }

    return arr.slice(l, l + k);
};

let arr = [1, 2, 3, 4, 5],
    k = 4,
    x = 3;

console.log(findClosestElements1(arr, k, x)); // [1,2,3,4]
