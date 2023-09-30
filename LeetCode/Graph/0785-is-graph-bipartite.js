/**
    @url https://leetcode.com/problems/is-graph-bipartite/
    @title 785. Is Graph Bipartite?
    @difficulty Medium

    @description
        Given an undirected graph, return true if and only if it is bipartite.
        Recall that a graph is bipartite if we can split its set of nodes into two independent subsets A and B, such that every edge in the graph has one node in A and another node in B.
        The graph is given in the following form: graph[i] is a list of indexes j for which the edge between nodes i and j exists.
        Each node is an integer between 0 and graph.length - 1. There are no self edges or parallel edges: graph[i] does not contain i, and it doesn't contain any element twice.

    @param  {number[][]} graph
    @return {boolean}
 */

var isBipartite = function (graph) {
    let colors = new Map();

    for (let i = 0; i < graph.length; i++) {
        if (!colors.has(i) && !dfs(i, 0)) return false;
    }

    return true;

    function dfs(node, color) {
        if (colors.has(node)) return colors.get(node) == color;

        colors.set(node, color);

        for (let neighbor of graph[node]) {
            if (!dfs(neighbor, color ^ 1)) return false;
        }

        return true;
    }
};

let graph = [[1, 3], [0, 2], [1, 3], [0, 2]];

console.log(isBipartite(graph));    // true

//implement the isBipartite function using bfs and green blue colors

var isBipartite = function (graph) {
    let colors = new Map();

    for (let i = 0; i < graph.length; i++) {
        if (!colors.has(i) && !bfs(i)) return false;
    }

    return true;

    function bfs(node) {
        let queue = [node], color = 0;

        while (queue.length) {
            let size = queue.length;

            while (size--) {
                node = queue.shift();

                if (colors.has(node)) {
                    if (colors.get(node) != color) return false;
                    continue;
                }

                colors.set(node, color);

                for (let neighbor of graph[node]) {
                    queue.push(neighbor);
                }
            }

            color ^= 1;
        }

        return true;
    }
};