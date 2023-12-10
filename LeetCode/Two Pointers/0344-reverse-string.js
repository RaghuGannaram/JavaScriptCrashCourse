/**
    @title 344. Reverse String
    @difficulty Easy
    @url https://leetcode.com/problems/reverse-string/

    @description
        Write a function that reverses a string. The input string is given as an array of characters s.
        Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
        
    @param {character[]} s
    @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function (s) {
    let [l, r] = [0, s.length - 1];

    while (l < r) {
        [s[l], s[r]] = [s[r], s[l]];
        l++;
        r--;
    }
};

let s = ["h", "e", "l", "l", "o"];

reverseString(s);   // ["o","l","l","e","h"]