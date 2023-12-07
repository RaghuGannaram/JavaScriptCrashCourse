/**
    @title 187. Repeated DNA Sequences
    @difficulty medium
    @url https://leetcode.com/problems/repeated-dna-sequences/

    @description
        The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.
        For example, "ACGAATTCCG" is a DNA sequence.
        When studying DNA, it is useful to identify repeated sequences within the DNA.
        Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.
        You may return the answer in any order.

    @param {string} s
    @return {string[]}
 */

var findRepeatedDnaSequences = function (s) {
    let set = new Set(),
        result = new Set(),
        window = "";

    for (let i = 0; i <= s.length - 10; i++) {
        window = s.slice(i, i + 10);
        if (set.has(window)) {
            result.add(window);
        } else {
            set.add(window);
        }
    }

    return [...result];
};

let s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";

console.log(findRepeatedDnaSequences(s));
