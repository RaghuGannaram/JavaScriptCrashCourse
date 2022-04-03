let arr = [234, 43,234, -56,-56, 55, 63,  5, 6, 235, 547];

console.log(arr.sort());
console.log(arr.sort((a,b)=>a-b));
console.log(arr.sort((a,b)=>b-a));

console.log(arr.sort((a,b)=>a-b));
console.log(arr.reverse());

console.log(arr.sort((a,b)=>0.5-Math.random()))

console.log(arr.sort((a,b)=>a-b)[0])
console.log(arr.sort((a,b)=>a-b)[arr.length-1])


let fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits)
console.log(fruits.toString())
console.log(fruits.join('----*---'))
console.log(fruits.sort())
console.log(fruits)
console.log(fruits.pop())
console.log(fruits)
console.log(fruits.push('Poppaya'))
console.log(fruits)
console.log(fruits.shift())
console.log(fruits)
console.log(fruits.unshift('Grapes'))
console.log(fruits)
console.log(delete fruits[0])
console.log(fruits[0])
console.log(fruits)
console.log(fruits.unshift('Grapes'))
console.log(fruits)
console.log(fruits[1]='Pomegranate')
console.log(fruits)

let veggies = ['Tomato','Brinjal','Cauliflower'];

console.log(fruits.concat(veggies,'Jasmine'));

console.log(fruits.splice.__proto__)
console.log(fruits.splice.__proto__.constructor)
console.log(fruits.splice.__proto__.__proto__.constructor)
console.log(fruits.splice.__proto__.__proto__.__proto__)

console.log(fruits)
console.log(fruits.splice())
console.log(fruits)
console.log(fruits.splice(2,0,'Sapota'))
console.log(fruits)
console.log(fruits.splice(5,0,'Lemon','Kiwi'))
console.log(fruits)
console.log(fruits.splice(5,1))
console.log(fruits)
// console.log(fruits.splice(2,'dummy1'))
console.log(fruits.splice(2,'1a','dummy2'))
console.log(fruits.splice(2,'1'))
console.log(fruits)

console.log(fruits)
console.log(fruits.slice(2,-2))
console.log(fruits)
console.log(fruits.slice())
console.log(fruits)

console.log(fruits.includes('Banana'))




let nums =[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
let l = nums.length;

// nums[nums.length-1] = nums[nums.length-1]+ 100
console.log(String(BigInt(nums.join(''))+BigInt(1)).split('').map(n=>Number(n)))
nums[0] =10
console.log(nums)