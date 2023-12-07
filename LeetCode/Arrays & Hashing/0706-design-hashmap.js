/**
    @title 706. Design HashMap
    @difficulty easy
    @url https://leetcode.com/problems/design-hashmap/

    @description
        Design a HashMap without using any built-in hash table libraries.
        Implement the MyHashMap class:
        MyHashMap() initializes the object with an empty map.
        void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
        int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
        void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.
 */


var MyHashMap = function () {
    this.hashMap = {};
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    this.hashMap[key] = value;
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    return this.hashMap[key] ?? -1;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    delete this.hashMap[key];
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */