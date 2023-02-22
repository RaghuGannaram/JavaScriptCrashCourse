/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
	let l = 1,
		r = Math.max(...piles),
		m,
		acc;

	while (l <= r) {
		acc = 0;
		m = Math.floor((l + r) / 2);
		for (let pile of piles) {
			acc += Math.ceil(pile / m);
		}
		if (acc <= h) r = m - 1;
		else l = m + 1;
	}

	return l;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8));
