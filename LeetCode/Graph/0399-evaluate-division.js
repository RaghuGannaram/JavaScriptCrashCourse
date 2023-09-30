/**
    @url https://leetcode.com/problems/evaluate-division/
    @title 399. Evaluate Division
    @difficulty Medium

    @description
        Equations are given in the format A / B = k, where A and B are variables represented as strings, and k is a real number (floating point number).
        Given some queries, return the answers. If the answer does not exist, return -1.0.
        The input is always valid. You may assume that evaluating the queries will result in no division by zero and there is no contradiction.

    @param  {string[][]} equations
    @param  {number[]} values
    @param  {string[][]} queries
    @return {number[]}
 */

var calcEquation = function (equations, values, queries) {
    let res = [], map = new Map();

    for (let i = 0, n, d; i < equations.length; i++) {
        [n, d] = equations[i];

        map.set(n, [...(map.get(n) ?? []), [d, values[i]]]);
        map.set(d, [...(map.get(d) ?? []), [n, 1 / values[i]]]);
    }

    for (let [n, d] of queries) {
        res.push(bfs(n, d));
    }

    return res;

    function bfs(start, end) {
        if (!map.has(start) || !map.has(end)) return -1;

        let queue = [], visited = new Set(), node, weight;

        queue.push([start, 1]);
        visited.add(start)

        while (queue.length) {
            [node, weight] = queue.shift();

            if (node == end) return weight;

            for (let [n, w] of map.get(node)) {
                if (!visited.has(n)) {
                    queue.push([n, w * weight]);
                    visited.add(n);
                }
            }
        }
        return -1;
    }
};

let equations = [["a", "b"], ["b", "c"]],
    values = [2.0, 3.0],
    queries = [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]];

console.log(calcEquation(equations, values, queries));  // [6.0, 0.5, -1.0, 1.0, -1.0]