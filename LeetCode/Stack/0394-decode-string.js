/**
    @url https://leetcode.com/problems/decode-string
    @title 394. Decode String
    @difficulty Medium

    @description
        Given an encoded string, return its decoded string.
        The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.
        Note that k is guaranteed to be a positive integer.
        You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.
        Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k.
        For example, there won't be input like 3a or 2[4].

    @param {string} s
    @return {string}
 */
var decodeString = function (s) {
    let str, i = 0, stack = [];

    while (i < s.length) {
        str = "";
        if (s[i] === "]") {
            while (stack.length && stack.at(-1) !== "[") {
                str = stack.pop() + str;
            }
            stack.pop();
            str = str.repeat(Number(stack.pop()));
            stack.push(str);
            i++;
            continue;
        }
        while (/[0-9]/.test(s[i])) {
            str += s[i];
            i++;
        }
        if (str) {
            stack.push(str);
        } else {
            stack.push(s[i]);
            i++;
        }
    }

    return stack.join("");
};

let s = "3[a]2[bc]";

console.log(decodeString(s));   // "aaabcbc"