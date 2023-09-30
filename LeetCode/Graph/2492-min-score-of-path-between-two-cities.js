/**
    @url https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/
    @title 2492. Minimum Score of a Path Between Two Cities
    @difficulty Medium

    @description
        You are given a positive integer n representing n cities numbered from 1 to n. 
        You are also given a 2D array roads where roads[i] = [ai, bi, distancei] indicates that there is a bidirectional road between cities ai and bi with a distance equal to distancei. 
        The cities graph is not necessarily connected.
        The score of a path between two cities is defined as the minimum distance of a road in this path.
        Return the minimum possible score of a path between cities 1 and n.

    @param {number} n
    @param {number[][]} roards
    @returns {number}
 */

var minScore = function (n, roads) {
    let res = Number.MAX_SAFE_INTEGER, visited = new Set(), graph = new Map();

    for (const [s, d, p] of roads) {
        if (!graph.has(s)) graph.set(s, []);
        if (!graph.has(d)) graph.set(d, []);
        graph.get(s).push([d, p]);
        graph.get(d).push([s, p]);
    }

    dfs(1);

    return res;

    function dfs(i) {
        if (visited.has(i)) return;
        visited.add(i);

        for (let [d, p] of graph.get(i)) {
            res = Math.min(res, p);
            dfs(d);
        }
    }
};

let n = 4, roads = [[1,2,9],[2,3,6],[2,4,5],[1,4,7]];

console.log(minScore(n, roads));    // 5