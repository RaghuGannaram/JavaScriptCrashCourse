let nums = [1, 2, 3, 4, 5];

console.log(nums.map((x) => x * 10));
console.log(Array.prototype.map.toString());

Array.prototype.map = null;

try {
    console.log(nums.map((x) => x * 10));
} catch (err) {
    console.log(err);
}

if (!Array.prototype.map) {
    Array.prototype.map = function (callback, thisArgs) {
        if (typeof callback !== "function") {
            return new TypeError(callback + " is not a function");
        }

        const result = [];

        for (let i = 0; i < this.length; i++) {
            result.push(callback.call(thisArgs, this[i], i, this));
        }

        return result;
    };
}

console.log(nums.map((x) => x * 10));

const employee = {
    hike: 10,
    updatedPay: function (salary) {
        return salary * (1 + this.hike / 100);
    },
};

const salaries = [1_00_000, 1_20_000, 1_50_000];

console.log(salaries.map(employee.updatedPay, employee));