/**
    @title 122. Best Time to Buy and Sell Stock II
    @difficulty easy
    @url https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

    @description
        You are given an array prices where prices[i] is the price of a given stock on the ith day.
        Find the maximum profit you can achieve. You may complete as many transactions as you like
        (i.e., buy one and sell one share of the stock multiple times).

        Note: You may not engage in multiple transactions simultaneously
        (i.e., you must sell the stock before you buy again).

    @param {number[]} prices
    @return {number}
 */

var maxProfit = function (prices) {
    let profit = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i] < prices[i + 1]) {
            profit += prices[i + 1] - prices[i];
        }
    }

    return profit;
};

let input = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(input));
