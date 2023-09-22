/**
	@url https://leetcode.com/problems/koko-eating-bananas/
	@title 875. Koko Eating Bananas
	@difficulty Medium

	@description	
		Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.
		Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
		Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
		Return the minimum integer k such that she can eat all the bananas within h hours.

		@param	{number[]}	piles
		@param	{number}	h
		@return {number}
 */

var minEatingSpeed = function (piles, h) {
	let l = 1, r = Math.max(...piles), m, timeElapsed, res;
	res = r;

	while (l <= r) {
		timeElapsed = 0
		m = Math.floor((l + r) / 2);

		for (let pile of piles) {
			timeElapsed += Math.ceil(pile / m);
		}

		if (timeElapsed <= h) {
			res = Math.min(res, m);
			r = m - 1;
		}
		else l = m + 1;
	}

	return res;
};

let piles = [3, 6, 7, 11], h = 8;

console.log(minEatingSpeed(piles, h));