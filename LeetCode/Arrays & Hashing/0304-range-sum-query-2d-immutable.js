/**
    @title 304. Range Sum Query 2D - Immutable
    @difficulty medium
    @url  https://leetcode.com/problems/range-sum-query-2d-immutable/

    @description
        Given a 2D matrix matrix, handle multiple queries of the following type:
        Calculate the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1)
        and lower right corner (row2, col2).

        Implement the NumMatrix class:
        NumMatrix(int[][] matrix) Initializes the object with the integer matrix matrix.
        int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the elements of matrix inside the rectangle
        defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

    @param {number[][]} matrix
 */

var NumMatrix = function (matrix) {
    this.matrix = matrix;
    this.prefixSum = new Array(matrix.length).fill(0).map(_ => new Array(matrix[0].length).fill(0));

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            this.prefixSum[i][j] = (this.prefixSum[i][j - 1] ?? 0) + (this.prefixSum[i - 1]?.[j] ?? 0) - (this.prefixSum[i - 1]?.[j - 1] ?? 0) + matrix[i][j];
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    return this.prefixSum[row2][col2] - (this.prefixSum[row1 - 1]?.[col2] ?? 0) - (this.prefixSum[row2][col1 - 1] ?? 0) + (this.prefixSum[row1 - 1]?.[col1 - 1] ?? 0);
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */