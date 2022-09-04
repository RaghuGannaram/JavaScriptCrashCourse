/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum1 = function(nums, target){
    let hash = {};
    for(let i=0; i<nums.length;i++){
        console.log(hash)
        if((target-nums[i]) in  hash){
            return [hash[target-nums[i]], i]
        } else {
            hash[nums[i]]= i
        }
    }
}

var twoSum2 = function(nums, target){
    let map = new Map();
    for(let i=0; i<nums.length;i++){
        console.log(map)
        if(map.has(target-nums[i])){
            return [map.get(target-nums[i]), i]
        } else {
            map.set(nums[i], i)
        }
    }
}

console.log(twoSum2([10,20,3,4,5,6,7], 7))