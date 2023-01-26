function sum(arr, target){
    let hashSet = {};

    for(let i = 0; i<arr.length;i++){
        let pair = target - arr[i];
        if(hashSet[pair] != undefined) return [hashSet[pair], i]
        hashSet[arr[i]] = i;
    }
}


let output =sum([2,11,7,15], 9);
console.log(output)

let x =10;
if(x =5){}
console.log(x)