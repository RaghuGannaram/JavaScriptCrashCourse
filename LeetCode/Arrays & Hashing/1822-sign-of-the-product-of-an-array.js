/**
    @title 1822. Sign of the Product of an Array
    @difficulty Easy
    @url https://leetcode.com/problems/sign-of-the-product-of-an-array/

    @description
        There is a function signFunc(x) that returns:
            1 if x is positive.
            -1 if x is negative.
            0 if x is equal to 0.
            
        You are given an integer array nums. Let product be the product of all values in the array nums.
        Return signFunc(product).

    @param {number[]} nums
    @return {number}
 */

var arraySign = function (nums) {
    let res = 1;

    for (let n of nums) {
        if (n === 0) return 0;
        if (n < 0) res *= (-1);
    }

    return res;
}

let nums = [-1, -2, -3, -4, 3, 2, 1];

console.log(arraySign(nums));