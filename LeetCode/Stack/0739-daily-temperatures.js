/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let l = temperatures.length;
  let result = Array(l).fill(0), stack = [], stackIndex, stackTemp;

  for (let [index, temp] of temperatures.entries()) {
      while (stack.length && stack.at(-1)[1] < temp) {
          [stackIndex, stackTemp] = stack.pop();
          result[stackIndex] = index - stackIndex;
      }
      stack.push([index, temp])
  }

  return result;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))