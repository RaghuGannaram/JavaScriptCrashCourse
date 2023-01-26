/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram1 = function (s, t) {
	if (s.length !== t.length) {
		return false;
	}
	return s.split("").sort().join("") == t.split("").sort().join("");
};

var isAnagram2 = function (s, t) {
	if (s.length != t.length) {
		return false;
	}

	let sEntry = {},
		tEntry = {};

	for (let i = 0; i < s.length; i++) {
		sEntry[s.charAt(i)] = 1 + (sEntry[s.charAt(i)] ?? 0);
		tEntry[t.charAt(i)] = 1 + (tEntry[t.charAt(i)] ?? 0);
	}
	for (let char in sEntry) {
		if (sEntry[char] != tEntry[char]) {
			return false;
		}
	}
	return true;
};

var isAnagram3 = function (s, t) {
	if (s.length != t.length) {
		return false;
	}

	let sMap = new Map(),
		tMap = new Map();

	for (let i = 0; i < s.length; i++) {
		sMap.set(s[i], (sMap.get(s[i]) ?? 0) + 1);
		tMap.set(t[i], (tMap.get(t[i]) ?? 0) + 1);
	}
	for (let [char, count] of sMap) if (tMap.get(char) !== count) return false;
	return true;
};

var isAnagram4 = function (s, t) {
	if (s.length !== t.length) {
		return false;
	}

	let sMap = {},
		tMap = {};

	for (let i = 0; i < s.length; i++) {
		if (sMap.hasOwnProperty(s[i])) {
			sMap[s[i]]++;
		} else {
			sMap[s[i]] = 1;
		}
		if (tMap.hasOwnProperty(t[i])) {
			tMap[t[i]]++;
		} else {
			tMap[t[i]] = 1;
		}
	}
	for (let k in sMap) {
		if (sMap[k] !== tMap[k]) {
			return false;
		}
	}
	return true;
};

console.log(isAnagram3("rat", "tar"));
