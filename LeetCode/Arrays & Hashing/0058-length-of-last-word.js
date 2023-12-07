/**
    @title 58. Length of Last Word
    @difficulty easy
    @url https://leetcode.com/problems/length-of-last-word/

    @description
        Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.
        A word is a maximal substring consisting of non-space characters only.

    @param {string} s
    @return {number}
 */

var lengthOfLastWord1 = function (s) {
    let l = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === " " && l) break;
        if (s[i] !== " ") l++;
    }

    return l;
};

var lengthOfLastWord2 = function (s) {
    let l = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " ") {
            l++;
        } else {
            if (l === 0) continue;
            else break;
        }
    }

    return l;
};

var lengthOfLastWord3 = function (s) {
    let match = s.match(/(\w+)\s*$/);

    return match[1] ? match[1].length : 0;
};

let s = "Hello World";

console.log(lengthOfLastWord1(s));
