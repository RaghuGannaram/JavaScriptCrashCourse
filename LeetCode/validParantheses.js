function isValidParantheses(str) {
  let isValid = true;
  let bracketPairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = [];
  for (let c of str) {
    if (Object.keys(bracketPairs).includes(c)) stack.push(c);
    else if (bracketPairs[stack[stack.length-1]] == c) stack.pop();
    else isValid=false;
  }
  if(stack.length>0) isValid=false;
  return isValid;
}

let input = "]";
let output = isValidParantheses(input);
console.log(output);
