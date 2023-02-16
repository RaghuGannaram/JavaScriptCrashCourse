/**
 * @param {string} s
 * @return {boolean}
 */

var validPalindrome1 = function (s) {
	let l, r, str;
    
	str = s.toLowerCase().split("").filter((c) => {
		return isAlphaNumeric(c);
	});
	l = 0;
	r = str.length - 1;
	while (l < r) {
		if (str[l] !== str[r]) {
			return false;
		}
		l++;
		r--;
	}
	return true;

	function isAlphaNumeric(c) {
		let num = c.charCodeAt();
		if ((48 <= num && num <= 57) || (65 <= num && num <= 90) || (97 <= num && num <= 122)) return true;
		else return false;
	}
};

var validPalindrome2 = function (s) {
	let filteredS = s
		.toLowerCase()
		.split("")
		.filter((i) => i.match(/[a-zA-Z0-9]/));
	return filteredS.join("") == filteredS.reverse().join("");
};

var validPalindrome3 = function (s) {
	let l = 0,
		r = s.length - 1;
	while (l < r) {
		while (l < r && !s[l].match(/[a-zA-Z0-9]/)) l++;
		while (l < r && !s[r].match(/[a-zA-Z0-9]/)) r--;
		if (s[l].toLowerCase() != s[r].toLowerCase()) return false;
		l++;
		r--;
	}

	return true;
};

var validPalindrome4 = function (s) {
	let l = 0,
		r = s.length - 1;
	while (l < r) {
		while (l < r && !isalnum(s[l])) l++;
		while (l < r && !isalnum(s[r])) r--;
		if (s[l].toLowerCase() != s[r].toLowerCase()) return false;
		l++;
		r--;
	}

	return true;

	function isalnum(c) {
		let num = c.charCodeAt();
		if ((48 <= num && num <= 57) || (65 <= num && num <= 90) || (97 <= num && num <= 122)) return true;
		else return false;
	}
};

console.log(validPalindrome1("A man, a plan, a canal: Panama"));