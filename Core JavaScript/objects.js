// ----------------------------------------------Object creation | Object constructure-------------
console.log(new Object());
console.log(new Object(null));
console.log(new Object(undefined));

let strObj = new Object("abc");
console.log(strObj);
console.log(typeof strObj);

let strObjItr = strObj[Symbol.iterator]();
console.log(strObjItr.next());
console.log(strObjItr.next());
console.log(strObjItr.next());
console.log(strObjItr.next());

strObj.x = 10;
strObj.y = 20;
console.log(strObj);
console.log(strObj[0]);
console.log(strObj["x"]);
console.log(strObj["y"]);

let arrObj = new Object([5, 0, 0, undefined]);
console.log(arrObj);
console.log(typeof arrObj);

let arrObjItr = arrObj[Symbol.iterator]();
console.log(arrObjItr.next());
console.log(arrObjItr.next());
console.log(arrObjItr.next());
console.log(arrObjItr.next());
console.log(arrObjItr.next());

arrObj["x"] = 10;
arrObj["y"] = 20;
console.log(arrObj);
console.log(arrObj[0]);
console.log(arrObj.x);
console.log(arrObj.y);

let numObj = new Object(500);
console.log(numObj);

numObj.x = 10;
numObj.y = 20;
console.log(numObj);
console.log(numObj[0]);
console.log(numObj.x);
console.log(numObj.y);

//-----------------------------------------------Object creation | Object literal------------------

let age = 26;
let sub_division = "state";
let keyArr1 = [1, 2];
let keyArr2 = [3, 4];
let keyBool = true;
let keyObj = { a: 1 };
let person = {
	1: "one",
	first_name: "John",
	["last name"]: "Doe",
	"nick name": "Jo",
	age,
	[sub_division]: "LA",
	country: "US",
	[keyArr1]: "One Two",
	[false]: "falseValue",
};
person.gender = "M";
person["role designation"] = "Software Engineer";
person[keyArr2] = "Three Four";
person[keyBool] = "Boolean Key";
person[keyObj] = "Object Key";

console.log(person);
console.log(person[1]);
console.log(person.age);
console.log(person["age"]);
console.log(person["last name"]);
console.log(person.state);
console.log(person["state"]);
console.log(person[sub_division]);
console.log(person[keyArr1]);
console.log(person[keyArr2]);
console.log(person[keyBool]);
console.log(person[keyObj]);
console.log(Object.getOwnPropertyDescriptors(person));

console.log(Object.keys(person));

//-----------------------------------------------Object creation | Object.create()------------------
function Employee(name, role) {
	this.name = name;
	this.role = role;
	this.company = "Google";
}

Employee.prototype.greet = function () {
	return `Hello world...!`;
};
Employee.prototype.info = function () {
	return `name: ${this.name}, \n role: ${this.role}, \n company: ${this.company} \n pay: ${this.pay}`;
};

// let employee1 = Object.create(new Employee(), {
let employee1 = Object.create(Employee.prototype, {
	pay: {
		value: "$100k",
		writable: true,
		enumerable: true,
		configurable: true,
	},
});

// Default data descriptors in general
// writable: true,
// enumerable: true,
// configurable: true,

employee1.bonus = "$10k";

console.log(Object.getOwnPropertyDescriptors(employee1));
console.log(Object.getPrototypeOf(employee1));
console.log(employee1.greet());
console.log(employee1.info());

console.log(employee1);
console.log(employee1.__proto__);
console.log(employee1.__proto__.__proto__);
console.log(employee1.__proto__.__proto__.__proto__);
console.log(employee1.constructor);
console.log(employee1.__proto__.constructor);
console.log(employee1.__proto__.__proto__.constructor);
// console.log(employee1.__proto__.__proto__.__proto__.constructor);

//-----------------------------------------------Object creation | Object.assign()------------------
let employee2 = Object.assign({}, employee1, { city: "New York" });
console.log(employee2);
console.log(Object.getPrototypeOf(employee2));
console.log(employee2.__proto__);
console.log(employee2.__proto__.__proto__);

let objAsn1 = {
	a: 1,
	b: 2,
	c: {
		d: 30,
		e: 40,
	},
};

let objAsn2 = Object.assign({}, objAsn1, { f: 5 });

console.log(objAsn2);
objAsn1.a = 100;
objAsn1.c.d = 300;
console.log(objAsn2);

let objAsn3 = Object.assign({}, JSON.parse(JSON.stringify(objAsn1)));

console.log(objAsn3);
objAsn1.a = 1000;
objAsn1.c.d = 3000;
console.log(objAsn3);

//---------------------------------Object creation | Object.defineProperty() & Object.defineProperties()------------------
// Default data descriptors through  Object.defineProperty() & Object.defineProperties()
// writable: false,
// enumerable: false,
// configurable: false,

let objDfn1 = {};

Object.defineProperty(objDfn1, "a", {
	value: 1,
});

Object.defineProperty(objDfn1, "b", {
	value: 2,
	enumerable: true,
});

Object.defineProperty(objDfn1, "c", {
	value: 3,
	writable: true,
	enumerable: true,
});

Object.defineProperty(objDfn1, "c", {
	value: 30,
	// writable: true,
	// enumerable: true,
});

objDfn1.b = 20;
objDfn1.c = 300;

console.log(objDfn1);

Object.defineProperty(objDfn1, "c", {
	writable: false,
});

// Object.defineProperty(objDfn1, "c", {
// 	enumerable: false,
// });

Object.defineProperty(objDfn1, "d", {
	value: 4,
	writable: true,
	enumerable: true,
	configurable: true,
});

Object.defineProperty(objDfn1, "d", {
	value: 5,
});

Object.defineProperty(objDfn1, "d", {
	enumerable: false,
});

console.log(
	Object.defineProperty(objDfn1, "e", {
		value: 5,
	})
);

let objDfn2 = {};
Object.defineProperties(objDfn2, {
	a: {
		value: 1,
	},
	b: {
		value: 2,
		enumerable: true,
	},
	c: {
		value: 3,
		writable: true,
		enumerable: true,
	},
	d: {
		value: 4,
		writable: true,
		enumerable: true,
		configurable: true,
	},
});

console.log(objDfn2);

Object.defineProperties(objDfn2, {
	c: {
		value: 30,
	},
	// c: {
	// 	enumerable: false,
	// }
	d: {
		value: 40,
		writable: false,
	},
});

console.log(objDfn2);

//------------------------Object.getOwnPropertyDescriptor() & Object.getOwnPropertyDescriptors()--------------

let objDsc1 = {
	a: 1,
	b: 2,
	c: 3,
};

console.log(Object.getOwnPropertyDescriptor(objDsc1, "a"));
console.log(Object.getOwnPropertyDescriptors(objDsc1));

//--------------------------------------------Object.getOwnPropertyNames()-------------------------------------
let objOpn1 = {
	a: 1,
	[Symbol.for("b")]: 2,
	[Symbol.for("c")]: 3,
};

console.log(Object.getOwnPropertyNames(objOpn1));
console.log(Object.getOwnPropertyDescriptors(objOpn1));
//--------------------------------------------Object.getOwnPropertySymbols()-------------------------------------
let objOps1 = {
	a: 1,
	[Symbol.for("b")]: 2,
	[Symbol.for("c")]: 3,
};

console.log(Object.getOwnPropertySymbols(objOps1));
console.log(Object.getOwnPropertyDescriptors(objOps1));

//--------------------------------------Defult properties of other data types--------------------------
let testStr = "test",
	testArr = ["t", "e", "s", "t"];

console.log(Object.getOwnPropertyDescriptors(testStr));
console.log(Object.getOwnPropertyDescriptors(testArr));

testArr[-100] = "-ve 100";
console.log(Object.getOwnPropertyDescriptors(testArr));

console.log(testArr);
for (let i of testArr) {
	console.log(i);
}
Object.defineProperty(testArr, "e", {
	enumerable: false,
}); //Not working as expected
console.log(Object.getOwnPropertyDescriptors(testArr));
console.log(testArr);

//--------------------------------------------Object.prototype.hasOwnProperty()-------------------------------------
let bSymbol = Symbol.for("b");
let cSymbol = Symbol.for("c");
let objHop1 = {
	a: 1,
	[bSymbol]: 2,
	[cSymbol]: 3,
};

console.log(objHop1.hasOwnProperty("a"));
console.log(objHop1.hasOwnProperty(bSymbol));
console.log([10, 20, 30].hasOwnProperty(0));
console.log([10, 20, 30].hasOwnProperty(3));
console.log([10, 20, 30].hasOwnProperty("length"));

let objHop2 = {
	a: 1,
	b: 2,
	c: 3,
	hasOwnProperty: function () {
		return false;
	},
};

console.log(objHop2.hasOwnProperty("a"));

let objHop3 = Object.create(null);
objHop3.a = 1;
objHop3.b = 2;
objHop3.c = 3;
// console.log(objHop3.hasOwnProperty("a"))

//--------------------------------------------Object.hasOwn()-------------------------------------
let objHo1 = {
	a: 1,
	b: 2,
	c: 3,
	hasOwnProperty: function () {
		return false;
	},
};

console.log(Object.hasOwn(objHo1, "a"));

let objHo2 = Object.create(null);
objHo2.a = 1;
objHo2.b = 2;
objHo2.c = 3;

console.log(Object.hasOwn(objHo2, "a"));

//--------------------------------------------Object.is()-------------------------------------
console.log(Object.is(0, 0));
console.log(Object.is(+0, -0));
console.log(+0 === -0);
console.log(Object.is(5, 5));

console.log(Object.is());
console.log(Object.is(0, 0));
console.log(Object.is("", ""));
console.log(Object.is([], []));
console.log(Object.is({}, {}));
console.log(Object.is(25, 25));
console.log(Object.is("abc", "abc"));
console.log(Object.is("abc", "abd"));
console.log(Object.is(null, null));
console.log(Object.is(undefined, undefined));
const objA = { a: 1 };
const objB = { a: 1 };
const objC = objA;
console.log(Object.is(objA, objB));
console.log(Object.is(objA, objC));
console.log(Object.is(0, 0));
console.log(Object.is(0, -0));
console.log(Object.is(-0, -0));
console.log(Object.is(NaN, 0 / 0));
console.log(Object.is(NaN, Number.NaN));
console.log(NaN === NaN);
// ---------------------------------------Object.isExtensible() | Object.preventExtension() ---------------------------------
// Prevents extension and prototype reassignment, Allows deletion and value modification and config modification
let objPrevEx1 = {
	a: 1,
	b: 2,
	c: 3,
};

console.log(objPrevEx1);
console.log(Object.getOwnPropertyDescriptors(objPrevEx1));

console.log(Object.isExtensible(objPrevEx1));
console.log(Object.isSealed(objPrevEx1));
console.log(Object.isFrozen(objPrevEx1));
Object.preventExtensions(objPrevEx1);
console.log(Object.isFrozen(objPrevEx1));
console.log(Object.isSealed(objPrevEx1));
console.log(Object.isExtensible(objPrevEx1));

try {
	objPrevEx1.d = 4;
} catch (err) {
	console.log(err);
}

Object.defineProperty(objPrevEx1, "e", {
    value: 5,
});
try {
} catch (err) {
	console.log(err);
}

try {
	Object.defineProperty(objPrevEx1, "a", {
		value: 10,
	});
} catch (err) {
	console.log(err);
}
console.log(objPrevEx1);

try {
	Object.defineProperty(objPrevEx1, "a", {
		value: 10,
		enumerable: false,
	});
} catch (err) {
	console.log(err);
}

console.log(objPrevEx1.__proto__);
try {
	Object.setPrototypeOf(objPrevEx1, null);
} catch (err) {
	console.log(err);
}

console.log(objPrevEx1);
delete objPrevEx1.c;
console.log(objPrevEx1);

// ----------------------------------------- Object.isSeal() | Object.seal()--------------------------------------------
// Prevents extension and prototype reassignment and deletion and config modification(except writable), Allows value to modify
let objSeal1 = {
	a: 1,
	b: 2,
	c: 3,
};
console.log(objSeal1);
console.log(Object.getOwnPropertyDescriptors(objSeal1));

console.log(Object.isExtensible(objSeal1));
console.log(Object.isSealed(objSeal1));
console.log(Object.isFrozen(objSeal1));
Object.seal(objSeal1);
console.log(Object.isFrozen(objSeal1));
console.log(Object.isSealed(objSeal1));
console.log(Object.isExtensible(objSeal1));

try {
	Object.defineProperty(objSeal1, "d", {
		value: 4,
	});
} catch (err) {
	console.log(err);
}

try {
	Object.defineProperty(objSeal1, "a", {
		value: 10,
	});
} catch (err) {
	console.log(err);
}
console.log(objSeal1);

try {
	Object.defineProperty(objSeal1, "b", {
		value: 20,
		enumerable: false,
	});
} catch (err) {
	console.log(err);
}

objSeal1.b = 200;
console.log(objSeal1);
try {
	Object.defineProperty(objSeal1, "b", {
		value: 20,
		writable: false,
	});
} catch (err) {
	console.log(err);
}
objSeal1.b = 200;
console.log(objSeal1);

console.log(objSeal1.__proto__);
try {
	Object.setPrototypeOf(objSeal1, null);
} catch (err) {
	console.log(err);
}

console.log(objSeal1);
delete objSeal1.c;
console.log(objSeal1);

// -----------------------------------------Object.freeze-----------------------------------------
// Prevents extension and prototype reassignment and deletion and config modification(including writable) and value modification

let objFreeze1 = {
	a: 1,
	b: 2,
	c: 3,
};
console.log(objFreeze1);
console.log(Object.isExtensible(objFreeze1));
console.log(Object.isSealed(objFreeze1));
console.log(Object.isFrozen(objFreeze1));
Object.freeze(objFreeze1);
console.log(Object.isFrozen(objFreeze1));
console.log(Object.isSealed(objFreeze1));
console.log(Object.isExtensible(objFreeze1));

try {
	Object.defineProperty(objFreeze1, "d", {
		value: 4,
	});
} catch (err) {
	console.log(err);
}

try {
	Object.defineProperty(objFreeze1, "a", {
		value: 10,
	});
} catch (err) {
	console.log(err);
}

try {
	Object.defineProperty(objFreeze1, "a", {
		value: 10,
		enumerable: false,
	});
} catch (err) {
	console.log(err);
}

objFreeze1.a = 100;
console.log(objFreeze1);
try {
	Object.defineProperty(objFreeze1, "a", {
		value: 10,
		writable: false,
	});
} catch (err) {
	console.log(err);
}

console.log(objFreeze1.__proto__);
try {
	Object.setPrototypeOf(objFreeze1, null);
} catch (err) {
	console.log(err);
}

console.log(objFreeze1);
delete objFreeze1.c;
console.log(objFreeze1);

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
console.log(Object.getOwnPropertyDescriptors(funcObj));
console.log(funcObj.name);
console.log(funcObj.length);
console.log(funcObj.caller);
console.log(funcObj.arguments);
console.log(funcObj.prototype);

console.log(funcObj.printProps());
console.log(funcObj.toString());

//----------------------------------------Object.prototype.toString()------------------------------
let objTStr1 = {
	a: 1,
	b: 2,
	c: 3,
};
let objTStr2 = new Object("ABCD");
let objTStr3 = new Object(5);

console.log(objTStr1);
console.log(objTStr1.toString());

console.log(objTStr2);
console.log(objTStr2.toString());

console.log(objTStr3);
console.log(objTStr3.toString());

//--------------------------------------------Prototypal Inheritance-------------------------------

let emp1 = {
	name: "John Doe",
};
console.log(emp1);
console.log(emp1.__proto__);
console.log(emp1.hasOwnProperty("name"));

let emp2 = Object.create(null, { name: { value: "Jane Doe", enumerable: true } });
console.log(emp2);
console.log(emp2.__proto__);
try {
	console.log(emp2.hasOwnProperty("name"));
} catch (err) {
	console.log(err);
}

let emp3 = Object.create(emp1);
emp3.role = "HR";

console.log(emp3.__proto__ === emp1);
console.log(emp3.__proto__);
console.log(emp3.__proto__.__proto__);
console.log(emp3.__proto__.__proto__.__proto__);

console.log(emp3);
console.log(emp3.name);
console.log(Object.hasOwn(emp3, "name"));
console.log(emp3.hasOwnProperty("name"));
console.log(emp3.hasOwnProperty("role"));

let emp4 = Object.assign(emp3, { pay: "$100k" });

console.log(emp3);
console.log(emp4);
console.log(emp3 === emp4);

let x = {
	a: {
		b: {
			c: 1,
		},
	},
};

console.log(x['abc'])
