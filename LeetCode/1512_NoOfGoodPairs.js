/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs1 = function (nums) {
	let n = 0;

	for (let i = 0; i < nums.length; i++) {
		for (let j = i; j < nums.length; j++) {
			if (i !== j && nums[i] === nums[j]) {
				n += 1;
			}
		}
	}

	return n;
};

var numIdenticalPairs2 = function (nums) {
	let n = 0;
	let map = {};

	for (let i = 0; i < nums.length; i++) {
		if (!(nums[i] in map)) map[nums[i]] = 1;
		else map[nums[i]] += 1;
	}
	for (let num in map) {
		n += (map[num] * (map[num] - 1)) / 2;
	}

	return n;
};

var numIdenticalPairs3 = function (nums) {
    let n = 0
    const map = {}
    
    for (const num of nums) {
        if (map[num]) {
            n += map[num];
            map[num] += 1;
        } else {
            map[num] = 1;
        }
    }
    return n
};


console.log(numIdenticalPairs3([1, 2, 3, 1, 1, 3]));
