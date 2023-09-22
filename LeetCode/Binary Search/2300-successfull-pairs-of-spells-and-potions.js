/**
    @url https://leetcode.com/problems/successful-pairs-of-spells-and-potions/
    @title 2300. Successful Pairs of Spells and Potions
    @difficulty Medium

    @description    
        You are given two sorted arrays: spells and potions, where spells[i] is the amount of spell[i]th spell and potions[j] is the amount of the jth potion. You have a total of k units of magic power.
        To make a potion, you need to use exactly one spell and one potion such that their total magic power is k. The number of available spells and potions are both greater than or equal to k.
        Return the maximum number of potions you can make. Since the answer may be larger than 32-bit integer, return it modulo 109 + 7.

    @param {number[]} spells
    @param {number[]} potions
    @param {number} k
    @return {number}
 */

var successfulPairs = function (spells, potions, success) {
    potions.sort((a, b) => a - b);

    let l, r, m, t, res = [];

    for (let s of spells) {
        l = 0;
        r = potions.length - 1;
        t = potions.length;

        while (l <= r) {
            m = Math.floor((l + r) / 2);

            if (s * potions[m] < success) {
                l = m + 1;
            } else {
                t = m;
                r = m - 1;
            }

        }

        res.push(potions.length - t);
    }

    return res;
};

let spells = [2, 5, 3], potions = [2, 4, 1], k = 6;

console.log(successfulPairs(spells, potions, k));