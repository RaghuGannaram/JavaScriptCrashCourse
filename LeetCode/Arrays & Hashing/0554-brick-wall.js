/**
    @title 554. Brick Wall
    @difficulty medium
    @url https://leetcode.com/problems/brick-wall/

    @description
        There is a rectangular brick wall in front of you with n rows of bricks.
        The ith row has some number of bricks each of the same height (i.e., one unit) but they can be of different widths.
        The total width of each row is the same.
        Draw a vertical line from the top to the bottom and cross the least bricks.
        If your line goes through the edge of a brick, then the brick is not considered as crossed.

        You cannot draw a line just along one of the two vertical edges of the wall, in which case the line will obviously cross no bricks.

        Given the 2D array wall that contains the information about the wall,
        return the minimum number of crossed bricks after drawing such a vertical line.

    @params	{number[][]} wall
    @return {number}
 */

var leastBricks = function (wall) {
    let map = new Map();

    for (let row of wall) {
        for (let sum = 0, i = 0; i < row.length - 1; i++) {
            sum += row[i];
            map.set(sum, (map.get(sum) ?? 0) + 1);
        }
    }

    return wall.length - Math.max(0, ...Array.from(map, (x) => x[1]));
};

let input = [
    [1, 2, 2, 1],
    [3, 1, 2],
    [1, 3, 2],
    [2, 4],
    [3, 1, 2],
    [1, 3, 1, 1],
];

console.log(leastBricks(input));
