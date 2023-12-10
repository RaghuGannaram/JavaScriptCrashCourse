/**	
 	@title 680. Valid Palindrome II
 	@difficulty Easy
 	@url https://leetcode.com/problems/valid-palindrome-ii/

	@description
		Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.
		Note: The string will only contain lowercase characters a-z. The maximum length of the string is 50000.

	@param {string} s
	@return {boolean}
*/

var validPalindrome1 = function (s) {
	let [l, r] = [0, s.length - 1];

	while (l < r) {
		if (s[l] !== s[r]) {
			return isPalindrome(s.slice(l + 1, r + 1)) || isPalindrome(s.slice(l, r));
		}
		l++;
		r--;
	}

	return true;

	function isPalindrome(s) {
		return s.split("").reverse().join("") === s;
	}
};

var validPalindrome2 = function (s, choices = 1) {
	let [l, r] = [0, s.length - 1];

	while (l < r) {
		if (s[l] !== s[r]) {
			if (choices) {
				choices--;
				return validPalindrome2(s.slice(l + 1, r + 1), choices) || validPalindrome2(s.slice(l, r), choices);
			} else {
				return false;
			}
		}
		l++;
		r--;
	}

	return true;
};

let s = "abcadc";

console.log(validPalindrome2(s, 0));
console.log(validPalindrome2(s, 1));
console.log(validPalindrome2(s, 2));
console.log(validPalindrome2(s, 3));
