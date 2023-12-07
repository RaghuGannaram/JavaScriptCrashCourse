/**
    @title 1189. Maximum Number of Balloons
    @difficulty Easy
    @url https://leetcode.com/problems/maximum-number-of-balloons/

    @description
        Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
        You can use each character in text at most once. Return the maximum number of instances that can be formed.

    @param {string} text
    @return {number}
 */

var maxNumberOfBalloons1 = function (text) {
    const map = new Map([
        ["b", 0],
        ["a", 0],
        ["l", 0],
        ["o", 0],
        ["n", 0],
    ]);

    for (let i = 0; i < text.length; i++) {
        if (map.has(text[i])) {
            map.set(text[i], map.get(text[i]) + 1);
        }
    }

    return Math.min(
        map.get("b"),
        map.get("a"),
        Math.floor(map.get("l") / 2),
        Math.floor(map.get("o") / 2),
        map.get("n")
    );
};

var maxNumberOfBalloons2 = function (text) {
    let res = 0,
        letters = ["a", "b", "l", "l", "n", "o", "o"],
        map = new Map();

    for (let ch of text) {
        map.set(ch, (map.get(ch) ?? 0) + 1);
    }

    outer: while (true) {
        inner: for (let ch of letters) {
            if (!map.get(ch)) break outer;
            map.set(ch, map.get(ch) - 1);
        }
        res++;
    }

    return res;
};

let text = "loonbalxballpoon";

console.log(maxNumberOfBalloons1(text));
