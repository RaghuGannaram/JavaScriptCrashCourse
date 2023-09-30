/**
    @url    https://leetcode.com/problems/asteroid-collision
    @title  735. Asteroid Collision
    @difficulty Medium

    @description
        We are given an array asteroids of integers representing asteroids in a row.
        For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left).
        Each asteroid moves at the same speed.
        Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode.
        Two asteroids moving in the same direction will never meet.

    @param {number[]} asteroids
    @return {number[]}
 */

var asteroidCollision = function (asteroids) {
    let stack = [];

    outer: for (let rock of asteroids) {
        if (rock > 0) {
            stack.push(rock);
            continue outer;
        }
        while (stack.length && stack.at(-1) > 0) {
            if (stack.at(-1) === Math.abs(rock)) {
                stack.pop();
                continue outer;
            }

            if (stack.at(-1) > Math.abs(rock)) {
                continue outer;
            }

            stack.pop();

        }
        stack.push(rock);
    }

    return stack;
};

let asteroids = [5, 10, -5];

console.log(asteroidCollision(asteroids));   // [5, 10]