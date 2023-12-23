/**
    @title 121. Best Time to Buy and Sell Stock
    @difficulty Easy
    @url https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

    @description  Say you have an array for which the ith element is the price of a given stock on day i.
                  If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock),
                  design an algorithm to find the maximum profit.
                  Note that you cannot sell a stock before you buy one.


    @param {number[]} prices
    @return {number}
 */

var maxProfit1 = function (prices) {
    let l = 0,
        r = 1,
        res = 0;

    while (r < prices.length) {
        if (prices[r] > prices[l]) {
            res = Math.max(res, prices[r] - prices[l]);
        } else {
            l = r;
        }
        r++;
    }
    return res;
};

var maxProfit2 = function (prices) {
    let l = 0,
        r = 0,
        res = 0,
        cur;

    while (r < prices.length) {
        cur = prices[r] - prices[l];

        if (cur > 0) {
            if (cur > res) res = cur;
        } else l = r;

        r++;
    }

    return res;
};

let prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit1(prices));
