let arr = [234, 43, 234, -57, -56, -20, 55, 63, 5, 6, 235, 547];

console.log(arr.sort());
console.log(arr);
console.log(arr.sort((a, b) => a - b));
console.log(arr);
console.log(arr.sort((a, b) => b - a));
console.log(arr);
console.log(arr.sort(() => 0.5 - Math.random()));
console.log(arr);
console.log(arr.sort((a, b) => a - b));
console.log(arr);
console.log(arr.reverse());
console.log(arr);

console.log(arr.sort((a, b) => a - b)[0]);
console.log(arr.sort((a, b) => a - b)[arr.length - 1]);
console.log(arr.slice(1, 4).reduce((acc, cur) => acc + cur));

let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

console.log(fruits);
console.log(fruits.toString());
console.log(fruits);
console.log(fruits.join());
console.log(fruits.join(''));
console.log(fruits.join(' '));
console.log(fruits.join('----*---'));
console.log(fruits);
console.log(fruits.sort());
console.log(fruits);
console.log(fruits.pop());
console.log(fruits);
console.log(fruits.push('Poppaya'));
console.log(fruits);
console.log(fruits.shift());
console.log(fruits);
console.log(fruits.unshift('Grapes'));
console.log(fruits);
console.log(fruits.length);
console.log(delete fruits[0]);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits);
console.log(fruits.unshift('Grapes'));
console.log(fruits);
console.log((fruits[1] = 'Pomegranate'));
console.log(fruits);

let veggies = ['Tomato', 'Brinjal', 'Cauliflower'];

console.log(fruits.concat(veggies, 'Jasmine'));
console.log(fruits.concat('Jasmine', veggies));
console.log(fruits);
console.log(fruits.splice.__proto__);
console.log(fruits.splice.__proto__.constructor);
console.log(fruits.splice.__proto__.__proto__.constructor);
console.log(fruits.splice.__proto__.__proto__.__proto__);

console.log(fruits);
console.log(fruits.splice());
console.log(fruits);
console.log(fruits.splice(4));
console.log(fruits);
console.log(fruits.splice(4, 0, 'Poppaya'));
console.log(fruits);
console.log(fruits.splice(4,1))
console.log(fruits);
console.log(fruits.splice(4,1,"Poppaya"));
console.log(fruits);
console.log(fruits.splice(2, 0, 'Sapota'));
console.log(fruits);
console.log(fruits.splice(-2, 1, 'Apple'));
console.log(fruits);
console.log(fruits.splice(3, 1, 'Orange'));
console.log(fruits);
console.log(fruits.splice(5, 0, 'Lemon', 'Kiwi'));
console.log(fruits);
console.log(fruits.splice(5, 1));
console.log(fruits);
console.log(fruits.splice(2, 'dummy1'));
console.log(fruits);
console.log(fruits.splice(2, '1a', 'dummy2'));
console.log(fruits);
console.log(fruits.splice(2, '1'));
console.log(fruits);
console.log(fruits.slice());
console.log(fruits);
console.log(fruits.slice(2));
console.log(fruits);
console.log(fruits.slice(2, -2));
console.log(fruits);
console.log(fruits.length);
console.log(fruits.includes('Banana'));

for (let i in fruits) console.log(i);
for (let [i, j] in fruits) console.log(i, j);
for (let i of fruits) console.log(i);
for (let [i, j] of fruits) console.log(i, j);
for (let [i, ...j] of fruits) console.log(i, j);

let nums = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
let l = nums.length;

// nums[nums.length-1] = nums[nums.length-1]+ 100
console.log(
	String(BigInt(nums.join('')) + BigInt(1))
		.split('')
		.map((n) => Number(n))
);
nums[0] = 10;
console.log(nums);

let [x1, ...result] = ['a', 'b', 'c'];

console.log(result);
console.log(typeof result);
console.log(result instanceof Object);
console.log(result instanceof Array);

console.log(Array.isArray(result));
