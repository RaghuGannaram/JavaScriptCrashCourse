//------------------------------------------------global-------------------------------------------
var globalVar = "I am global";

function test1() {
    console.log(globalVar);
}

test1();
console.log(globalVar);

//-----------------------------------------------local-------------------------------------------
function test2() {
    var localVar = "I am local";
    console.log(localVar);
}

test2();
try {
    console.log(localVar);
} catch (err) {
    console.log(err);
}

//-----------------------------------------------block-------------------------------------------
function test3() {
    if (true) {
        let blockVar = "I am block-scoped";
        console.log(blockVar);
    }
    try {
        console.log(blockVar);
    } catch (err) {
        console.log(err);
    }
}

test3();

//----------------------------------------------script-------------------------------------------
// In a script file
var scriptVar = "I am script-scoped";

function test4() {
    console.log(scriptVar); // Accessible here
}

try {
    console.log(window.scriptVar); // undefined in strict mode or if the script is a module
} catch (err) {
    console.log(err);
}

test4();

//-----------------------------------------------module------------------------------------------
// // In a module file, e.g., module.js
// export var moduleVar = "I am module-scoped";

// // In another file
// import { moduleVar } from './module.js';
// console.log(moduleVar); // Accessible here

// console.log(window.moduleVar); // Not available in global scope

//--------------------------------------var is function scoped---------------------------------------
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

//---------------------------------------let is block scoped----------------------------------------
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
three.n = 3; //this won't throw error as it is a property of function object
console.log(three);
four();
var three = 3;
console.log(three);

function five() {
    console.log(x);
}

// var x = 1;
five();
var x = 1;

//-------------------------------------Variable shadowing---------------------------------
var varX = 10;
let letX = 20;

function six() {
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
six();
console.log(varX);
console.log(letX);
