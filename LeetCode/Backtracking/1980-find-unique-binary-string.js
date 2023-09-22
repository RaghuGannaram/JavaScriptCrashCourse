/**
    @url https://leetcode.com/problems/find-unique-binary-string/
    @title 1980. Find Unique Binary String
    @difficulty Medium

    @description
        Given an array of strings nums containing n unique binary strings each of length n, 
        return a binary string of length n that does not appear in nums. 
        If there are multiple answers, you may return any of them.

    @param {string[]} nums
    @return {string}
 */

var findDifferentBinaryString1 = function (nums) {
    let str = '0'.repeat(nums.length);

    while (true) {
        if (!nums.includes(str)) return str;
        str = (parseInt(str, 2) + 1).toString(2).padStart(nums.length, "0")
    }
};

var findDifferentBinaryString2 = function (nums) {

    return backtrack("");

    function backtrack(cur) {
        if (cur.length === nums.length) {
            if (!nums.includes(cur)) {
                return cur;
            }
            return;
        }

        for (let i = 0, res; i < 2; i++) {
            res = backtrack(cur + i);
            if (res) return res;
        }
    }
};