/**
    @title 76. Minimum Window Substring
    @difficulty Hard
    @url https://leetcode.com/problems/minimum-window-substring/

    @description
        Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
        The testcases will be generated such that the answer is unique.
        A substring is a contiguous sequence of characters within the string.

    @param {string} s
    @param {string} t
    @return {string}
 */

var minWindow = function (s, t) {
    let l = 0,
        r = 0,
        start = 0,
        map = {},
        count = t.length,
        min = Number.MAX_SAFE_INTEGER;

    t.split("").forEach((c) => (map[c] = (map[c] ?? 0) + 1));

    while (r < s.length) {
        if (map[s[r]] > 0) count--;
        map[s[r]]--;
        r++;

        while (count === 0) {
            if (r - l < min) {
                min = r - l;
                start = l;
            }

            if (map[s[l]] === 0) count++;
            map[s[l]]++;
            l++;
        }
    }

    return min === Number.MAX_SAFE_INTEGER ? "" : s.slice(start, start + min);
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
