let nums = [10, 20, 30, 40, 50, 60];

console.log(nums.find((x) => x % 6 === 0));
console.log(Array.prototype.find.toString());

Array.prototype.find = () => "Find is destroyed...!";

console.log(Array.prototype.find.toString());
console.log(nums.find((x) => x % 6 === 0));

Array.prototype.find = function (fn) {
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) {
            return this[i];
        }
    }
}

console.log(Array.prototype.find.toString());
console.log(nums.find((x) => x % 6 === 0));