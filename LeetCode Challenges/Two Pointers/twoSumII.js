/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum1 = function (numbers, target) {
  let res = [];
  let map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    if (map.has(target - numbers[i])) {
      res.push(numbers.indexOf(target - numbers[i]) + 1);
      res.push(++i);
    } else {
      map.set(numbers[i], i);
    }
  }
  return res;
};

var twoSum2 = function (numbers, target) {
  let [left, right] = [0, numbers.length - 1];

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) return [left + 1, right + 1];

    sum < target ? left++ : right--;
  }

  return [-1, -1];
};

console.log(twoSum2([2, 3, 4, 5, 7, 8], 6));
