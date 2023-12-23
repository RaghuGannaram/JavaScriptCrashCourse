let nums = [10, 20, 30, 40, 50, 60];

console.log(nums.find((x) => x % 6 === 0));
console.log(Array.prototype.find.toString());

Array.prototype.find = null;

try {
    console.log(nums.find((x) => x % 6 === 0));
} catch (err) {
    console.log(err);
}

if (!Array.prototype.find) {
    Array.prototype.find = function (callback, thisArgs) {
        if (typeof callback !== "function") {
            throw new TypeError(callback + " is not a function");
        }

        for (let i = 0; i < this.length; i++) {
            if (callback.call(thisArgs, this[i], i, this)) {
                return this[i];
            }
        }

        return undefined;
    };
}

console.log(nums.find((x) => x % 6 === 0));
