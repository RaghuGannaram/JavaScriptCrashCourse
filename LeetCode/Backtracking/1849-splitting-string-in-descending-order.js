/**
    @title 1849. Splitting a String Into Descending Consecutive Values
    @difficulty Medium
    @url https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/

    @description
        You are given a string s that consists of only digits.
        Check if we can split s into two or more non-empty substrings such that the numerical values of the substrings are in descending order 
        and the difference between numerical values of every two adjacent substrings is equal to 1.

    @param {string} s
    @return {boolean}
 */

var splitString = function (s) {

    for (let i = 0; i < s.length - 1; i++) {
        if (backtrack(i + 1, Number(s.slice(0, i + 1)))) return true;
    }

    return false;

    function backtrack(i, prev) {
        if (i === s.length) return true;

        for (let j = s.length - 1; j >= i; j--) {
            if (prev - 1 === Number(s.slice(i, j + 1))) {
                return backtrack(j + 1, Number(s.slice(i, j + 1)));
            }
        }

        return false;
    }
};

let s = "1234";

console.log(splitString(s)); // false