/**
    @title 17. Letter Combinations of a Phone Number
    @difficulty Medium
    @url https://leetcode.com/problems/letter-combinations-of-a-phone-number/

    @description
        Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. 
        Return the answer in any order.
        A mapping of digit to letters (just like on the telephone buttons) is given below. 
        Note that 1 does not map to any letters.

    @param {string} digits
    @return {string[]}
 */

var letterCombinations1 = function (digits) {
    const res = [],
        map = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "pqrs",
            8: "tuv",
            9: "wxyz"
        }

    if (digits.length) backtrack(0, "");

    return res;

    function backtrack(i, cur) {
        if (i === digits.length) {
            res.push(cur);
            return;
        }

        for (let j = 0; j < map[digits[i]].length; j++) {
            backtrack(i + 1, cur + map[digits[i]][j]);
        }
    }
};

let digits = "23";

console.log(letterCombinations1(digits)); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]