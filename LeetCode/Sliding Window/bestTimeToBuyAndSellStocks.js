/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let l = 0,
    r = 1,
    maxGain = 0;
  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      maxGain = Math.max((prices[r] - prices[l]), maxGain);
    } else {
      l = r;
    }
    r += 1;
  }
  return maxGain;
};

console.log(maxProfit([1,2,4]))