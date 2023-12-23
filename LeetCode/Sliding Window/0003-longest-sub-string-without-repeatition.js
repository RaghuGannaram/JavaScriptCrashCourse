/**
 	@title 3. Longest Substring Without Repeating Characters
 	@difficulty Medium
 	@url https://leetcode.com/problems/longest-substring-without-repeating-characters/

	@description
		Given a string, find the length of the longest substring without repeating characters.
		
	@params {string} s
	@return {number}
 */

var lengthOfLongestSubstring1 = function (s) {
    let res = 0,
        set = new Set(),
        l = 0,
        r = 0;

    while (r < s.length) {
        while (set.has(s[r])) {
            set.delete(s[l]);
            l++;
        }
        set.add(s[r]);
        res = Math.max(res, set.size);
        r++;
    }

    return res;
};

var lengthOfLongestSubstring2 = function (s) {
    let res = 0,
        r = 0,
        str = "";

    while (r < s.length) {
        if (str.includes(s[r])) {
            str = str.slice(str.indexOf(s[r]) + 1);
        }
        str = str + s[r];
        res = Math.max(res, str.length);
        r++;
    }
    return res;
};

var lengthOfLongestSubstring3 = function (s) {
    let res = 0,
        arr = [];

    for (let ch of s) {
        while (arr.includes(ch)) {
            arr.shift();
        }
        arr.push(ch);
        res = Math.max(res, arr.length);
    }

    return res;
};

let s = "abcabcbb";

console.log(lengthOfLongestSubstring1(s)); // 3
