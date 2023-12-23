/**
    @title 904. Fruit Into Baskets
    @difficulty Medium
    @url https://leetcode.com/problems/fruit-into-baskets/

    @description
        In a row of trees, the i-th tree produces fruit with type tree[i].
        You start at any tree of your choice, then repeatedly perform the following steps:
        Add one piece of fruit from this tree to your baskets.  If you cannot, stop.
        Move to the next tree to the right of the current tree.  If there is no tree to the right, stop.
        Note that you do not have any choice after the initial choice of starting tree:
        you must perform step 1, then step 2, then back to step 1, then step 2, and so on until you stop.
        You have two baskets, and each basket can carry any quantity of fruit,
        but you want each basket to only carry one type of fruit each.
        What is the total amount of fruit you can collect with this procedure?

    @param {number[]} tree
    @return {number}
 */

var totalFruit = function (fruits) {
    let res = 0,
        l = 0,
        r = 0,
        map = new Map();

    while (r < fruits.length) {
        map.set(fruits[r], (map.get(fruits[r]) ?? 0) + 1);

        while (map.size > 2) {
            if (map.get(fruits[l]) === 1) map.delete(fruits[l]);
            else map.set(fruits[l], map.get(fruits[l]) - 1);

            l++;
        }

        res = Math.max(res, r - l + 1);
        r++;
    }

    return res;
};

let fruits = [1, 1, 1, 2, 3, 2, 2];

console.log(totalFruit(fruits)); // 3
