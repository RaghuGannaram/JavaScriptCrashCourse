/**
    @title  1239. Maximum Length of a Concatenated String with Unique Characters
    @difficulty Medium
    @url    https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/

    @description
        Given an array of strings arr. String s is a concatenation of a sub-sequence of arr which have unique characters.
        Return the maximum possible length of s.

    @param {string[]} arr
    @return {number}
 */

var maxLength = function (arr) {
    let res = 0;

    backtrack(0, "");

    return res;

    function backtrack(i, cur) {
        if (i === arr.length) {
            res = Math.max(res, cur.length);
            return;
        }

        backtrack(i + 1, cur);

        if ((cur + arr[i]).hasUniqueChars()) {
            backtrack(i + 1, cur + arr[i]);
        }
    }
};

String.prototype.hasUniqueChars = function () {
    let str = this;

    return str.length === new Set(str).size;
};

let arr = ["un", "iq", "ue"];

console.log(maxLength(arr)); // 4