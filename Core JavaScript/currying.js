/*
    Currying in JavaScript is a functional programming technique that transforms a function with multiple arguments into a sequence of functions, 
    each taking a single argument.
*/
//----------------------------------------------------------currying with bind------------------------------------------------------------
function add(a, b) {
    return a + b;
}

const add5 = add.bind(this, 5);
const add10 = add.bind(this, 10);

console.log(add5(1));
console.log(add10(1));

//----------------------------------------------------------currying with closure------------------------------------------------------------
function multiply(a) {
    return function (b) {
        return a * b;
    };
}

const multiplyBy5 = multiply(5);
const multiplyBy10 = multiply(10);

console.log(multiplyBy5(2));
console.log(multiplyBy10(2));

//----------------------------------------------------------------Examples--------------------------------------------------------------------
function logger(date, message) {
    return `Date : ${date} , Message : ${message}`;
}

console.log(logger("Jan", "Happy New Year"));

function curryLogger(func) {
    return function (date) {
        return function (message) {
            return func(date, message);
        };
    };
}

const curriedLogger = curryLogger(logger);
const septLogs = curriedLogger("sept");
const octLogs = curriedLogger("oct");

console.log(septLogs("Happy Teacher's Day"));
console.log(octLogs("Happy Dasara"));

function sum(a, b) {
    return a + b;
}

function curry(fn) {
    return function (a) {
        return function (b) {
            return fn(a, b);
        };
    };
}

function infiniteCurry(fn) {
    return function recurse(a) {
        return function (b) {
            if (b) {
                return recurse(fn(a, b));
            }
            return a;
        };
    };
}

let curriedSum = curry(sum);
console.log(curriedSum(1)(2));

let infiniteCurriesSum = infiniteCurry(sum);
console.log(infiniteCurriesSum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(11)(12)());

//---------------------------------------------------------Function Composition----------------------------------------------------------
const compose = function (functions) {
    return function (x) {
        // return functions.reduceRight((val, fn) => fn(val), x);
        return functions.reduce((val, fn) => fn(val), x);
    };
};

const encrypt = compose([(x) => x + 1, (x) => x * 5, (x) => x ** 2]);

console.log(encrypt(2));

//--------------------------------------------------- Currying with Function Chaining----------------------------------------------------

let add1 = (x) => x + 1;
let mul5 = (x) => x * 5;
let pow2 = (x) => x ** 2;

function applyOperations(operations, value) {
    return operations.reduce((currentValue, operation) => operation(currentValue), value);
}

function createPipeline(...operations) {
    return function (value) {
        return applyOperations(operations, value);
    };
}

// Using the curried function to create pipelines
const pipeline1 = createPipeline(add1, mul5, pow2);
console.log("Result:", pipeline1(2));

const pipeline2 = createPipeline(add1, mul5, pow2);
console.log("Result:", pipeline2(3));

const pipeline3 = createPipeline(mul5, pow2, mul5);
console.log("Result:", pipeline3(3));

const pipeline4 = createPipeline(mul5, pow2, add1);
console.log("Result:", pipeline4(3));

const pipeline5 = createPipeline(mul5, pow2, add1, mul5);
console.log("Result:", pipeline5(3));
