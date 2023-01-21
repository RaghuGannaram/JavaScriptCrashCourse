/*------------------------------------------------Object Syntax----------------------------------------------* */
{
	let age = 26;
	// Using variable as object key-------
	let sub_division = "state";
	let person = {
		1: "one",
		first_name: "John",
		["last name"]: "Doe",
		"nick name": "Jo",
		age: age,
		[sub_division]: "LA",
		country: "US",
	};
	person.gender = "M";
	person["role designation"] = "Software Engineer";

	console.log(person);
	console.log(person[1]);
	console.log(person.age);
	console.log(person["age"]);
	console.log(person["last name"]);
	console.log(person.state);
	console.log(person["state"]);
	console.log(person[sub_division]);

	for (let key in person) console.log(key);
	for (let key in person) console.log(person[key]);
}
/*----------------------------------------------Object Creation----------------------------------------------*/
// Object literal syntax------------------1
{
	let emp1 = {
		obj: "emp1",
		first_name: "John",
		last_name: "Doe",
		id: 123,
		country: "US",
	};
	console.log(emp1);
	console.log(emp1.__proto__);
	console.log(emp1.__proto__.__proto__);
	console.log(emp1.__proto__.constructor);

	// Object function syntax-----------------2
	let emp2 = new Object({
		obj: "emp2",
		first_name: "Jane",
		last_name: "Doe",
		id: 456,
		age: 24,
	});
	console.log(emp2);
	console.log(emp2.__proto__);
	console.log(emp2.__proto__.__proto__);
	console.log(emp1.__proto__.constructor);

	// Object.create syntax-------------------3
	let emp31 = Object.create(emp2, {});
	console.log(emp31);
	console.log(Object.getPrototypeOf(emp31));

	let emp3 = Object.create(emp2);
	console.log(Object.getPrototypeOf(emp3));
	emp3.obj = "emp3";
	console.log(emp3.hasOwnProperty("first_name"));
	console.log(emp3.hasOwnProperty("last_name"));
	console.log(emp3.first_name);
	console.log(emp3.last_name);
	console.log(emp3);
	console.log(emp3.__proto__);
	console.log(emp3.__proto__.__proto__);
	console.log(emp3.__proto__.__proto__.__proto__);
	console.log(emp3.constructor);
	console.log(emp3.__proto__.constructor);
	console.log(emp3.__proto__.__proto__.constructor);
	for (let i in emp3) {
		console.log(i);
		console.log(emp3[i]);
		if (emp3.hasOwnProperty(i)) {
			console.log(i);
			console.log(emp3[i]);
		}
	}

	// Object.setPrototypeOf(emp3, emp1);
	console.log(emp3.__proto__);
	console.log(emp3.__proto__.__proto__);
	console.log(emp3.__proto__.__proto__.__proto__);

	console.log(Object.getPrototypeOf(emp2));
	console.log(Object.getPrototypeOf(emp3));
	console.log(emp1.isPrototypeOf(emp3));
	console.log(emp2.isPrototypeOf(emp3));
	console.log(emp3);
	console.log(emp3.first_name);
	console.log(emp3.last_name);
	console.log(emp3.id);
	console.log(emp3.name);

	// Object.assign syntax------------------4
	let emp4 = Object.assign(emp3, emp2, { height: 6 });
	console.log(emp3);
	console.log(emp4);
	console.log(Object.getPrototypeOf(emp4));
	console.log(emp1.isPrototypeOf(emp4));
	console.log(emp2.isPrototypeOf(emp4));
	console.log(emp3.isPrototypeOf(emp4));
	console.log(Object.prototype.isPrototypeOf(emp4));
	console.log(emp3.name);
	console.log(emp3.__proto__);
	console.log(emp3.__proto__.__proto__);
	console.log(emp3.__proto__.__proto__.__proto__);

	// Function in regular mode synatx--------5
	function employee(name, id) {
		let obj = {};
		// let obj ={name, id}
		obj.name = name;
		obj.id = id;
		return obj;
	}
	let emp5 = employee("Jane", 456);
	console.log(emp5);

	// Function in constructure mode syntax-----6
	function Employee(name, id) {
		this.name = name;
		this.id = id;
		//   console.log(this)
	}
	let emp6 = new Employee("James", "Cameron");
	console.log(emp6);
	console.log(emp6.__proto__);
	console.log(emp6.__proto__.__proto__);
	console.log(emp6.__proto__.__proto__.__proto__);
	console.log(emp6.__proto__.constructor);
	console.log(emp6.__proto__.constructor.prototype);
	console.log(emp6.__proto__.__proto__.constructor);
	console.log(emp6.__proto__.__proto__.constructor.prototype);

	console.log(Employee);
	console.log(Employee.prototype);

	let person = {
		firstName: "James",
		lastName: "Bond",

		get fullName() {
			return `${this.firstName} ${this.lastName}`;
		},

		set fullName(name) {
			[this.firstName, this.lastName] = name.split(" ");
		},
	};
}
/*------------------------------------------Object function----------------------------------------*/
{
	let person = new Object({
		name: "John Doe",
		// age: 24,
		// gender: "Male",
		// Married: false,
		// Hobbies: ["cricket", "Piano", "Movies"],
		// Address : {
		//   street_no : 123,
		//   city: "Newyork"
		// }
	});
	console.log(person); //at obj
	console.log(person.__proto__); //at Object
	console.log(person.__proto__.__proto__); // Object is inherited from null
	console.log(person.constructor);
	console.log(person.constructor.prototype);
	console.log(person.__proto__.constructor);
	console.log(typeof person.__proto__);
	console.log(typeof person.constructor);

	//Object.defineProperty Object.getOwnPropertyDescriptor-----------------------------------
	Object.defineProperty(person, "height", {
		value: 6,
		writable: false,
		enumerable: true,
		configurable: true,
	});
	person.height = 7;
	console.log(Object.getOwnPropertyDescriptor(person, "name"));
	console.log(Object.getOwnPropertyDescriptor(person, "height"));
	console.log(Object.getOwnPropertyDescriptors(person));

	//Object.defineProperties Object.getOwnPropertyDescriptors--------------------------------
	Object.defineProperties(person, {
		age: {
			value: 24,
			writable: true,
			enumerable: true,
		},
		gender: {
			value: "Male",
			writable: false,
			enumerable: true,
			configurable: true,
		},
		secrete: {
			value: "Top Secrete",
			writable: true,
			enumerable: false,
		},
	});
	person.gender = "Female";
	console.log(person);
	Object.defineProperty(person, "gender", {
		writable: true,
	});
	console.log(Object.getOwnPropertyDescriptors(person));

	person.gender = "Female";
	console.log(person);
	console.log(Object.getOwnPropertyDescriptors(person));

	console.log(person.secrete);
	person.secrete = "Elite secrete";
	console.log(person.secrete);

	// Object.preventExtension---------------------------------------------------------------------
	let alien = Object.assign({}, person);
	console.log(alien);
	console.log(Object.isExtensible(alien));
	console.log(Object.isSealed(alien));
	Object.preventExtensions(alien);
	console.log(Object.isSealed(alien));
	console.log(Object.isExtensible(alien));
	// Object.setPrototypeOf(alien, {})      //Prevents prototype reassignment
	alien.country = "US"; //Prevents new properties from being added
	delete alien.name; //Can delete existing property
	alien.age = 25; //Can Update existing properties unless writable is false
	console.log(alien);

	// Object.seal---------------------------------------------------------------------------------
	let mutant = Object.assign({}, person);
	console.log(mutant);
	console.log(Object.isExtensible(mutant));
	console.log(Object.isSealed(mutant));
	Object.seal(mutant);
	console.log(Object.isSealed(mutant));
	console.log(Object.isExtensible(mutant));
	// Object.setPrototypeOf(mutant, {})     //Prevents prototype reassignment
	mutant.country = "US"; //Prevents new properties from being added
	delete mutant.name; //Prevents deleting existing properties
	mutant.age = 25; //Can Update existing properties unless writable is false
	console.log(mutant);

	// Object.freeze--------------------------------------------------------------------------------
	let clonedPerson = Object.assign({}, person);
	console.log(clonedPerson);
	console.log(Object.isExtensible(clonedPerson));
	console.log(Object.isSealed(clonedPerson));
	console.log(Object.isFrozen(clonedPerson));
	Object.freeze(clonedPerson);
	console.log(Object.isFrozen(clonedPerson));
	console.log(Object.isSealed(clonedPerson));
	console.log(Object.isExtensible(clonedPerson));
	// Object.setPrototypeOf(clonedPerson, {}) //Prevents prototype reassignment
	clonedPerson.country = "US"; //Prevents new properties from being added
	delete clonedPerson.name; //Prevents deleting existing properties
	clonedPerson.age = 25; //Prevents updating existing properties
	console.log(clonedPerson);

	console.log(Object.keys(person));
	console.log(Object.values(person));
	console.log(Object.entries(person));
	console.log(
		Object.fromEntries([
			["a", 1],
			["b", 2],
			["c", 3],
		])
	);

	console.log(Object.getOwnPropertyNames(person));
	console.log(Object.getOwnPropertySymbols(person));
}
/*---------------------------------------------------Prototypes------------------------------------------------*/
{
	function Parent() {}
	console.log(Parent.__proto__ === Function.prototype);
	Parent.prototype.f_name = "Martin";
	console.log(Parent);
	console.log(Parent.__proto__);
	console.log(Parent.__proto__.__proto__);
	console.log(Parent.__proto__.__proto__.__proto__);
	console.log(Parent.prototype);

	let child = new Parent();
	child.__proto__.l_name = "Scorsese";
	child.__proto__.film = "Department";
	child.film = "Taxi Driver";

	console.log(child);
	console.log(child.f_name);
	console.log(child.l_name);
	console.log(child.film);

	console.log(child.__proto__);
	console.log(child.__proto__.constructor);

	console.log(typeof Parent);
	console.log(typeof Parent.__proto__);
	console.log(typeof Parent.prototype);
	console.log(typeof child);
	console.log(typeof child.__proto__);
	console.log(typeof child.prototype);
}
