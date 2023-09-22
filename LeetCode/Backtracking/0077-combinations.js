/**
    @url https://leetcode.com/problems/combinations/
    @title 77. Combinations
    @difficulty Medium

    @description
        Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].
        You may return the answer in any order.

    @param {number} n
    @param {number} k
    @return {number[][]}
 */

var combine = function (n, k) {
    let res = [];

    backtrack(1, []);

    return res;

    function backtrack(num, cur) {
        if (cur.length === k) {
            res.push([...cur]);
            return;
        }

        for (let i = num; i <= n; i++) {
            cur.push(i);
            backtrack(i + 1, cur)
            cur.pop();
        }
    }
};

let n = 4, k = 2;

console.log(combine(n, k)); // [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]