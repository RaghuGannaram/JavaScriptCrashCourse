/**
    @title  91. Decode Ways
    @difficulty Medium
    @url https://leetcode.com/problems/decode-ways/

    @description
        A message containing letters from A-Z is being encoded to numbers using the following mapping:
        'A' -> 1
        'B' -> 2
        ...
        'Z' -> 26
        Given a non-empty string containing only digits, determine the total number of ways to decode it.

    @param {string} s
    @return {number}
 */

var numDecodings = function (s) {
    if (s[0] === "0") return 0;

    let dp = new Array(s.length).fill(0);

    dp[0] = 1;

    for (let pair, i = 1; i < s.length; i++) {
        if (s[i] !== "0") {
            dp[i] += dp[i - 1];
        }

        pair = parseInt(s.slice(i - 1, i + 1));
        if (10 <= pair && pair <= 26) {
            dp[i] += dp[i - 2] ?? 1;
        }
    }

    return dp.at(-1);
};
