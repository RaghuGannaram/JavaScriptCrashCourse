/**
    @url https://leetcode.com/problems/permutations-ii/
    @title 47. Permutations II
    @difficulty Medium

    @description
        Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

    @param {number[]} nums
    @return {number[][]}
 */

var permuteUnique = function (nums) {
    let res = [], set = new Set(), visited = new Set();

    nums.sort((a, b) => a - b);

    backtrack(0, []);

    return res;

    function backtrack(i, cur) {
        if (cur.length === nums.length) {
            if (!set.has(cur.join("-"))) {
                set.add(cur.join("-"));
                res.push([...cur]);
            }
            return;
        }

        for (let j = 0; j < nums.length; j++) {
            if (!visited.has(j)) {
                visited.add(j);
                cur.push(nums[j]);
                backtrack(i + 1, cur);
                cur.pop();
                visited.delete(j);
            }
        }
    }
};

let nums = [1, 1, 2];

console.log(permuteUnique(nums)); // [[1,1,2],[1,2,1],[2,1,1]]