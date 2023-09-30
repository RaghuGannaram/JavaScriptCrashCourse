/**
    @url https://leetcode.com/problems/removing-stars-from-a-string/
    @title 2390. Removing Stars From a String
    @difficulty Medium

    @description
        Given a string s containing only the characters '*' and lowercase English letters, remove all the stars from the string and return it.

    @param {string} s
    @return {string}
 */

var removeStars1 = function (s) {
    let stack = [];

    for (let ch of s) {
        (ch === "*") ? stack.pop() : stack.push(ch);
    }

    return stack.join("");
}

var removeStars2 = function (s) {
    let res = "", r = s.length - 1, count = 0;

    while (0 <= r) {
        if (s[r] === "*") {
            count++;
        } else {
            if (count === 0) {
                res = s[r] + res;
            } else {
                count--;
            }
        }
        r--;
    }

    return res;
};

let s = "ab**cd";

console.log(removeStars1(s));   // "cd"