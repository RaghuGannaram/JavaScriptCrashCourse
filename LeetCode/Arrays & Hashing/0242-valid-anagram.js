/**
 	@title 242. Valid Anagram
 	@difficulty easy
 	@url https://leetcode.com/problems/valid-anagram/

	@description
		Given two strings s and t, return true if t is an anagram of s, and false otherwise.
		Note: You may assume the string contains only lowercase alphabets.
		Follow up: What if the inputs contain unicode characters? How would you adapt your solution to such case?

	@param {string} s
	@param {string} t
	@return {boolean}
 */

var isAnagram1 = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    return s.split("").sort().join("") == t.split("").sort().join("");
};

var isAnagram2 = function (s, t) {
    if (s.length != t.length) {
        return false;
    }

    let sEntry = {},
        tEntry = {};

    for (let i = 0; i < s.length; i++) {
        sEntry[s.charAt(i)] = 1 + (sEntry[s.charAt(i)] ?? 0);
        tEntry[t.charAt(i)] = 1 + (tEntry[t.charAt(i)] ?? 0);
    }
    for (let char in sEntry) {
        if (sEntry[char] != tEntry[char]) {
            return false;
        }
    }
    return true;
};

var isAnagram3 = function (s, t) {
    if (s.length != t.length) {
        return false;
    }

    let sMap = new Map(),
        tMap = new Map();

    for (let i = 0; i < s.length; i++) {
        sMap.set(s[i], (sMap.get(s[i]) ?? 0) + 1);
        tMap.set(t[i], (tMap.get(t[i]) ?? 0) + 1);
    }
    for (let [char, count] of sMap) if (tMap.get(char) !== count) return false;
    return true;
};

var isAnagram4 = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let sMap = {},
        tMap = {};

    for (let i = 0; i < s.length; i++) {
        if (sMap.hasOwnProperty(s[i])) {
            sMap[s[i]]++;
        } else {
            sMap[s[i]] = 1;
        }
        if (tMap.hasOwnProperty(t[i])) {
            tMap[t[i]]++;
        } else {
            tMap[t[i]] = 1;
        }
    }
    for (let k in sMap) {
        if (sMap[k] !== tMap[k]) {
            return false;
        }
    }
    return true;
};

var isAnagram5 = function (s, t) {
    if (s.length !== t.length) return false;

    let sMap = new Map(),
        tMap = new Map();

    for (let i = 0; i < s.length; i++) {
        sMap.set(s[i], (sMap.get(s[i]) ?? 0) + 1);
        tMap.set(t[i], (tMap.get(t[i]) ?? 0) + 1);
    }

    for (let ch of s) {
        if (sMap.get(ch) !== tMap.get(ch)) return false;
    }

    return true;
};

var isAnagram6 = function (s, t) {
    let map = new Map();

    for (let ch of s) {
        map.set(ch, (map.get(ch) ?? 0) + 1);
    }

    for (let ch of t) {
        console.log(map);
        if (map.has(ch)) {
            if (map.get(ch) === 1) map.delete(ch);
            else map.set(ch, map.get(ch) - 1);
        } else {
            return false;
        }
        console.log(map);
    }

    return map.size === 0;
};

console.log(isAnagram6("rat", "tzr"));
