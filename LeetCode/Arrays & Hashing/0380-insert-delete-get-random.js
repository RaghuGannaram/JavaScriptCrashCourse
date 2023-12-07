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

    @param {string} s
    @return {number}
 */

/**
 * Initialize your data structure here.
 *
 */
var RandomizedSet = function () {
    this.set = new Set();
    this.arr = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.set.has(val)) return false;
    this.set.add(val);
    this.arr.push(val);
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (!this.set.has(val)) return false;

    this.set.delete(val);
    this.arr = this.arr.filter((item) => item !== val);
    return true;
};

/**
 * Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called).
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return this.arr[Math.floor(Math.random() * this.arr.length)];
};
