/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea1 = function (height) {
	let l = 0,
		r = height.length-1,
		container,
		maxWater = 0;

	while (l < r) {
		if (height[l] < height[r]) {
			container = height[l] * (r - l);
			l++;
		} else {
			container = height[r] * (r - l);
			r--;
		}
		if (container > maxWater) maxWater = container;
	}
	return maxWater;
};

var maxArea2 = function (height) {
	let l = 0,
		r = height.length - 1,
		maxWater = 0,
		water;

	while (l < r) {
		water = Math.min(height[l], height[r]) * (r - l);
		maxWater = Math.max(water, maxWater);
		if (height[l] < height[r]) l++;
		else r--;
	}

	return maxWater;
};

console.log(maxArea1([1, 8, 6, 2, 5, 4, 8, 3, 7]));
