/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum1 = function(nums) {
    let result = [];
    let rSum;
    
    for(let i=0; i<nums.length; i++){
        rSum = 0;
        for(let j=0; j<=i;j++){
            rSum+=nums[j];
        }
        result.push(rSum);
    }
    return result;
};

var runningSum2 = function(nums) {
    let result = [];
    let rSum = 0;
    
    for(let i=0; i<nums.length; i++){
        rSum += nums[i];
        result.push(rSum);
    }
    return result;
};