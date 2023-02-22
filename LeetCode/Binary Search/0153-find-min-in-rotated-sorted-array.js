/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let l = 0, r = nums.length - 1, min=nums[0], m;

  while (l <= r) {
      if (nums[l] < nums[r]) {
          min = Math.min(min, nums[l]);
          break;
      }
      m = Math.floor((l + r) / 2);
      min = Math.min(min, nums[m]);
      if (nums[m] >= nums[l]) {
          l = m + 1;
      } else {
          r = m - 1;
      }
  }

  return min;
};

console.log(findMin([3,4,5,1,2]))