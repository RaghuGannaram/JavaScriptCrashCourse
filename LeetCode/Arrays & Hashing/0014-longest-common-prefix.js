/**
    @url https://leetcode.com/problems/longest-common-prefix/
    @title 14. Longest Common Prefix
    @difficulty easy

    @description
        Write a function to find the longest common prefix string amongst an array of strings.
        If there is no common prefix, return an empty string "".

    @param {string[]} strs
    @return {string}
 */

var longestCommonPrefix = function (strs) {
    let res = "", test = strs[0];

    for (let i = 0; i < test.length; i++) {
        if (strs.every(str => str[i] === test[i])) res += test[i];
        else break;
    }

    return res;
};

let strs = ["flower", "flow", "flight"];

console.log(longestCommonPrefix(strs));