//--------------------------------------------------------SyntaxError--------------------------------------
try {
    // eval('console.log("Hello";');                        // SyntaxError: missing ) after argument list
    //
    // eval('var a == 2;');                                 // SyntaxError: Unexpected token ==
    //
    // eval('var if = 5;');                                 // SyntaxError: Unexpected token if
    //
    // eval('console.log("Hello World);');                  // SyntaxError: Invalid or unexpected token
    //
    // eval('var obj = {a: 1, b: 2,};');                    // SyntaxError in some JavaScript engines due to trailing comma
    //
    // new RegExp('\\');                                    // SyntaxError: Invalid regular expression: missing /
    //
    // eval('function () {}');                              // SyntaxError: Function statements require a function name
    //
    // eval('await someFunction();');                       // SyntaxError: await is only valid in async function
} catch (err) {
    console.log(err);
}

//-------------------------------------------------------ReferenceError------------------------------------
try {
    // console.log(a);                                      // ReferenceError: a is not defined
    //
    // console.log(b);                                      // ReferenceError: Cannot access 'b' before initialization
    // let b = 5;
    //
    // if (true) {
    //     let c = 10;
    // }
    // console.log(c);                                      // ReferenceError: c is not defined
    //
    // foo();                                               // ReferenceError: foo is not defined
    // var foo = function() {
    //     console.log('bar');
    // }
} catch (err) {
    console.log(err);
}

//----------------------------------------------------------TypeError---------------------------------------
try {
    // const num = 5;
    // num = 10;                                            // TypeError: Assignment to constant variable
    //
    // num();                                               // TypeError: num is not a function
    //
    // const fn = () => {};
    // const instance = new fn();                           // TypeError: fn is not a constructor
    //
    // const obj = null;
    // obj.prop = 123;                                      // TypeError: Cannot set property 'prop' of null
    // console.log(obj.x)                                   // TypeError: Cannot read property 'x' of null
} catch (err) {
    console.log(err);
}

//-----------------------------------------------------------RangeError--------------------------------------
try {
    // const numArray = new Array(-1);                      // RangeError: Invalid array length
    // const numArray = new Array(Infinity);                // RangeError: Invalid array length
    //
    // let date = new Date("Invalid Date String");
    // console.log(date)
    // console.log(date.toISOString());                     // RangeError: Invalid time value
    //
    // let num = 2.345;
    // console.log(num.toFixed(101));                       // RangeError: toFixed() digits argument must be between 0 and 100
    //
    // let longString = "a".repeat(Number.MAX_SAFE_INTEGER);// RangeError: Invalid string length
    // let longArray = new Array(Number.MAX_SAFE_INTEGER);  // RangeError: Invalid array length
} catch (err) {
    console.log(err);
}

function recurse() {
    try {
        recurse();
    } catch (err) {
        console.log(err);
        // if (err instanceof RangeError) {
        //     console.log(err);
        // } else {
        //     throw err; // rethrow if it's not a RangeError
        // }
    }
}
recurse(); // RangeError: Maximum call stack size exceeded

//-----------------------------------------------------------URIError------------------------------------------
try {
    // decodeURIComponent("%");                              // URIError: URI malformed
} catch (err) {
    console.log(err);
}

//-----------------------------------------------------------EvalError-----------------------------------------
// EvalError Example (Rare)
// Note: Modern JavaScript engines do not throw EvalError under normal circumstances
try {
    throw new EvalError("Custom EvalError");
} catch (err) {
    console.log(err);
}

//--------------------------------------------------------CustomError(Non-standard)---------------------------------
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

try {
    // Recursion that is too deep can lead to an InternalError, e.g., "too much recursion"
    function deepRecursion(depth) {
        if (depth > 10) {
            throw new CustomError("too much recursion");
        }
        deepRecursion(++depth);
    }
    deepRecursion(0);
} catch (err) {
    console.log(err);
}