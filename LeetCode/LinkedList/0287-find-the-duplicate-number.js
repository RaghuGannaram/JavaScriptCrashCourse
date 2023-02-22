/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate1 = function (nums) {
  let acc = 0, nSum, n=nums.length-1;

  for (let i = 0; i < nums.length; i++) {
      acc += nums[i];
  }

  nSum = ((n * n) + n) / 2

  return acc - nSum
};

var findDuplicate2 = function (nums) {
  let slow = 0, fast = 0;

  while (true) {
      slow = nums[slow];
      fast = nums[nums[fast]];
      if (slow === fast) {
          slow = 0;
          break
      }
  }

  while (true) {
      slow = nums[slow];
      fast = nums[fast];
      if (slow === fast) {
          return slow;
      }
  }
};

console.log(findDuplicate2([1,3,4,2,2]))