//-----------------------------------------------Function Statement-----------------------------------------
function funcStmt(name) {
	return `Hello ${name}..! Executed by ${funcStmt.name}`;
}

console.log(funcStmt("JOhn Doe"));

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
		c = param3;
	d = restParams;

	console.log("Type of arguments", typeof arguments);
	console.log(`Listof argumets passed, ${[...arguments]}`);

	console.log(`Name of the function : ${funcProp.name}`);
	console.log(`Arguments of the function : ${[...funcProp.arguments]}`);
	console.log(`Length of function arguments : ${funcProp.length}`);
	console.log(`Calling function : ${funcProp.caller.name}`);
	console.log(`Calling calling function : ${funcProp.caller.caller.name}`);
}

function callerFunc() {
	funcProp(1, 2, 3, 4, 5);
}
callerFunc();

//------------------------------------------Function.prototype.toString()--------------------------------------------
var funcProto = function () {
	console.log("Hello world...!");
};
console.log(funcProto.toString());

//-----------------------------------------------Function as Object-----------------------------------------

function funcObj(param1, param2, param3) {}

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
console.log(funcObj.prototype);

console.log(funcObj.printProps());
console.log(funcObj.toString());

//-----------------------------------------------Function on a context-----------------------------------------
const context = {
	firstName: "John",
	lastName: "Doe",
};

context.info = function () {
	return `First name: ${this.firstName} | Last name : ${this.lastName}`;
};
console.log(context.info());

function greet() {
	return `Hello ${this.firstName} ${this.lastName}...!`;
}
console.log(greet.call(context));

//-----------------------------------------------Once Function-----------------------------------------
function once(func) {
	let called = false;

	return function () {
		if (!called) {
			called = true;
			return func();
		}
		return;
	};
}

var greetOnce = once(function () {
	return `Greeting only once...!`;
});

console.log(greetOnce());
console.log(greetOnce());
console.log(greetOnce());

//-----------------------------------------------Nth time callable Function-----------------------------------------
function NthTimeCallable(func, n){
	let count = 0;

	return function(){
		if(count<n){
			count++;
			return func();
		}
		return `${func.name} has already been called ${count} times...!`
	}
}

var greetThreePeople = NthTimeCallable(function Greet(){
	return `Hello guys...!`;
}, 3)

console.log(greetThreePeople())
console.log(greetThreePeople())
console.log(greetThreePeople())
console.log(greetThreePeople())