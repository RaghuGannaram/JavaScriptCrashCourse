/**************************************************Object Syntax************************************************* */
let sub_division = "state";
let person = {
  first_name: "John",
  age: 26,
  country: "US",
  //   sub_division: "LA",
  [sub_division]: "LA",
  "nick name": "Jo",
  //   ["nick name"]: "Jo"
};
person["last name"] = "Doe";
person.gender = "M";

console.log(person);
console.log(person["age"]);
console.log(person["country"]);
// for(let key in person) console.log(person.key)
for (let key in person) console.log(person[key]);

/*************************************************Object Creation********************************************************** */
let emp1 = {
  name: "John",
  id: 123,
  country:'US'
};
console.log(emp1);

let emp2= new Object({  name: "Jane",id: 456, age:24});
console.log(emp2);


let emp3 = Object.create(emp2);
Object.setPrototypeOf(emp3, emp1)
console.log(emp1.isPrototypeOf(emp3));
console.log(emp2.isPrototypeOf(emp3));
// console.log(emp3.hasOwnProperty('name'))
console.log(emp3)
console.log(emp3.__proto__)
console.log(emp3.__proto__.__proto__)
console.log(emp3.__proto__.__proto__.__proto__)
console.log(emp3.name)
console.log(emp3.id)


let emp6 = Object.assign(emp3, emp1,emp2,{'height' : 6});
console.log(emp3)
console.log(emp6)


function createEmpFunc(name, id) {
  let obj = {};
  // let obj ={name, id}
  obj.name = name;
  obj.id = id;
  return obj;
}
let emp4 = createEmpFunc("Jane", 456);
console.log(emp4);

function CreateEmp(name, id) {
  this.name = name;
  this.id = id;
  //   console.log(this)
}
let emp5 = new CreateEmp("James", "Cameron");
console.log(emp5);

/***********************************************Function Invocation************************************************************* */
(function funcOne() {
  console.log("Hello from funcOne ---|", this);
})();

let context = { parent: "context" };
context.funcTwo = function () {
  this.name = "funcTwo";
  console.log("Hello from funcTwo ---|", this);
};
context.funcTwo();

function FuncThree() {
  this.name = "funcThree";
  console.log("Hello from funcThree ---|", this);
}
let myfunc = new FuncThree();
console.log(myfunc);
console.log(myfunc.__proto__);
console.log(myfunc.__proto__.constructor);
console.log(myfunc.__proto__.__proto__ === Object.prototype);

/**********************************************Prototypes****************************************************** */
function Parent() {}
Parent.prototype.f_name = "Martin";
console.log(Parent);
console.log(Parent.__proto__);
console.log(Parent.prototype);
console.log(Parent.prototype.constructor.prototype.constructor);

let child = new Parent();
child.__proto__.l_name = "Scorsese";
child.__proto__.film = "Department";
child.film = "Taxi Driver";

console.log(typeof Parent);
console.log(typeof Parent.__proto__);
console.log(typeof Parent.prototype);
console.log(typeof child);
console.log(typeof child.__proto__);
console.log(typeof child.prototype);

console.log(child.__proto__);
console.log(child.__proto__.constructor);
console.log(child);
console.log(child.film);
console.log(child.f_name);
console.log(child.l_name);

/**********************************************Prototypal inheritance****************************************************** */
function Employee(f_name, l_name, designation) {
  this.f_name = f_name;
  this.l_name = l_name;
  this.designation = designation;
}
Employee.prototype.work = function () {
  return `${this.f_name} is working`;
};


function Manager(f_name, l_name, designation, subordinates) {
  this.f_name = f_name;
  this.l_name = l_name;
  this.designation = designation;
  this.subordinates = subordinates;
}
Manager.prototype.manage = function () {
  return `${this.f_name} manages ${this.subordinates} people`;
};

let employee1 = new Employee("Peter", "Parker", "Software Engineer");
// console.log(employee1.__proto__.work());
console.log(employee1.__proto__.work.call(employee1));
console.log(employee1.work());



let manager1 = new Manager('Tony','Stark','Manager',10);
// manager1.__proto__.__proto__ = Employee.prototype;
Manager.prototype.__proto__ = Employee.prototype;

console.log(manager1.__proto__);
console.log(manager1.__proto__.__proto__);
console.log(manager1.__proto__.__proto__ === Employee.prototype);

// console.log(manager1.manage());
console.log(manager1.manage());
console.log(manager1.work())
console.log(manager1.work.call(employee1));

/**********************************************Classes****************************************************** */
class Vehicle{
  constructor(wheels){
    this.wheels = wheels;
  }

  getWheels(){
    // return 4;
    return this.wheels;
  }
}

class Car extends Vehicle{
  constructor(wheels, gears){
    super(wheels);
    this.gears = gears;
  }
  getGears(){
    return this.gears;
  }
}

let benz = new Car(4, 9);
console.log(benz.getWheels())
console.log(benz.getGears())
console.log(`Benz car has ${benz.getGears()} gears and ${benz.getWheels()} wheels`)
console.log(`Benz car has ${benz.gears} gears and ${benz.wheels} wheels`)



/**********************************************Object function****************************************************** */
let obj = new Object();
console.log(obj); //at obj
console.log(obj.__proto__); //at Object
console.log(obj.__proto__.__proto__); // Object is inherited from null
console.log(obj.__proto__.constructor);
console.log(obj.__proto__.constructor.__proto__);
console.log(obj.__proto__.constructor.__proto__.__proto__.__proto__);
console.log(typeof obj.__proto__.constructor);
// for(let i in new Object()) console.log(i)



console.log(Object.entries(employee1))
console.log(Object.keys(employee1))
console.log(Object.values(employee1))
console.log(Object.isSealed(employee1))
console.log(Object.isFrozen(employee1))
console.log(Object.isExtensible(employee1))
console.log(Object.getPrototypeOf(employee1))
console.log(Object.getOwnPropertyNames(employee1))
console.log(Object.getOwnPropertySymbols(employee1))
console.log(Object.fromEntries([['f_name','Peter'],['l_name', 'Parker'],['Designation', 'Software Engineer']]));
console.log(Object.defineProperties({}))