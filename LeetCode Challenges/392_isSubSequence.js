/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
	let a = s.split('');

	for (let i = 0; i < t.length; i++) {
		if (t[i] === a[0]) a.shift();
	}

	return a.length === 0;
};

console.log(isSubsequence('abc', 'ahbgdc'));
// console.log(isSubsequence("abc", "bahgdc"))
