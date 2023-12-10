/**
 	@title 11. Container With Most Water
 	@difficulty Medium
 	@url https://leetcode.com/problems/container-with-most-water/

	@description
		Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are
		drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis
		forms a container, such that the container contains the most water.

	@param {number[]} height
	@return {number}
 */

var maxArea1 = function (height) {
    let res = 0,
        l = 0,
        r = height.length - 1,
        container;

    while (l < r) {
        if (height[l] < height[r]) {
            container = height[l] * (r - l);
            l++;
        } else {
            container = height[r] * (r - l);
            r--;
        }
        if (container > res) res = container;
    }
    return res;
};

var maxArea2 = function (height) {
    let res = 0,
        l = 0,
        r = height.length - 1;

    while (l < r) {
        res = Math.max(res, (r - l) * Math.min(height[l], height[r]));

        height[l] < height[r] ? l++ : r--;
    }

    return res;
};

console.log(maxArea1([1, 8, 6, 2, 5, 4, 8, 3, 7]));
