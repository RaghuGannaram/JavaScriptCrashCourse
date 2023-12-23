let nums = [1, 2, 3, 4, 5];

console.log(nums.reduce((x, y) => x + y, 10));
console.log(Array.prototype.reduce.toString());

Array.prototype.reduce = null;

try {
    console.log(nums.reduce((x, y) => x + y, 10));
} catch (err) {
    console.log(err);
}

if (!Array.prototype.reduce) {
    Array.prototype.reduce = function (callback, initial) {
        if (typeof callback !== "function") {
            return new TypeError(callback + " is not a function");
        }
        let result = initial;

        for (let i = 0; i < this.length; i++) {
            if (initial === undefined && i === 0) {
                result = this[i];
                continue;
            }
            result = callback(result, this[i], i, this);
        }

        return result;
    };
}

console.log(nums.reduce((x, y) => x + y, 10));
