//-----------------------------------------------Function Statement----------------------------------------
function funcStmt(name) {
    return `Hello ${name}..! Executed by ${funcStmt.name}`;
}

console.log(funcStmt("John Doe"));
console.log(funcStmt.toString());

//-------------------------------------------Function Expression (named)------------------------------------
var namedFuncExpr = function funcName(name) {
    return `Hello ${name}..! Executed by ${namedFuncExpr.name}`;
};

console.log(namedFuncExpr("John Doe"));

try {
    console.log(funcName("John Doe"));
} catch (err) {
    console.log(err);
}

//------------------------------------------Function Expression (anonymous)----------------------------------
var anonymousFuncExpr = function (name) {
    return `Hello ${name}..! Executed by ${anonymousFuncExpr.name}`;
};

console.log(anonymousFuncExpr("John Doe"));

//--------------------------------------------Function Expression (arrow)-------------------------------------
var arrFuncExpr = (name) => {
    return `Hello ${name}..! Executed by ${arrFuncExpr.name}`;
};

console.log(arrFuncExpr("John Doe"));

//----------------------------------------------Anonymus Function----------------------------------------------
try {
    // function (){            //Syntax error | Function statement requires a function name
    // 	return `Hello world`;
    // }
} catch (err) {
    // console.log(err)
}

try {
    eval(`
		function(){
			return "Hello world";
		}
	`);
} catch (err) {
    console.log(err);
}

//---------------------------------------Immediatey Invokable Function Expression---------------------------
(function () {
    console.log(`Hello world...!`);
})();

(function (name) {
    console.log(`Hello ${name}...!`);
})("John Doe");

//-----------------------------------------------Function Properies-----------------------------------------

function propsFunc(param1, param2, param3, ...restParams) {
    console.log(param1, param2, param3, restParams);

    console.log(arguments, this, new.target);

    console.log(`Name of the function 				:`, propsFunc.name);
    console.log(`Length of function arguments 		:`, propsFunc.length);
    console.log(`Prototype of function arguments	:`, propsFunc.prototype);
    console.log(`Arguments of the function 			:`, propsFunc.arguments);
    console.log(`Calling function 					:`, propsFunc.caller.name);
    console.log(`Calling calling function 			:`, propsFunc.caller.caller.name);
    console.log(`Calling calling calling funcion   	:`, propsFunc.caller.caller.caller.name);
}

function callerFunc() {
    propsFunc(1, 2, 3, 4, 5);
}

function callerCallerFunc() {
    callerFunc();
}

function callerCallerCallerFunc() {
    callerCallerFunc();
}

callerCallerCallerFunc();

//------------------------------------------Function.prototype.toString()--------------------------------------------
var protoFunc = function () {
    console.log("Hello world...!");
};
console.log(protoFunc.toString());

//-----------------------------------------------Function as Object-----------------------------------------

function objFunc(param1, param2, param3, param4) {
    return `Hello world...!`;
}

console.log(objFunc);

objFunc.a = 1;
objFunc.b = 2;
objFunc.c = 3;

objFunc.printProps = function () {
    return `a: ${this.a} | b:${this.b} | c: ${this.c}`;
};

console.log(objFunc);
console.log(objFunc.name);
console.log(objFunc.length);
console.log(objFunc.arguments);
console.log(objFunc.prototype);

console.log(objFunc.printProps());
console.log(objFunc());
console.log(objFunc.toString());

//-----------------------------------------------Function on a context-----------------------------------------
const context = {
    firstName: "John",
    lastName: "Doe",
};

var firstName = "Jane";
var lastName = "Doe";

context.info = function () {
    return `First name: ${this.firstName} | Last name : ${this.lastName}`;
};
console.log(context.info());

function greet(salutation) {
    return `Hello ${salutation} ${this.firstName} ${this.lastName}...!`;
}
console.log(greet.call(context, "Mr."));
console.log(greet.call({ firstName, lastName }, "M."));

//-----------------------------------------------Once Function-----------------------------------------
function once1(func) {
    let called = false;

    return function () {
        if (!called) {
            called = true;
            return func();
        }
        return;
    };
}

var greetOnce1 = once1(function () {
    return `Greeting only once...!`;
});

console.log(greetOnce1());
console.log(greetOnce1());
console.log(greetOnce1());

function once2(func) {
    var ran = false,
        memo;
    return function () {
        if (ran) return memo;
        ran = true;
        memo = func.apply(this, arguments);
        func = null;
        // memo = func();
        return memo;
    };
}
let global = 1;

const shouldNotBeCalledAgain = function (k) {
    global += k;
    return global;
};
var incrementGlobal = once2(shouldNotBeCalledAgain);
// console.log(shouldNotBeCalledAgain(10));
console.log(incrementGlobal(10));
console.log(incrementGlobal(10));
console.log(incrementGlobal(10));

//-----------------------------------------------Nth time callable Function-----------------------------------------
function NthTimeCallable(func, n) {
    let count = 0;

    return function () {
        if (count < n) {
            count++;
            return func();
        }
        return `${func.name} has already been called ${count} times...!`;
    };
}

var greetThreePeople = NthTimeCallable(function Greet() {
    return `Hello bro...!`;
}, 3);

console.log(greetThreePeople());
console.log(greetThreePeople());
console.log(greetThreePeople());
console.log(greetThreePeople());

//-------------------------------------------this in Arrow Fn vs Fn statement-----------------------------------------

function fnStatement() {
    console.log(this);
}
const fnArrow = () => {
    console.log(this === global);
};

fnStatement();
fnArrow();

const scopeObj = {
    state: "simple state",
    fnStatement: function () {
        console.log(this);
    },
    fnArrow: () => {
        console.log(this);
    },
};
const state = "global state";
scopeObj.fnStatement();
scopeObj.fnArrow();

const enclosingObj = {
    state: "enclosing state",
    fn: function () {
        scopeObj.fnArrow();
    },
};
enclosingObj.fn();
