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
		map.set(num, (map.get(num) ?? 0) + 1);
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

var topKFrequent3 = function (nums, k) {
	let arr, map = new Map();

	for (let n of nums) {
			map.set(n, (map.get(n) ?? 0) + 1)
	}
	arr = Array.from(map);
	arr.sort((a, b) => b[1] - a[1])
	return arr.slice(0, k).map(x => x[0])
};

console.log(topKFrequent1([7, 1, 2, 7, 1, 3, 7, 4, 2, 7, 2], 2));
