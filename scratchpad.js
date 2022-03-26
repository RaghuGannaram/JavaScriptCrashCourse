function dupeFilter(nums) {
//   let distArr = [];
//   for (let n of nums) {
//     if (!distArr.includes(n)) {
//       distArr.push(n);
//     }
//   }
//   let nullArr = new Array(nums.length - distArr.length);
//   for (let i = 0; i < nums.length - distArr.length; i++) {
//     nullArr[i] = '_';
//   }
//   return distArr.concat(...nullArr);
let s = new Set(nums);
console.log(s)
let l = new Array(...s);
let k = l.length;
l.sort();
console.log(l)
for(let i =0; i<k;i++){
    nums[i] = l[i]
}
console.log(nums)
}

console.log(dupeFilter([1, 7,1, 2, 2, 3, 4, 5]));
for(var m=10;m>=0;m--){
    if(m<5) break;
    console.log(m)
}
console.log(m)