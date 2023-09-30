/**
    @url https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/
    @title 2477 Mininmun Fuel Cost to Report to the Capital
    @difficulty Medium

    @description
        There is a tree (i.e., a connected, undirected graph with no cycles) structure country network consisting of n cities numbered from 0 to n - 1 and exactly n - 1 roads. The capital city is city 0. 
        You are given a 2D integer array roads where roads[i] = [ai, bi] denotes that there exists a bidirectional road connecting cities ai and bi.
        There is a meeting for the representatives of each city. The meeting is in the capital city.
        There is a car in each city. You are given an integer seats that indicates the number of seats in each car.
        A representative can use the car in their city to travel or change the car and ride with another representative. The cost of traveling between two cities is one liter of fuel.
        Return the minimum number of liters of fuel to reach the capital city.

    @param {number[][]} roads
    @param {number} seats
    @return {number}
 */

var minimumFuelCost = function (roads, seats) {
    if (!roads.length) return 0;

    let fuel = 0, graph = new Map();

    for (let [s, d] of roads) {
        if (!graph.has(s)) graph.set(s, []);
        if (!graph.has(d)) graph.set(d, []);
        graph.get(s).push(d);
        graph.get(d).push(s);
    }

    dfs(0, -1);

    return fuel;

    function dfs(node, parent) {
        let passengers = 1, p;

        for (let child of graph.get(node)) {
            if (child !== parent) {
                p = dfs(child, node);
                passengers += p;
                fuel += Math.ceil(p / seats);
            }
        }

        return passengers;
    }
};

let roads = [[3, 1], [3, 2], [1, 0], [0, 4], [0, 5], [4, 6]], seats = 2;

console.log(minimumFuelCost(roads, seats));   // 7