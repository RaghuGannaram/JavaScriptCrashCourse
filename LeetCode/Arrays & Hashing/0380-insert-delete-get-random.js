/**
    @url https://leetcode.com/problems/insert-delete-getrandom-o1/
    @title 380. Insert Delete GetRandom O(1)
    @difficulty medium

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
    this.map = new Map();
    this.arr = [];
}

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.map.has(val)) return false;
    this.map.set(val, this.arr.length);
    this.arr.push(val);
    return true;
}


/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (!this.map.has(val)) return false;
    let index = this.map.get(val);
    this.map.delete(val);
    if (index === this.arr.length - 1) {
        this.arr.pop();
    } else {
        let last = this.arr.pop();
        this.arr[index] = last;
        this.map.set(last, index);
    }
    return true;
}

/**
 * Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called).
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return this.arr[Math.floor(Math.random() * this.arr.length)];
}