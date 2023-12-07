/**
    @title 290. Word Pattern
    @difficulty Easy
    @url https://leetcode.com/problems/word-pattern/

    @description
        Given a pattern and a string s, find if s follows the same pattern.
        Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

    @param {string} pattern
    @param {string} s
    @return {boolean}
 */

var wordPattern = function (pattern, s) {
    let words = s.split(" "),
        map = new Map(),
        used = new Set();

    if (pattern.length !== words.length) return false;

    for (let i = 0; i < pattern.length; i++) {
        if (map.has(pattern[i])) {
            if (map.get(pattern[i]) !== words[i]) return false;
        } else {
            if (used.has(words[i])) return false;
            map.set(pattern[i], words[i]);
            used.add(words[i]);
        }
    }

    return true;
};

let pattern = "abba",
    s = "dog cat cat dog";

console.log(wordPattern(pattern, s));
