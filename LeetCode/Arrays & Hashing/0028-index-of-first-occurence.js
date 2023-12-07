/**
    @title 28. Index of First Occurrence in a String
    @difficulty easy
    @url https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

    @description
        Given two strings needle and haystack, 
        return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

    @param {string} s
    @param {character} c
    @return {number}
 */

var strStr = function (haystack, needle) {
    let h = haystack.length,
        n = needle.length;

    for (let match, i = 0; i < h - (n - 1); i++) {
        match = 0;
        while (haystack[i + match] === needle[match]) {
            match++;
            if (match === n) return i;
        }
    }
    return -1;
};

let haystack = "hello",
    needle = "ll";

console.log(strStr(haystack, needle));
