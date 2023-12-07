/**
    @title 118. Pascal's Triangle
    @difficulty easy
    @url https://leetcode.com/problems/pascals-triangle/
 
    @description
        Given an integer numRows, return the first numRows of Pascal's triangle.
        In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
        https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif

    @param {number} numRows
    @return {number[][]}
 */

var generate1 = function (numRows) {
    let res = [], current = [1];

    for (let i = 0; i < numRows; i++) {
        res.push(current);
        current = [1, ...next(current), 1];
    }

    return res;

    function next(arr) {
        let res = [];

        for (let i = 0; i < arr.length - 1; i++) {
            res.push(arr[i] + arr[i + 1]);
        }

        return res;
    }
};


var generate2 = function (numRows) {
    let res = [], current = [1];

    for (let i = 0; i < numRows; i++) {
        res.push(current);
        current = [1, ...current.slice(0, -1).map((n, i) => n + current[i + 1]), 1];
    }

    return res;
};

let input = 5;

console.log(generate1(input));
console.log(generate2(input));