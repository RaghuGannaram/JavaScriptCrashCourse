/************************************************************************************************************************* */
function simpleIterator() {
  let init = 0;
  return {
    next: function () {
      init += 10;
      return { value: init, done: false };
    },
  };
}

let itr = simpleIterator();
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());

/************************************************************************************************************************* */
let nums = [5, 3, 7, 2, 6];
let numsIterator = nums[Symbol.iterator]();
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());

/************************************************************************************************************************* */
function squared(max) {
  return {
    [Symbol.iterator]: function () {
      let num = 0;
      return {
        next: function () {
          num++;
          if (num <= max) return { value: num * num, done: false };
          else return { value: undefined, done: true };
        },
      };
    },
  };
}

console.log([...squared(10)])

for (let sqr of squared(5)) {
  console.log(sqr);
}

for(let i in [4,5,3,6,1]) console.log(i)
for(let i of [4,5,3,6,1]) console.log(i)