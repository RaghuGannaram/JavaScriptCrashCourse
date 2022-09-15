console.log(a);
var a = 10;
// let a = 10;  //Syntax Error : a is already defined

// console.log(b)
//Temporal Dead Zone for b
let b = 20;
// var b =20;  //Syntax Error : b is already defined

// console.log(c)
//Temporal Dead Zone for c
const c = 30;

//var variable can be redeclared
var d = 300;
var d = 500;

//let variable cann't be redeclared
let e = 400;
// let e = 400;

//const variable can't be declared without initialization.
var f;
let g;
// const h;

i = 10;
function dummy() {
	i = 11;
	j = 20;
	console.log(i);
	console.log(j);
}

j = 21;
console.log(i);
console.log(j);
dummy();
console.log(i);
console.log(j);
