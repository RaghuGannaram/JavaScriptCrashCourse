/**
    @url https://leetcode.com/problems/search-suggestions-system/
    @title 1268. Search Suggestions System
    @difficulty Medium

    @description
        Given an array of strings products and a string searchWord. We want to design a system that suggests at most three product names from products after each character of searchWord is typed.
        Suggested products should have common prefix with the searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.
        Return list of lists of the suggested products after each character of searchWord is typed.

    @param {string[]} products
    @param {string} searchWord
    @return {string[][]}
 */

var suggestedProducts = function (products, searchWord) {
    products.sort();

    let res = [], l = 0, r = products.length - 1;

    for (let i = 0; i < searchWord.length; i++) {

        while (l < products.length && searchWord[i] !== products[l][i]) {
            l++;
        }

        while (r >= 0 && searchWord[i] !== products[r][i]) {
            r--;
        }

        res.push(products.slice(l, Math.min(l + 3, r + 1)));
    }

    return res;
};

let products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"], searchWord = "mouse";

console.log(suggestedProducts(products, searchWord));