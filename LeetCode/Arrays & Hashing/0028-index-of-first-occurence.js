/**
    @url https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
    @title 28. Index of First Occurrence in a String
    @difficulty easy

    @description
        Given two strings needle and haystack, 
        return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

    @param {string} s
    @param {character} c
    @return {number}
 */

var strStr = function (haystack, needle) {
    let i = 0, l = 0, h = haystack.length, n = needle.length;

    while (i <= h - n) {
        l = 0;
        while (haystack[i + l] === needle[l]) {
            if (l === n - 1) return i;
            l++;
        }
        i++;
    }

    return -1;
};

let haystack = "hello", needle = "ll";

console.log(strStr(haystack, needle));