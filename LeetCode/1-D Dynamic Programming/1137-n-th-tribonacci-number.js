/**
    @title 1137. N-th Tribonacci Number
    @difficulty Easy
    @url https://leetcode.com/problems/n-th-tribonacci-number/

    @description
        The Tribonacci sequence Tn is defined as follows: 
        T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
        Given n, return the value of Tn.

    @param {number} n
    @return {number}
 */

var tribonacci = function (n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    let dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 1;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }

    return dp.at(-1);
};
