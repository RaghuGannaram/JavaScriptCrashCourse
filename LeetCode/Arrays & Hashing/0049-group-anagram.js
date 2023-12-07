/**
    @title 49. Group Anagrams
    @difficulty medium
    @url https://leetcode.com/problems/group-anagrams/

	@description
		Given an array of strings strs, group the anagrams together. You can return the answer in any order.
		An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

	@param {string[]} strs
	@return {string[][]}
 */

const CODES = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
};

function groupAnagrams1(words) {
    const map = Object.create(null);
    for (const word of words) {
        const hash = hashWord(word);
        if (!(hash in map)) {
            map[hash] = [];
        }
        map[hash].push(word);
    }

    const groups = [];
    for (const key in map) {
        groups.push(map[key]);
    }
    console.log(map);
    return groups;
}

function hashWord(word) {
    const hash = new Array(26).fill(0);
    for (const ch of word) {
        ++hash[CODES[ch]];
    }
    return hash.toString();
}

var groupAnagrams2 = function (strs) {
    const result = [];
    const map = new Map();

    for (let i = 0; i < strs.length; i++) {
        const sorted = strs[i].split("").sort().join("");
        if (map.has(sorted)) {
            map.get(sorted).push(strs[i]);
        } else {
            map.set(sorted, [strs[i]]);
        }
    }
    for (let [key, value] of map) {
        result.push(value);
    }
    return result;
};

var groupAnagrams3 = function (strs) {
    const map = new Map(),
        res = [];

    for (let sorted, i = 0; i < strs.length; i++) {
        sorted = strs[i].split("").sort().join("");
        if (map.has(sorted)) map.get(sorted).push(strs[i]);
        else map.set(sorted, [strs[i]]);
    }

    for (let value of map.values()) {
        res.push(value);
    }

    return res;
};

var groupAnagrams4 = function (strs) {
    const map = new Map();

    for (let sorted, i = 0; i < strs.length; i++) {
        sorted = strs[i].split("").sort().join("");

        map.set(sorted, [...(map.get(sorted) ?? []), strs[i]]);
    }
    return Array.from(map, ([key, value]) => value);
};

console.log(groupAnagrams4(["eat", "tea", "tan", "ate", "nat", "bat"]));
