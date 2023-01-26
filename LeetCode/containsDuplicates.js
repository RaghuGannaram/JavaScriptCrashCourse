function containsDuplicateOne(nums) {
    let distinctArr = [];
    for(let element of nums) {
        if(distinctArr.includes(element)) return true;
        else distinctArr.push(element);
    }
    return false;
};

function containsDuplicateTwo(nums){
    let numsSet = new Set(nums);
    return nums.length!=numsSet.size;
}

let input =[1]
// let output =containsDuplicate(input);
let output =containsDuplicateTwo(input);
console.log(output);

let arr =[11,23,56,7889,23]