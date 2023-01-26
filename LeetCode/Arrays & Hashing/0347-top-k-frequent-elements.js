/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent1 = function (nums, k) {
	let fz,
		temp,
		result = [],
		map = new Map();

	for (let num of nums) {
		if (map.has(num)) {
			map.set(map.get(num) + 1);
		} else {
			map.set(num, 1);
		}
	}
	for (let i = 0; i < k; i++) {
		fz = 0;
		for (let [n, c] of map) {
			if (c > fz) {
				fz = c;
				temp = n;
			}
		}
		result.push(temp);
		map.delete(temp);
	}
	return result;
};

var topKFrequent2 = function (nums, k) {
	let map = {};
	let topFqs = [];
	let result = [];

	for (let n of nums) {
		map.hasOwnProperty(n) ? (map[n] = map[n] + 1) : (map[n] = 1);
	}

	topFqs = Object.entries(map)
		.sort(([, a], [, b]) => b - a)
		.slice(0, k);

	for (let i in topFqs) {
		result.push(topFqs[i][0]);
	}
	return result;
};

console.log(topKFrequent1([1, 2], 2));