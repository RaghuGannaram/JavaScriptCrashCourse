/**
    @url https://leetcode.com/problems/search-a-2d-matrix/
    @title 74. Search a 2D Matrix
    @difficulty Medium

    @description
        Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
        Integers in each row are sorted from left to right.
        The first integer of each row is greater than the last integer of the previous row.

    @param {number[][]} matrix
    @param {number} target
    @return {boolean}
 */

var searchMatrix = function (matrix, target) {
    let l = 0, r = matrix.length - 1, m;

    while (l <= r) {
        m = Math.floor((l + r) / 2);

        if (matrix[m][0] <= target && target <= matrix[m].at(-1)) {
            return binarySearch(matrix[m]);
        }

        if (matrix[m][0] < target) l = m + 1;
        else r = m - 1;
    }

    return false;

    function binarySearch(nums) {
        let l = 0, r = nums.length - 1, m;

        while (l <= r) {
            m = Math.floor((l + r) / 2);

            if (nums[m] === target) return true;

            if (nums[m] < target) l = m + 1;
            else r = m - 1;
        }

        return false;
    }
};