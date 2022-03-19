// By using pure mathematic logic
function mathPalindrome(original) {
  let num = original;
  let reversed = 0;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    // num = Math.floor(num / 10);
    num = (num - (num % 10)) / 10;
  }
  return reversed == original;
}


// By using lexical meaning of palindrome
function lexicalPalindrome(original) {
    let reversed = String(original).split("").reverse().join("");
    return original == reversed;
}



let num = 12321;
// let isPalindrome = mathPalindrome(num);
let isPalindrome = lexicalPalindrome(num);
console.log(`The given number '${num}' is ${isPalindrome ? "" : "not "}a palindrome`);