/**
    @title 647. Palindromic Substrings
    @difficulty Medium
    @url https://leetcode.com/problems/palindromic-substrings/

    @description
        Given a string, your task is to count how many palindromic substrings in this string.
        The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

    @param {string} s
    @return {number}
 */

var countSubstrings = function (s) {
    let res = 0;

    for (let l, r, i = 0; i < s.length; i++) {
        l = i;
        r = i;
        while (0 <= l && r < s.length && s[l] === s[r]) {
            res++;
            l--;
            r++;
        }

        l = i;
        r = i + 1;
        while (0 <= l && r < s.length && s[l] === s[r]) {
            res++;
            l--;
            r++;
        }
    }

    return res;
};
