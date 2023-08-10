let nums = [1,2,3,4,5];

console.log(nums.filter((x) => x % 2 === 0));
console.log(Array.prototype.filter.toString());

Array.prototype.filter = () => "Filter is destroyed...!";

console.log(Array.prototype.filter.toString());
console.log(nums.filter((x) => x % 2 === 0));

Array.prototype.filter = function (fn) {
    let result = [];
    for(let i = 0; i < this.length; i++) {
        if(fn(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

console.log(Array.prototype.filter.toString());
console.log(nums.filter((x) => x % 2 === 0));