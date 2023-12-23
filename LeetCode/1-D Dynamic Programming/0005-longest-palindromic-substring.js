/**
    @title 5. Longest Palindromic Substring
    @difficulty Medium
    @url https://leetcode.com/problems/longest-palindromic-substring/

    @description
        Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

    @param {string} s
    @return {string}
 */

var longestPalindrome = function (s) {
    let res = "";

    for (let l, r, i = 0; i < s.length; i++) {
        l = i;
        r = i;

        while (0 <= l && r < s.length && s[l] === s[r]) {
            if (r + 1 - l > res.length) {
                res = s.slice(l, r + 1);
            }
            l--;
            r++;
        }

        l = i;
        r = i + 1;
        while (0 <= l && r < s.length && s[l] === s[r]) {
            if (r + 1 - l > res.length) {
                res = s.slice(l, r + 1);
            }
            l--;
            r++;
        }
    }

    return res;
};
