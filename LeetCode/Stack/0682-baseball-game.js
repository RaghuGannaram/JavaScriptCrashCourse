/**
    @url https://leetcode.com/problems/baseball-game
    @title 682. Baseball Game
    @difficulty Easy

    @description
    You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.

    At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following:

    An integer x - Record a new score of x.
    
    "+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.

    "D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.

    "C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.

    Return the sum of all the scores on the record.

    @param {string[]} ops
    @return {number}
 */

var calPoints = function (ops) {
    let stack = [];
    for (let op of ops) {
        if (op == "C") {
            stack.pop();
        } else if (op == "D") {
            stack.push(stack.at(-1) * 2);
        } else if (op == "+") {
            stack.push(stack.at(-1) + stack.at(-2));
        } else {
            stack.push(Number(op));
        }
    }
    return stack.reduce((a, b) => a + b);
}

let ops = ["5", "2", "C", "D", "+"];

console.log(calPoints(ops));    // 30