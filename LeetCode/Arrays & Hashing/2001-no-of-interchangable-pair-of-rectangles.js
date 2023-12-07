/**
    @title 2001. Number of Pairs of Interchangeable Rectangles
    @difficulty Medium
    @url https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/

    @description
        You are given n rectangles represented by a 0-indexed 2D integer array rectangles,
        where rectangles[i] = [widthi, heighti] denotes the width and height of the ith rectangle.
        Two rectangles i and j (i < j) are considered interchangeable if they have the same width-to-height ratio.
        More formally, two rectangles are interchangeable if widthi/heighti == widthj/heightj (using decimal division, not integer division).
        Return the number of pairs of interchangeable rectangles in rectangles.

    @param {number[][]} rectangles
    @return {number}
 */

// Solution 1: Brute Force
// Time: O(n^2) Space: O(1)
var interchangeableRectangles1 = function (rectangles) {
    let res = 0,
        arr = [];

    for (let rectangle of rectangles) {
        arr.push(rectangle[0] / rectangle[1]);
    }

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                res++;
            }
        }
    }

    return res;
};

// Solution 2: Hash Map
// Time: O(n) Space: O(n)
var interchangeableRectangles2 = function (rectangles) {
    let res = 0,
        map = new Map();

    for (let rectangle of rectangles) {
        map.set(rectangle[0] / rectangle[1], (map.get(rectangle[0] / rectangle[1]) ?? 0) + 1);
    }

    for (let count of map.values()) {
        res += count * ((count - 1) / 2);
    }

    return res;
};

let rectangles = [
    [4, 8],
    [3, 6],
    [10, 20],
    [15, 30],
];

console.log(interchangeableRectangles2(rectangles));
