/**
    @title 205. Isomorphic Strings
    @difficulty easy
    @url   https://leetcode.com/problems/isomorphic-strings/

    @description
        Given two strings s and t, determine if they are isomorphic.
        Two strings s and t are isomorphic if the characters in s can be replaced to get t.
        All occurrences of a character must be replaced with another character while preserving the order of characters.
        No two characters may map to the same character, but a character may map to itself.

    @param {string} s
    @param {string} t
    @return {boolean}
 */

var isIsomorphic = function (s, t) {
    let map = new Map(),
        used = new Set();

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            if (map.get(s[i]) !== t[i]) return false;
        } else {
            if (used.has(t[i])) return false;
            map.set(s[i], t[i]);
            used.add(t[i]);
        }
    }

    return true;
};

let s = "egg",
    t = "add";

console.log(isIsomorphic(s, t));
