"use strict";

// 1: Variable Declarations Required
var declaredVar = 20; // Correct
try {
    undeclaredVar = 10; // Error: undeclared variable
} catch (err) {
    console.error(err);
}

// 2: Silent Errors Turn to Exceptions
try {
    Object.defineProperty({}, 'prop', { value: 'a', writable: false }).prop = 'b';
} catch (err) {
    console.error(err);
}

// 3: No 'with' Statement
try {
    // with (Math) { x = cos(2); } // Error: with is disallowed
} catch (err) {
    console.error(err);
}

// 4: 'this' in Functions

function testThis() {
    return this;
}
console.log(testThis()); // undefined in strict mode

// 5: Immutable Primitives

try {
    undefined = 5; // Error: immutable primitive
} catch (err) {
    console.error(err);
}

// 6: Restricted Variable Names

try {
    var interface = 'test'; // Error: reserved keyword
} catch (err) {
    console.error(err);
}

// 7: Unique Function Parameters

try {
    function duplicateParamTest(a, a) { // Error: duplicate names
        return a;
    }
} catch (err) {
    console.error(err);
}

// 8: Restrictions on 'eval' and 'arguments'

var x = 2;
console.log(eval('var x = 5; x')); // 5
console.log(x); // 2, not affected by eval

function testArguments(a) {
    arguments[0] = 99;
    return a; // Not affected by the change to arguments
}
console.log(testArguments(10)); // 10

// 9: 'arguments.callee' and 'arguments.caller' Forbidden

try {
    var testCaller = function() {
        // var caller = arguments.caller; // Error: forbidden
    };
    testCaller();
} catch (err) {
    console.error(err);
}

// 10: Safer 'eval'

eval('var y = 10;');
try {
    console.log(y); // Error: y is not defined
} catch (err) {
    console.error(err);
}

// 11: Restrictions on 'delete' Operator

var z = 10;
try {
    // delete z; // Error: can't delete variable
} catch (err) {
    console.error(err);
}

// 12: Octal Literals Disallowed

try {
    // var octal = 023; // Error: octal literals are forbidden
} catch (err) {
    console.error(err);
}