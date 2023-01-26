/**
 * @param {number[]} height
 * @return {number}
 */

var trappedRainWater = function (height) {
	let l = 0,
		r = height.length - 1,
		lMax = height[l],
		rMax = height[r],
		res = 0;

	while (l < r) {
		if (lMax < rMax) {
			l++;
			lMax = Math.max(lMax, height[l]);
			res += lMax - height[l];
		} else {
			r--;
			rMax = Math.max(rMax, height[r]);
			res += rMax - height[r];
		}
	}
	return res;
};

console.log(trappedRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
