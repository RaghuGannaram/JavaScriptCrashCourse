/** 
    @url https://leetcode.com/problems/guess-number-higher-or-lower/
    @title 374. Guess Number Higher or Lower
    @difficulty Easy

    @description
        We are playing the Guess Game. The game is as follows:
        I pick a number from 1 to n. You have to guess which number I picked.
        Every time you guess wrong, I'll tell you whether the number is higher or lower.
        You call a pre-defined API guess(int num) which returns 3 possible results (-1, 1, or 0):
        -1 : My number is lower
        1 : My number is higher
        0 : Congrats! You got it!

    @param {number} n
    @return {number}
 */

var guessNumber = function (n) {
    let l = 1, r = n, m, p;

    while (l <= r) {
        m = Math.floor((l + r) / 2);
        p = guess(m);

        if (p === 0) return m;

        if (p === 1) l = m + 1;
        else r = m - 1;
    }
};

let guess = function (num) {
    let pick = 6;

    if (num === pick) return 0;
    else if (num > pick) return -1;
    else return 1;
};

let n = 10;

console.log(guessNumber(n));