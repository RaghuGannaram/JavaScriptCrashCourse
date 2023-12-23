/**
    @url https://leetcode.com/problems/arranging-coins/
    @title 441. Arranging Coins
    @difficulty Easy

    @description
        You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.
        Given n, find the total number of full staircase rows that can be formed.
        n is a non-negative integer and fits within the range of a 32-bit signed integer.

    @param {number} n
    @return {number}
 */

var arrangeCoins1 = function (n) {
    let row = 1;

    while (n >= row) {
        n = n - row;
        row++;
    }

    return row - 1;
};

var arrangeCoins2 = function (n) {
    let l = 0,
        r = n,
        m,
        acc;

    while (l <= r) {
        m = Math.floor((l + r) / 2);
        acc = (m * (m + 1)) / 2;

        if (acc === n) return m;

        if (acc < n) l = m + 1;
        else r = m - 1;
    }

    return r;
};

var arrangeCoins3 = function (n) {
    let l = 1,
        r = Math.floor((Math.sqrt(8 * n + 1) - 1) / 2),
        m,
        cur;

    while (l <= r) {
        m = Math.floor((l + r) / 2);
        cur = (m * (m + 1)) / 2;
        if (cur === n) return m;

        cur < n ? (l = m + 1) : (r = m - 1);
    }

    return r;
};

var arrangeCoins4 = function (n) {
    let l = 1,
        r = Math.floor((Math.sqrt(8 * n + 1) - 1) / 2),
        m,
        cur;

    while (l <= r) {
        m = Math.floor((l + r) / 2);
        cur = (m * (m + 1)) / 2;

        if (cur === n) return m;

        cur < n ? (l = m + 1) : (r = m - 1);
    }

    return l - 1;
};

let n = 8;

console.log(arrangeCoins1(n));
