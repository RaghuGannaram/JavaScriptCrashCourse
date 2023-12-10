/**
    @title 1768. Merge Strings Alternately
    @difficulty Easy
    @url https://leetcode.com/problems/merge-strings-alternately/

    @description 
        You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1.
        If a string is longer than the other, append the additional letters onto the end of the merged string.
        Return the merged string.

    @param {string} word1
    @param {string} word2
    @return {string}
 */

var mergeAlternately1 = function (word1, word2) {
    const result = [],
        arr1 = word1.split(""),
        arr2 = word2.split("");

    while (arr1.length && arr2.length) {
        result.push(arr1.shift());
        result.push(arr2.shift());
    }

    return [...result, ...arr1, ...arr2].join("");
};

var mergeAlternately2 = function (word1, word2) {
    const result = [];

    for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
        result.push(word1[i] ?? "");
        result.push(word2[i] ?? "");
    }

    return result.join("");
};

var mergeAlternately3 = function (word1, word2) {
    const result = [],
        l = Math.min(word1.length, word2.length);

    for (let i = 0; i < l; i++) {
        result.push(word1[i]);
        result.push(word2[i]);
    }

    if (word1.length < word2.length) {
        return result.join("").concat(word2.slice(l));
    } else if (word2.length < word1.length) {
        return result.join("").concat(word1.slice(l));
    } else {
        return result.join("");
    }
};

var mergeAlternately4 = function (word1, word2) {
    let res = "",
        i = 0,
        l = Math.min(word1.length, word2.length);

    while (i < l) {
        res += word1[i] + word2[i];
        i++;
    }

    return res + word1.slice(i) + word2.slice(i);
};

let word1 = "abc",
    word2 = "pqrst";

console.log(mergeAlternately1(word1, word2));
