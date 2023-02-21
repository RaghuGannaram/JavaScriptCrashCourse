/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0, r = nums.length, m;

  while (l < r) {
      m = Math.floor((l + r) / 2);
      if (target === nums[m]) return m;
      else if (target > nums[m]) l = m + 1;
      else r = m;
  }
  return -1;
};

console.log(search([-1,0,3,5,9,12], 9))