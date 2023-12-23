/**
    @title 877. Stone Game
    @difficulty Medium  
    @url https://leetcode.com/problems/stone-game/

    @description
        Alex and Lee play a game with piles of stones.  There are an even number of piles arranged in a row, and each pile has a positive integer number of stones piles[i].
        The objective of the game is to end with the most stones.  The total number of stones is odd, so there are no ties.
        Alex and Lee take turns, with Alex starting first.  Each turn, a player takes the entire pile of stones from either the beginning or the end of the row.
        This continues until there are no more piles left, at which point the person with the most stones wins.
        Assuming Alex and Lee play optimally, return True if and only if Alex wins the game.

    @param {number[]} piles
    @return {boolean}
 */

var stoneGame1 = function (piles) {
    return true;
};

var stoneGame2 = function (piles) {
    let dp = new Map(),
        aliceMax;

    aliceMax = dfs(0, piles.length - 1);

    return aliceMax > piles.reduce((acc, cur) => acc + cur, 0) / 2;

    function dfs(l, r) {
        if (l > r) return 0;

        if (dp.has(`${l}-${r}`)) return dp.get(`${l}-${r}`);

        let max,
            left,
            right,
            aliceTurn = (r + 1 - l) % 2 === 0;

        left = aliceTurn ? piles[l] : 0;
        right = aliceTurn ? piles[r] : 0;

        max = Math.max(left + dfs(l + 1, r), dfs(l, r - 1) + right);

        dp.set(`${l}-${r}`, max);

        return max;
    }
};
