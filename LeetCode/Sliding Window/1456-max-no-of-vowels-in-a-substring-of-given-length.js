/**
    @title 1456. Maximum Number of Vowels in a Substring of Given Length
    @difficulty Medium
    @url https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/

    @description
        Given a string s and an integer k.
        Return the maximum number of vowel letters in any substring of s with length k.
        Vowel letters in English are (a, e, i, o, u).

    @param {string} s
    @param {number} k
    @return {number}
 */

var maxVowels1 = function (s, k) {
    let res = 0,
        r = 0,
        count = 0,
        window = "";

    while (r < s.length) {
        if (s[r].match(/[aeiou]/)) count++;
        window += s[r];

        if (window.length > k) {
            if (window[0].match(/[aeiou]/)) count--;
            window = window.slice(1);
        }

        res = Math.max(res, count);
        r++;
    }

    return res;
};

var maxVowels2 = function (s, k) {
    let res = 0,
        count = 0;

    for (let i = 0; i < s.length; i++) {
        if (/[aeiou]/.test(s[i])) count++;

        if (i >= k && /[aeiou]/.test(s[i - k])) count--;

        res = Math.max(res, count);
    }

    return res;
};

let s = "abciiidef",
    k = 3;

console.log(maxVowels1(s, k)); // 3
