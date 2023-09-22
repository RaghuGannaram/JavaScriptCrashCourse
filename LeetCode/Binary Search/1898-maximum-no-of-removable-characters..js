/**
    @url https://leetcode.com/problems/maximum-number-of-removable-characters/
    @title 1898. Maximum Number of Removable Characters
    @difficulty Medium

    @description
        You are given two strings s and p where p is a subsequence of s. You are also given a distinct 0-indexed integer array removable containing a subset of indices of s (s is also 0-indexed).
        You want to choose an integer k (0 <= k <= removable.length) such that, after removing k characters from s using the first k indices in removable, p is still a subsequence of s. More formally, you will mark the character at s[removable[i]] for each 0 <= i < k, then remove all marked characters and check if p is still a subsequence.
        Return the maximum k you can choose such that p is still a subsequence of s after the removals.
        A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

    @param {string} s
    @param {string} p
    @param {number[]} removable
    @return {number}
 */

var maximumRemovals = function (s, p, removable) {
    let l = 0, r = removable.length - 1, m, prohibited, res;
    res = l;

    outer: while (l <= r) {
        m = Math.floor((l + r) / 2);

        prohibited = new Set(removable.slice(0, m + 1));

        for (let i = 0, j = 0; i < s.length; i++) {
            if (!prohibited.has(i) && s[i] === p[j]) j++;
            if (j === p.length) {
                l = m + 1;
                res = Math.max(res, l);
                continue outer;
            }
        }
        r = m - 1;
    }
    return res;
};

let s = "abcacb", p = "ab", removable = [3, 1, 0];

console.log(maximumRemovals(s, p, removable));