/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring1 = function (s) {
	const set = new Set();
	let l = 0;
	let max = 0;

	for (let r = 0; r < s.length; r++) {
		while (set.has(s[r])) {
			set.delete(s[l]);
			l++;
		}

		set.add(s[r]);
		max = Math.max(max, set.size);
	}
	return max;
};

var lengthOfLongestSubstring2 = function (s) {
	let l = 0,
		r = 0,
		max = 0,
		set = new Set();

	while (r < s.length) {
		while (set.has(s[r])) {
			set.delete(s[l]);
			l++;
		}
		set.add(s[r]);
		max = Math.max(max, set.size);
		r++;
	}
	return max;
};

var lengthOfLongestSubstring3 = function (s) {
	let l = 0,
		r = 0,
		max = 0,
		str = "";

	while (r < s.length) {
		if (str.includes(s[r])) {
			str = str.slice(str.indexOf(s[r])+1);
			l = r;
		}
		str = str + s[r];
		max = Math.max(max, str.length);
		r++;
	}
	return max;
};

console.log(lengthOfLongestSubstring3("aab"));
