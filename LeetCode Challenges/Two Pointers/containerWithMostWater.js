/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let l = 0, r = height.length-1, container;
    let maxWater = 0;
    
    
    while(l<r){
        if(height[l]<height[r]){
            container = height[l]*(r-l);
            l++;
        }else{
            container = height[r]*(r-l);
            r--;
        }
        if(container>maxWater) maxWater = container;
    }
    return maxWater
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))