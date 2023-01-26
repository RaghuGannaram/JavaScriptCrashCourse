/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function (nums) {
    const res = [];

    let product = 1;

    for (let i = 0; i < nums.length; i++) {
        res[i] = product;
        product *= nums[i];
    }
    console.log(res)

    product = 1;
    
    for (let j = nums.length - 1; j >= 0; j--) {
        res[j] *= product;
        product *= nums[j];
    }

    return res;
};

console.log(productExceptSelf([2,3,4,5,6]))