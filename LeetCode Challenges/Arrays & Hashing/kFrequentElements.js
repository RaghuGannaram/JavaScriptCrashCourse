/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = {};
  let topFqs = [];
  let result = [];

  for (let n of nums) {
    map.hasOwnProperty(n) ? (map[n] = map[n] + 1) : (map[n] = 1);
  }

  topFqs = Object.entries(map)
    .sort(([, a], [, b]) => b - a)
    .slice(0, k);

  for (let i in topFqs) {
    result.push(topFqs[i][0]);
  }
  return result;
};

console.log(topKFrequent([1, 2], 2));
