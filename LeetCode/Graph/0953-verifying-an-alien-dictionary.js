/**
    @url https://leetcode.com/problems/verifying-an-alien-dictionary/
    @title 953. Verifying an Alien Dictionary
    @difficulty Easy

    @description
        In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order.
        The order of the alphabet is some permutation of lowercase letters.
        Given a sequence of words written in the alien language, and the order of the alphabet,
        return true if and only if the given words are sorted lexicographicaly in this alien language.

    @param  {string[]} words
    @param  {string}   order
    @return {boolean}
 */

var isAlienSorted = function (words, order) {
    let map = new Map();

    for (let i = 0; i < order.length; i++) {
        map.set(order[i], i);
    }

    for (let i = 0; i < words.length - 1; i++) {
        let word1 = words[i];
        let word2 = words[i + 1];

        for (let j = 0; j < word1.length; j++) {
            if (word1[j] !== word2[j]) {
                if (map.get(word1[j]) > map.get(word2[j])) return false;
                break;
            }

            if (j === word2.length - 1 && word1.length > word2.length) return false;
        }
    }

    return true;
};

let words = ["hello", "leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz";

console.log(isAlienSorted(words, order));   // true