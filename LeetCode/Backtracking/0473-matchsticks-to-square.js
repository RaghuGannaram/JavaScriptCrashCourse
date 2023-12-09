/**
    @title 473. Matchsticks to Square
    @difficulty Medium
    @url https://leetcode.com/problems/matchsticks-to-square/

    @description
        You are given an integer array matchsticks where matchsticks[i] is the length of the ith matchstick. 
        You want to use all the matchsticks to make one square. 
        You should not break any stick, but you can link them up, and each matchstick must be used exactly one time.

        Return true if you can make this square and false otherwise.

    @param {number[]} matchsticks
    @return {boolean}
 */

var makesquare = function (matchsticks) {
    const l = matchsticks.length,
        sides = new Array(4).fill(0),
        sum = matchsticks.reduce((acc, cur) => acc + cur, 0);

    if (sum % 4 !== 0) return false;

    const side = sum / 4;

    matchsticks.sort((a, b) => b - a);

    return backtrack(0);

    function backtrack(i) {
        if (i === l) return true;

        for (let j = 0; j < 4; j++) {
            if (sides[j] + matchsticks[i] <= side) {
                sides[j] += matchsticks[i];
                if (backtrack(i + 1)) return true;
                sides[j] -= matchsticks[i];
            }
        }

        return false;
    }
};

let matchsticks = [1, 1, 2, 2, 2];

console.log(makesquare(matchsticks)); // true