/**
	@url https://leetcode.com/problems/container-with-most-water/
	@title 11. Container With Most Water
	@difficulty Medium

	@description
		Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are
		drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis
		forms a container, such that the container contains the most water.

	@param {number[]} height
	@return {number}
 */

var maxArea1 = function (height) {
	let l = 0,
		r = height.length - 1,
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

var maxArea3 = function (height) {
    let [l, r] = [0, height.length - 1], container, max = 0;

    while (l < r) {
        container = Math.min(height[l], height[r]) * (r - l);
        max = container > max ? container : max;
        height[l] < height[r] ? l++ : r--;
    }

    return max;
};

console.log(maxArea1([1, 8, 6, 2, 5, 4, 8, 3, 7]));
