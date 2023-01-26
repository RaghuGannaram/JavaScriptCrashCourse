/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var checkInclusion = function (s1, s2) {
	let l1 = s1.length,
		l2 = s2.length,
		l = 0,
		r = l1 - 1,
		res = false;

	if (l1 > l2) return false;

	while (r < l2) {
		console.log(s2.slice(l, r + 1));
		if (isAnagram(s1, s2.slice(l, r + 1))) {
			return true;
		}
		l++;
		r++;
	}

	return res;

	function isAnagram(s, t) {
		let sMap = new Map(),
			tMap = new Map();

		for (let i = 0; i < s.length; i++) {
			sMap.set(s[i], (sMap.get(s[i]) ?? 0) + 1);
			tMap.set(t[i], (tMap.get(t[i]) ?? 0) + 1);
		}
		for (let [char, count] of sMap) if (tMap.get(char) !== count) return false;
		return true;
	}
};

console.log(checkInclusion("ab", "eidabop"));
