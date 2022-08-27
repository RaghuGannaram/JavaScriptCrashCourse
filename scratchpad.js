// function dupeFilter(nums) {
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
// let s = new Set(nums);
// console.log(s)
// let l = new Array(...s);
// let k = l.length;
// l.sort();
// console.log(l)
// for(let i =0; i<k;i++){
//     nums[i] = l[i]
// }
// console.log(nums)
// }

// console.log(dupeFilter([1, 7,1, 2, 2, 3, 4, 5]));
// for(var m=10;m>=0;m--){
//     if(m<5) break;
//     console.log(m)
// }
// console.log(m)

// console.log(typeof(op) == "undefined")

// let arr =[1,2]
// arr.custom = "hello"
// for(const index in arr){
//     console.log(arr[index])
// }

// for(let index = 0; index< arr.length; index++){
//     console.log(arr[index])
// }
// arr.forEach( element =>{
//     console.log(element)
// })

function test(){
    let x = 10;
    // console.log(this === window)
    console.log(this.x)
    return this
  }
//   console.log(this === window)
  
  let customScope = test();
  console.log(customScope.x)