/**
    @title 392. Is Subsequence
    @difficulty easy
    @url https://leetcode.com/problems/is-subsequence/

    @description
        Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
        A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.
        (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
        Follow up: If there are lots of incoming s, say s1, s2, ..., sk where k >= 10^9, and you want to check one by one to see if t has its subsequence.
        In this scenario, how would you change your code?

    @param {string} s
    @param {string} t
    @return {boolean}
 */

var isSubsequence = function (s, t) {
    let match = 0;

    for (let ch of t) {
        if (ch === s[match]) match++;
    }

    return match === s.length;
};

let s = "abc",
    t = "ahbgdc";

console.log(isSubsequence(s, t));