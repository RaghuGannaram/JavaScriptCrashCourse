/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let stack = [], current, max = 0, start

  for (let [index, height] of heights.entries()) {
      start = index;
      while (stack.length && stack.at(-1)[1] > height) {
          current = stack.pop();
          max = Math.max(max, current[1] * (index - current[0]))
          start = current[0];
      }
      stack.push([start, height])
  }
  for (let [index, height] of stack) {
      max = Math.max(max, height * (heights.length - index))
  }
  return max;
};

console.log(largestRectangleArea([2,1,5,6,2,3]))