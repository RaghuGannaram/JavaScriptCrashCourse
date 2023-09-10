/**
    @url https://leetcode.com/problems/naming-a-company/
    @title 2306. Naming a Company
    @difficulty Hard

    @description
            You are given an array of strings ideas that represents a list of names to be used in the process of naming a company. 
            The process of naming a company is as follows:
            Choose 2 distinct names from ideas, call them ideaA and ideaB.Swap the first letters of ideaA and ideaB with each other.
            If both of the new names are not found in the original ideas, then the name ideaA ideaB (the concatenation of ideaA and ideaB, separated by a space) is a valid company name.
            Otherwise, it is not a valid name.
            Return the number of distinct valid names for the company.
    
    @param {string[]} ideas
    @return {number}
 */

var distinctNames = function (ideas) {
    let res = 0, map = new Map();

    for (let name of ideas) {
        map.set(name[0], (map.get(name[0]) ?? new Set()).add(name.slice(1)))
    }

    let arr = Array.from(map);

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1, duplicates; j < arr.length; j++) {
            duplicates = 0;
            for (let word of arr[i][1]) {
                if (arr[j][1].has(word)) duplicates++;
            }
            res += 2 * (arr[i][1].size - duplicates) * (arr[j][1].size - duplicates);
        }
    }

    return res;
};

let ideas = ["coffee", "donuts", "time", "toffee"];

console.log(distinctNames(ideas));