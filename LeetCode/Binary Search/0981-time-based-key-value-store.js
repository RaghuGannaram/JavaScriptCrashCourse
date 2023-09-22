/**
    @url https://leetcode.com/problems/time-based-key-value-store/
    @title 981. Time Based Key-Value Store
    @difficulty Medium

    @description
        Create a timebased key-value store class TimeMap, that supports two operations.
        1. set(string key, string value, int timestamp)
            Stores the key and value, along with the given timestamp.
        2. get(string key, int timestamp)
            Returns a value such that set(key, value, timestamp_prev) was called previously, with timestamp_prev <= timestamp.
            If there are multiple such values, it returns the one with the largest timestamp_prev.
            If there are no values, it returns the empty string ("").

    @param {string} key
    @param {string} value
    @param {number} timestamp
    @return {void}
 */

var TimeMap = function () {
  this.map = [];
};

/** 
* @param {string} key 
* @param {string} value 
* @param {number} timestamp
* @return {void}
*/
TimeMap.prototype.set = function (key, value, timestamp) {
  this.map[key] ? this.map[key].push([value, timestamp]) : this.map[key] = [[value, timestamp]];
};

/** 
* @param {string} key 
* @param {number} timestamp
* @return {string}
*/
TimeMap.prototype.get = function (key, timestamp) {
  let res = this.map[key];
  if (!res) return "";
  let l = 0, r = res.length - 1, m, max = "";

  while (l <= r) {
      m = Math.floor((l + r) / 2);
      if (res[m][1] === timestamp) {
          return res[m][0];
      } else if (res[m][1] < timestamp) {
          max = res[m][0]
          l = m + 1;
      } else {
          r = m - 1;
      }
  }
  return max;
};

/** 
* Your TimeMap object will be instantiated and called as such:
* var obj = new TimeMap()
* obj.set(key,value,timestamp)
* var param_2 = obj.get(key,timestamp)
*/