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