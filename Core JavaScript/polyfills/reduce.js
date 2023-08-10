let nums = [1, 2, 3, 4, 5];

console.log(nums.reduce((x, y) => x + y));
console.log(nums.reduce((x, y) => x + y, 10));
console.log(Array.prototype.reduce.toString());

Array.prototype.reduce = () => "Reduce is destroyed...!";

console.log(Array.prototype.reduce.toString());
console.log(nums.reduce((x, y) => x + y));

Array.prototype.reduce = function (fn, initial) {
	let result = initial;

	for (let i = 0; i < this.length; i++) {
        if(initial === undefined && i === 0) {
            result = this[i];
            continue;
        }
		result = fn(result, this[i], i, this);
	}

	return result;
};

console.log(Array.prototype.reduce.toString());
console.log(nums.reduce((x, y) => x + y));
console.log(nums.reduce((x, y) => x + y, 10));