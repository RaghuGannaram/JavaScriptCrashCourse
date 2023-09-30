/**
    @url https://leetcode.com/problems/validate-stack-sequences
    @title 946. Validate Stack Sequences
    @difficulty Medium

    @description
        Given two sequences pushed and popped with distinct values, return true if and only if this could have been the result of a sequence of push and pop operations on an initially empty stack.

    @param {number[]} pushed
    @param {number[]} popped
    @return {boolean}
 */

var validateStackSequences = function (pushed, popped) {
    let stack = [], i = 0;

    for (let n of pushed) {
        stack.push(n);

        while (stack.length && stack.at(-1) === popped[i]) {
            stack.pop();
            i++;
        }
    }

    return stack.length === 0;
};

let pushed = [1, 2, 3, 4, 5], popped = [4, 5, 3, 2, 1];

console.log(validateStackSequences(pushed, popped));   // true