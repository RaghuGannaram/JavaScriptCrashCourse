/**
    @url https://leetcode.com/problems/restore-ip-addresses/
    @title 93. Restore IP Addresses
    @difficulty Medium

    @description
        Given a string s containing only digits, return all possible valid IP addresses that can be obtained from s. You can return them in any order.
        A valid IP address consists of exactly four integers, each integer is between 0 and 255, separated by single dots and cannot have leading zeros. 
    
    @param {string} s
    @return {string[]}
 */


var restoreIpAddresses = function (s) {
    let res = [];

    backtrack(0, []);

    return res;

    function backtrack(i, cur) {
        if (i === s.length) {
            if (cur.length === 4)
                res.push(cur.join("."));
            return;
        }

        for (let j = i; j < s.length; j++) {
            if (s[i] == 0 && j > i) break;

            if (s.slice(i, j + 1) < 256) {
                cur.push(s.slice(i, j + 1));
                backtrack(j + 1, cur);
                cur.pop();
            }
        }
    }
};

let s = "25525511135";

console.log(restoreIpAddresses(s));