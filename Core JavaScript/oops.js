//----------------------------------------------Prototypal inheritance-------------------------------------------------

function Employee(firstname, lastname, designation) {
	this.firstname = firstname;
	this.lastname = lastname;
	this.designation = designation;
}

Employee.prototype.work = function () {
	return `${this.firstname} is working`;
};

function Manager(firstname, lastname, designation, subordinates) {
	Employee.call(this, firstname, lastname, designation);
	this.subordinates = subordinates;
}

Manager.prototype.manage = function () {
	return `${this.firstname} manages ${this.subordinates} people`;
};

console.log(Manager.prototype);

Manager.prototype.__proto__ = Employee.prototype;

console.log(Manager.prototype.__proto__);

let employee1 = new Employee("Peter", "Parker", "Software Engineer");
console.log(employee1);

console.log(employee1.work());
console.log(employee1.__proto__);
console.log(employee1.__proto__.work());
console.log(employee1.__proto__.work.call(employee1));

let manager1 = new Manager("Tony", "Stark", "Manager", 10);
console.log(manager1);

console.log(manager1.manage());
console.log(manager1.work());

console.log(manager1.__proto__);
console.log(manager1.__proto__.__proto__);
console.log(manager1.__proto__.__proto__ === Employee.prototype);

console.log(manager1.__proto__.work());
console.log(manager1.__proto__.work.call(manager1));

//----------------------------------------------------Classes--------------------------------------------------------

class Vehicle {
	constructor(wheels) {
		this.wheels = wheels;
	}

	getWheels() {
		return this.wheels;
	}
}

class Car extends Vehicle {
	constructor(wheels, gears) {
		super(wheels);
		this.gears = gears;
	}
	getGears() {
		return this.gears;
	}
	getFeatures() {
		return {
			gears: this.getGears(),
			wheels: this.getWheels(),
		};
	}
}

let benz = new Car(4, 9);

console.log(benz.getWheels());
console.log(benz.getGears());
console.log(benz.getFeatures());
