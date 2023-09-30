/**
    @url https://leetcode.com/problems/detonate-the-maximum-number-of-bombs/
    @title 2101. Detonate the Maximum Number of Bombs
    @difficulty Medium

    @description
        You are given an m x n grid where each cell can have one of three values:
        0 representing an empty cell,
        1 representing a bomb, or
        2 representing a barrier that blocks the movement of bombs.
        Bombs can only move up, down, left, or right if there is an empty cell in that direction.
        Given an m x n grid, return the maximum number of bombs that can be placed on the grid such that no bombs are blocked.
        Note that there can be multiple possible placements of bombs. Any correct placement of bombs is valid.

    @param  {number[][]} grid
    @return {number}
 */

var maximumDetonation = function (bombs) {
    let res = 0, l = bombs.length, map = new Map();

    for (let i = 0; i < l; i++) {
        for (let j = i + 1, d; j < l; j++) {
            let [x1, y1, r1] = bombs[i];
            let [x2, y2, r2] = bombs[j];

            d = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));

            if (d <= r1) map.set(i, [...(map.get(i) ?? []), j])
            if (d <= r2) map.set(j, [...(map.get(j) ?? []), i])
        }
    }

    for (let i = 0; i < l; i++) {
        res = Math.max(res, dfs(i, new Set()));
    }

    return res;

    function dfs(i, visited) {
        if (visited.has(i)) return;

        visited.add(i);

        if (map.get(i))
            for (let j of map.get(i)) {
                dfs(j, visited);
            }

        return visited.size;
    }
};

let bombs = [[0, 0, 2], [0, 0, 1], [1, 1, 2]];

console.log(maximumDetonation(bombs));  // 2