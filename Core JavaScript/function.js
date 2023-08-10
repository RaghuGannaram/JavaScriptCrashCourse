//-----------------------------------------------Function Statement-----------------------------------------
function funcStmt(name) {
	return `Hello ${name}..! Executed by ${funcStmt.name}`;
}

console.log(funcStmt("John Doe"));
console.log(funcStmt.toString());

//-----------------------------------------------Function Expression-----------------------------------------
var funcExpr = function (name) {
	return `Hello ${name}..! Executed by ${funcExpr.name}`;
};

console.log(funcExpr("John Doe"));

//--------------------------------------Function Expression with Arrow functions---------------------------
var funcExprArr = (name) => {
	return `Hello ${name}..! Executed by ${funcExprArr.name}`;
};

console.log(funcExprArr("John Doe"));

//----------------------------------------------Named Function Expression-----------------------------------
var namedFuncExpr1 = function funcName(name) {
	return `Hello ${name}..! Executed by ${namedFuncExpr1.name}`;
};

console.log(namedFuncExpr1("John Doe"));

try {
	console.log(funcName("John Doe"));
} catch (err) {
	console.log(err);
}

//----------------------------------------------Anonymus Function-----------------------------------------
//Results in Syntax error | No use of try catch...
try {
	// function (){
	// 	return `Hello world`;
	// }
} catch (err) {
	// console.log(err)
}

//---------------------------------------Immediatey Invokable Function Expression---------------------------
(function () {
	console.log(`Hello world...!`);
})();

(function (name) {
	console.log(`Hello ${name}...!`);
})("John Doe");

//-----------------------------------------------Function Properies-----------------------------------------

function funcProp(param1, param2, param3, ...restParams) {
	let a = param1,
		b = param2,
		c = param3,
		d = restParams;

	console.log("Type of arguments : ", typeof arguments);
	console.log(`Listof argumets passed : ${[...arguments]}`);
	console.log(`Name of the function : ${funcProp.name}`);
	console.log(`Arguments of the function : ${[...funcProp.arguments]}`);
	console.log(`Length of function arguments : ${funcProp.length}`);
	console.log(`Calling function : ${funcProp.caller.name}`);
	console.log(`Calling calling function : ${funcProp.caller.caller.name}`);
}

function callerFunc() {
	funcProp(1, 2, 3, 4, 5);
}

function callerCallerFunc() {
	callerFunc();
}

callerCallerFunc();

//------------------------------------------Function.prototype.toString()--------------------------------------------
var funcProto = function () {
	console.log("Hello world...!");
};
console.log(funcProto.toString());

//-----------------------------------------------Function as Object-----------------------------------------

function funcObj(param1, param2, param3, param4) {
	return `Hello world...!`;
}

console.log(funcObj);

funcObj.a = 1;
funcObj.b = 2;
funcObj.c = 3;

funcObj.printProps = function () {
	return `a: ${this.a} | b:${this.b} | c: ${this.c}`;
};

console.log(funcObj);
console.log(funcObj.name);
console.log(funcObj.length);
console.log(funcObj.arguments);
console.log(funcObj.prototype);

console.log(funcObj.printProps());
console.log(funcObj());
console.log(funcObj.toString());

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
	fn : function(){
		scopeObj.fnArrow();
	}
}
enclosingObj.fn();