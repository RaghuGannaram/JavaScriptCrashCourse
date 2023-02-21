/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = [], stack = [];

  backtrack(0, 0, n);

  return result;

  function backtrack(opened, closed, n) {
      if (opened === n && closed === n) {
          result.push(stack.join(""));
          return;
      }
      if (opened < n) {
          stack.push("(");
          backtrack(opened + 1, closed, n);
          stack.pop();
      }
      if (closed < opened) {
          stack.push(")");
          backtrack(opened, closed+1, n);
          stack.pop();
      }
  }
};

console.log(generateParenthesis(3))