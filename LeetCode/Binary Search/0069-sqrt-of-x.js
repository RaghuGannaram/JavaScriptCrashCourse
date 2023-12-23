/**
    @url https://leetcode.com/problems/sqrtx/
    @title 69. Sqrt(x)
    @difficulty Easy

    @description
        Implement int sqrt(int x).
        Compute and return the square root of x, where x is guaranteed to be a non-negative integer.
        Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

    @param {number} x
    @return {number}
 */

var mySqrt = function (x) {
    let l = 0,
        r = Math.ceil(x / 2),
        m;

    while (l <= r) {
        m = Math.floor((l + r) / 2);
        if (m * m === x) return m;

        m * m < x ? (l = m + 1) : (r = m - 1);
    }

    return r;
};
let x = 8;

console.log(mySqrt(x));
