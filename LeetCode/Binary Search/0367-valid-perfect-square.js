/**
    @url https://leetcode.com/problems/valid-perfect-square/
    @title 367. Valid Perfect Square
    @difficulty Easy

    @description
        Given a positive integer num, write a function which returns True if num is a perfect square else False.
        Note: Do not use any built-in library function such as sqrt.

    @param {number} num
    @return {boolean}
 */

var isPerfectSquare = function (num) {
    let l = 1, r = Math.ceil(num / 2), m;

    while (l <= r) {
        m = Math.floor((l + r) / 2);

        if (m * m === num) return true;

        if (m * m < num) l = m + 1;
        else r = m - 1;
    }

    return false;
};

let num = 16;

console.log(isPerfectSquare(num));