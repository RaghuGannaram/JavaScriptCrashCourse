/**
    @url https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
    @title 1456. Maximum Number of Vowels in a Substring of Given Length
    @difficulty Medium

    @description
        Given a string s and an integer k.
        Return the maximum number of vowel letters in any substring of s with length k.
        Vowel letters in English are (a, e, i, o, u).

    @param {string} s
    @param {number} k
    @return {number}
 */

var maxVowels = function (s, k) {
    let res = 0, cur = 0;

    for (let i = 0; i < k; i++) {
        if (/[aeiou]/.test(s[i])) cur++;
    }
    res = cur;

    for (let i = 1; i < s.length - (k - 1); i++) {
        if (/[aeiou]/.test(s[i - 1])) cur--;
        if (/[aeiou]/.test(s[i + k - 1])) cur++;

        res = Math.max(res, cur);
    }

    return res;
};

let s = "abciiidef", k = 3;

console.log(maxVowels(s, k));   // 3