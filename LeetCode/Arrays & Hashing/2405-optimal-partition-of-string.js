/**
    @title 2405. Optimal Partition of String
    @difficulty medium
    @url https://leetcode.com/problems/optimal-partition-of-string/

    @description
        Given a string s, partition s such that every substring of the partition is a palindrome.
        Return the minimum cuts needed for a palindrome partitioning of s.

    @params	{string} s
    @return {number}
 */

var partitionString = function (s) {
    let res = 0, substr = "";

    for (let i = 0; i < s.length; i++) {
        if (substr.includes(s[i])) {
            res++;
            substr = s[i];
        } else {
            substr += s[i];
        }
    }
    if (substr) res++;

    return res;
};

let input = "aabbc";

console.log(partitionString(input));