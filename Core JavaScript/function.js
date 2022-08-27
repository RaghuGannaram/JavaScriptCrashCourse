// Function Statement
console.log(one);
one();
function one() {
  console.log("function one");
}

// Function Expression with Anonymus function
console.log(two);
// two()
var two = function () {
  console.log("function two");
};

//Function Expression with Arrow function
console.log(three);
// three()
var three = () => {
  console.log("function three");
};

//Function Expression with Named function
console.log(four);
// four()
var four = function fourName() {
  console.log(fourName);
  return "function four";
};
console.log(four);
console.log(four());
// console.log(fourName)
// console.log(fourName());

//Anonymus function
// console.log(five)
// five()
(function five() {
  console.log("Immediate Invocable Function");
})()
(function funcOne() {
  console.log("Hello from funcOne ---|", this);
})();

let context = { parent: "context" };

context.funcTwo = function () {
  this.name = "funcTwo";
  console.log("Hello from funcTwo ---|", this);
};
context.funcTwo();

function FuncThree() {
  this.name = "funcThree";
  console.log("Hello from funcThree ---|", this);
}
let myfunc = new FuncThree();
console.log(myfunc);
console.log(myfunc.__proto__);
console.log(myfunc.__proto__.constructor);
console.log(myfunc.__proto__.__proto__ === Object.prototype);
