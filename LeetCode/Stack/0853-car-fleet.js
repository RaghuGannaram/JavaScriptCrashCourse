/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  let stack = [], ps = [];

  for (let i in position) {
      ps.push([position[i], speed[i]])
  }

  ps.sort((a, b) => b[0] - a[0]);
  
  for (let [p, s] of ps) {
      stack.push((target - p) / s);
      if (stack.length >= 2 && stack.at(-1) <= stack.at(-2)) {
          stack.pop()
      }
  }
  return stack.length;
};

console.log(carFleet(12, [10,8,0,5,3], [2,4,1,1,3]))