/**
	@title 347. Top K Frequent Elements
 	@difficulty medium
 	@url https://leetcode.com/problems/top-k-frequent-elements/

	@description
		Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
	
	@params	{number[]} nums
	@params	{number} k
	@return {number[]}
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
    let map = new Map();

    for (let n of nums) {
        map.set(n, (map.get(n) ?? 0) + 1);
    }

    return Array.from(map)
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map((x) => x[0]);
};

console.log(topKFrequent1([7, 1, 2, 7, 1, 3, 7, 4, 2, 7, 2], 2));
