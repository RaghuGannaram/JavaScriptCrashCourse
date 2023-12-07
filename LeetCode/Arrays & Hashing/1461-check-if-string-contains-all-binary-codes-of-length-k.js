/**
    @title 1461. Check If a String Contains All Binary Codes of Size K
    @difficulty medium
    @url https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/

    @description
        Given a binary string s and an integer k.
        Return True if every binary code of length k is a substring of s. Otherwise, return False.

    @params	{string} s
    @params {number} k
    @return {boolean}
 */

var hasAllCodes = function (s, k) {
    let set = new Set();

    for (let i = 0; i < s.length - (k - 1); i++) {
        set.add(s.substring(i, i + k));
    }

    return set.size === Math.pow(2, k);
};

let s = "00110110",
    k = 2;

console.log(hasAllCodes(s, k));
