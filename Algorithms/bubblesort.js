function bubbleSort(arr){
    for(let i =0; i<arr.length; i++){
        for(let j=0; j<(arr.length-i-1); j++){
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr;
}

let input = [234, 43,234, -56,-56, 55, 63,  5, 6, 235, 547];
console.log("input : ", input)
let output = bubbleSort(input);
console.log("output : ", output)