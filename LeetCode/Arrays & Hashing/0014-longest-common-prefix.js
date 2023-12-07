/**
    @title 14. Longest Common Prefix
    @difficulty easy
    @url https://leetcode.com/problems/longest-common-prefix/

    @description
        Write a function to find the longest common prefix string amongst an array of strings.
        If there is no common prefix, return an empty string "".

    @param {string[]} strs
    @return {string}
 */

var longestCommonPrefix1 = function (strs) {
    let res = "", test = strs[0];

    for (let i = 0; i < test.length; i++) {
        if (strs.every(str => str[i] === test[i])) res += test[i];
        else break;
    }

    return res;
};

var longestCommonPrefix2 = function (strs) {
    let i = 0, test = strs[0];

    while (true) {
        if (!strs.every(str => str[i] === test[i]) || !test[i]) break;
        i++
    }

    return test.slice(0, i);
};

let strs = ["flower", "flow", "flight"];

console.log(longestCommonPrefix1(strs));