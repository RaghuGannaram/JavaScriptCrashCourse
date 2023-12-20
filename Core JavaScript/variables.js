//--------------------------------------------------var----------------------------------------
console.log(a);

var a = 10;
var a = 11; //var variable can be redeclared

// let a = 10;  //Syntax Error : Identifier 'a' has already been declared
try {
    eval(`let a = 100`);
} catch (err) {
    console.log(err);
}

console.log(a);

//--------------------------------------------------let----------------------------------------
// console.log(b)
try {
    console.log(b);
} catch (err) {
    console.log(err);
}

//Temporal Dead Zone for b
let b = 20;
// let b = 21; //let variable cann't be redeclared. Can not be showcased with try catch as it is block scoped.

try {
    eval(`var b = 200;`);
} catch (err) {
    console.log(err);
}

console.log(b);

//--------------------------------------------------const----------------------------------------
// console.log(c)
try {
    console.log(c);
} catch (err) {
    console.log(err);
}

//Temporal Dead Zone for c
const c = 30;
// const c = 31; //const variable cann't be redeclared. Can not be showcased with try catch as it is block scoped.

try {
    eval(`var c = 300;`);
} catch (err) {
    console.log(err);
}

try {
    c = 300;
} catch (err) {
    console.log(err);
}

console.log(c);

var d;
let e;
// const f;   //const variable can't be declared without initialization.

/**
 * variable without declaration are global
 * var is function scoped
 * let and const are block scoped
 */

i = 10;
function dummy() {
    i = 11;
    j = 21;
    var k = 30;
    console.log(i);
    console.log(j);
    console.log(k);
}

console.log(i);
console.log(j);
try {
    console.log(k);
} catch (err) {
    console.log(err);
}

dummy();

console.log(i);
console.log(j);
try {
    console.log(k);
} catch (err) {
    console.log(err);
}
