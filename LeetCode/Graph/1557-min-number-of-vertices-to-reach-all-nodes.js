/**
    @url https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/
    @title 1557. Minimum Number of Vertices to Reach All Nodes
    @difficulty Medium

    @description
        Given a directed acyclic graph, with n vertices numbered from 0 to n-1, and an array edges where edges[i] = [fromi, toi] represents a directed edge from node fromi to node toi.
        Find the smallest set of vertices from which all nodes in the graph are reachable. It's guaranteed that a unique solution exists.
        Notice that you can return the vertices in any order.

    @param {number} n
    @param {number[][]} edges
    @return {number[]}
 */

var findSmallestSetOfVertices = function (n, edges) {
    let set = new Set(edges.map(x => x[1])), res = [];

    for (let i = 0; i < n; i++) {
        if (!set.has(i)) res.push(i);
    }

    return res;
};

let n = 6, edges = [[0, 1], [0, 2], [2, 5], [3, 4], [4, 2]];

console.log(findSmallestSetOfVertices(n, edges));  // [0,3]