/*

a---b---g---|
|   |       |
|   h       |
|   |       |
c---d---e   |
    |       |
    f-------i



*/

const unWeightedUndirectedGraph = {
	a: ["b", "c"],
	b: ["a", "g", "h"],
	c: ["a", "d"],
	d: ["c", "e", "f", "h"],
	e: ["d"],
	f: ["d", "i"],
	g: ["b", "i"],
	h: ["b", "d"],
	i: ["f", "g"],
};

//DFS for unWeightedUndirectedGraph;

function dfsTraversal(graph, node) {
	let current,
		visited = [],
		stack = [],
		result = [];

	stack.push(node);

	while (stack.length > 0) {
		current = stack.pop();
		visited.push(current);
		if (!result.includes(current)) result.push(current);
		for (let next of graph[current]) {
			if (!visited.includes(next)) stack.push(next);
		}
	}

	return result;
}

function bfsTraversal(graph, node) {
	let current,
		visited = [],
		queue = [],
		result = [];

	queue.push(node);

	while (queue.length > 0) {
		current = queue.shift();
		visited.push(current);
		if (!result.includes(current)) result.push(current);
		for (let next of graph[current]) {
			if (!visited.includes(next)) queue.push(next);
		}
	}

    return result;
}

console.log(bfsTraversal(unWeightedUndirectedGraph, "a"));
