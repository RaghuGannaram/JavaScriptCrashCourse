/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let t = 0, b = matrix.length, l, r, mr, mc;

  while (t < b) {
      mr = Math.floor((t + b) / 2);
      if (matrix[mr][0] <= target && target <= matrix[mr].at(-1)) {
          l = 0, r = matrix[mr].length;
          while (l < r) {
              mc = Math.floor((l + r) / 2);
              if (target === matrix[mr][mc]) return true;
              else if (target > matrix[mr][mc]) l = mc + 1;
              else r = mc
          }
          return false;

      } else if (target < matrix[mr][0]) b = mr;
      else t = mr + 1;
  }

  return false;
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13))