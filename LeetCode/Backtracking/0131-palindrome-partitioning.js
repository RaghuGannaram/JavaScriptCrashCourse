/**
    @title 131. Palindrome Partitioning
    @difficulty Medium
    @url https://leetcode.com/problems/palindrome-partitioning/

    @description
        Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.
        A palindrome string is a string that reads the same backward as forward.

    @param {string} s
    @return {string[][]}
 */

var partition = function (s) {
    let res = [];

    backtrack(0, []);

    return res;

    function backtrack(i, cur) {
        if (i === s.length) {
            res.push([...cur]);
            return;
        }

        for (let j = i; j < s.length; j++) {
            if (isPalindrome(i, j)) {
                cur.push(s.slice(i, j + 1));
                backtrack(j + 1, cur);
                cur.pop();
            }
        }
    }

    function isPalindrome(i, j) {
        while (i <= j) {
            if (s[i] !== s[j]) return false;
            i++;
            j--;
        }

        return true;
    }
};

var partition2 = function (s) {
    let res = [];

    backtrack(0, []);

    return res;

    function backtrack(i, cur) {
        if (i === s.length) {
            res.push([...cur]);
            return;
        }

        for (let j = i; j < s.length; j++) {
            if (s.slice(i, j + 1).isPalindrome()) {
                cur.push(s.slice(i, j + 1));
                backtrack(j + 1, cur);
                cur.pop();
            }
        }
    }
};


String.prototype.isPalindrome = function () {
    let l = 0, r = this.length - 1;

    while (l < r) {
        if (this[l] !== this[r]) return false;
        l++;
        r--;
    }

    return true;
}

let s = "aab";

console.log(partition(s)); // [["a","a","b"],["aa","b"]]