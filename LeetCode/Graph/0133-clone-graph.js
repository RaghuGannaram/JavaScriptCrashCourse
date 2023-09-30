/**
    @url https://leetcode.com/problems/clone-graph/
    @title 133. Clone Graph
    @difficulty Medium

    @description
        Given a reference of a node in a connected undirected graph.
        Return a deep copy (clone) of the graph.
        Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.
        class Node {
            public int val;
            public List<Node> neighbors;
        }

    @param  {Node} node
    @return {Node}
 */

var cloneGraph = function (node) {
    if (!node) return node;

    let visited = new Map();

    return clone(node);

    function clone(node) {
        if (visited.has(node)) return visited.get(node);

        let neoNode = new Node(node.val);
        visited.set(node, neoNode);

        for (let neighbor of node.neighbors) {
            neoNode.neighbors.push(clone(neighbor));
        }

        return neoNode;
    }
};

class Node {
    constructor(val, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

node1.neighbors.push(node2);
node1.neighbors.push(node4);

node2.neighbors.push(node1);
node2.neighbors.push(node3);

node3.neighbors.push(node2);
node3.neighbors.push(node4);

node4.neighbors.push(node1);
node4.neighbors.push(node3);

console.log(cloneGraph(node1));
// Node {
//     val: 1,
//     neighbors: [
//         Node { val: 2, neighbors: [Array] },
//         Node { val: 4, neighbors: [Array] }
//     ]

// Node {
//     val: 2,
//     neighbors: [
//         Node { val: 1, neighbors: [Array] },
//         Node { val: 3, neighbors: [Array] }
//     ]

// Node {
//     val: 3,
//     neighbors: [
//         Node { val: 2, neighbors: [Array] },
//         Node { val: 4, neighbors: [Array] }
//     ]

// Node {
//     val: 4,
//     neighbors: [
//         Node { val: 1, neighbors: [Array] },
//         Node { val: 3, neighbors: [Array] }
//     ]

console.log(cloneGraph(null));  // null
