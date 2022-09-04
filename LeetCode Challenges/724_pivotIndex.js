/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex1 = function(nums) {
    let lSum, rSum;
        
    if(nums.length === 1) return 0;
    
    for(let i=0; i<nums.length; i++){
        lSum=0, rSum=0;
        
        if(i==0){
            if(nums.slice(i+1).reduce((acc,cur)=>acc+cur) === 0){
                return i;
            }
        } else if(i==(nums.length-1)){
            if(nums.slice(0,i).reduce((acc,cur)=>acc+cur) === 0){
                return i;
            }            
        } else {
            lSum = nums.slice(0,i).reduce((acc,cur)=>acc+cur);
            rSum = nums.slice(i+1).reduce((acc,cur)=>acc+cur);
            if(lSum === rSum){
                return i;
            }
        }
    }
    
    return -1;
};

var pivotIndex2 = function(nums) {
    let lSum=0;
    let rSum = nums.reduce((acc,cur)=>acc+cur);

    if(nums.length === 1) return 0;
    
    for(let i=0; i<nums.length; i++){

        rSum-=nums[i];

        if(i==0){
            if(rSum === 0){
                return i;
            }
        } else if(i==(nums.length-1)){
            if(lSum === 0){
                return i;
            }            
        } else {
            if(lSum === rSum){
                return i;
            }
        }
        
        lSum+=nums[i];
    }
    
    return -1;
};

console.log(pivotIndex2([1,7,3,6,5,6]))