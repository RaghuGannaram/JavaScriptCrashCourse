/**
    @title 380. Insert Delete GetRandom O(1)
    @difficulty medium
    @url https://leetcode.com/problems/insert-delete-getrandom-o1/

    @description
        Implement the RandomizedSet class:
        RandomizedSet() Initializes the RandomizedSet object.
        bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
        bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.

        int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called).
        Each element must have the same probability of being returned.

 */

var RandomizedSet = function () {
    this.map = new Map();
    this.arr = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.map.has(val)) return false;

    this.map.set(val, this.arr.length);
    this.arr.push(val);
    return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (!this.map.has(val)) return false;

    let index = this.map.get(val),
        last = this.arr.length - 1;
    let lastVal = this.arr[last];

    this.arr[index] = lastVal;
    this.map.set(lastVal, index);
    this.map.delete(val);
    this.arr.pop();
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return this.arr[Math.floor(Math.random() * this.arr.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
