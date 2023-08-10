//--------------------var is function scoped---------------------------
var a = 100;
function one() {
  var a = 150;
  console.log(a);
}
console.log(a);
one();

var b = 100;
{
  var b = 150;
  console.log(b);
}
console.log(b);

//----------------------let is block scoped----------------------------
let c = 100;
function two() {
  let c = 150;
  console.log(c);
}
two();
console.log(c);

let d = 100;
{
  let d = 150;
  console.log(d);
}
console.log(d);

// -------------------Javascript is Lexical(Static) scoped, not a dynamic scoped language-------------------
var e = 0;

function three() {
  console.log(e);
  return e;
}

function four() {
  var e = 1;
  console.log(e);
  let res = three();
  console.log(res);
}

//Throws error as if three is assigned number, then the function declaration will be replaced with number and 3() will throw error
// var three = 3
three.n = 3 //this won't throw error as it is a property of function object
console.log(three);
four();
var three = 3;
console.log(three);

//-------------------------------------Variable shadowing---------------------------------
var varX = 10;
let letX = 20;

function five() {
  var varX = 11;
  let letX = 21;
  if (true) {
    var varX = 12;
    let letX = 22;
    // let varX = 12;   // Legal Shadowing
    // var letX = 22;   //Illeagal Shadowing
    console.log(varX);
    console.log(letX);
  }
  console.log(varX);
  console.log(letX);
  console.log("function x");
}
five();
console.log(varX);
console.log(letX);
