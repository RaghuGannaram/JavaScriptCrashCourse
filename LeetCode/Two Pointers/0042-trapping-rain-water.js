/**
 	@title 42. Trapping Rain Water
 	@difficulty Hard
 	@url https://leetcode.com/problems/trapping-rain-water/

	@description
		Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

	@params {number[]} height
	@return {number}
 */

var trappedRainWater1 = function (height) {
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

var trappedRainWater2 = function (height) {
    let res = 0,
        l = 0,
        r = height.length - 1,
        lMax = 0,
        rMax = 0;

    while (l < r) {
        lMax = Math.max(lMax, height[l]);
        rMax = Math.max(rMax, height[r]);

        if (lMax < rMax) {
            res += lMax - height[l];
            l++;
        } else {
            res += rMax - height[r];
            r--;
        }
    }

    return res;
};
console.log(trappedRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
