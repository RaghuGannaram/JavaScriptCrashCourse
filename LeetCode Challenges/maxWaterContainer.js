function maxWaterContainer(heights){
    let l=0, r=heights.length, container=0, maxContainer=0;

    while(l<r){
        if(heights[l]<heights[r]){
            container = heights[l]*(r-l);
            l++;
        }else{
            container = heights[r]*(r-l);
            r--;
        }
        if(container>maxContainer) maxContainer=container;
    }
    return maxContainer;
}

let input = [1,8,6,2,5,4,8,3,7];
let output = maxWaterContainer(input);
console.log(output);