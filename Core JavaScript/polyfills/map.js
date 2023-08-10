let nums = [1, 2, 3, 4, 5];

console.log(nums.map((x) => x * 10));
console.log(Array.prototype.map.toString());

Array.prototype.map = () => "Map is destroyed...!";

console.log(Array.prototype.map.toString());
console.log(nums.map((x) => x * 10));

Array.prototype.map = function (fn) {
	let result = [];

	for (let i = 0; i < this.length; i++) {
		result.push(fn(this[i], i, this));
	}

	return result;
};

console.log(Array.prototype.map.toString());
console.log(nums.map((x) => x * 10));
