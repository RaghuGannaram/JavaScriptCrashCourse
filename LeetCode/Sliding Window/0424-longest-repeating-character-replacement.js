/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var characterReplacement = function (s, k) {
	let maxFq = 0,
		l = 0,
		r = 0,
		char,
		map = new Map();

	while (r < s.length) {
		char = s[r];
		map.set(char, (map.get(char) ?? 0) + 1);

		maxFq = Math.max(map.get(char), maxFq);
		if (r - l + 1 - maxFq > k) {
			map.set(s[l], map.get(s[l]) - 1);
			l++;
		}
		r++;
	}
	
	return r - l;
};

console.log(characterReplacement("ABAAABAA", 1));
