/*----------------------------------------------Prototypal inheritance-------------------------------------------------*/
{
  function Employee(f_name, l_name, designation) {
    this.f_name = f_name;
    this.l_name = l_name;
    this.designation = designation;
  }

  function Manager(f_name, l_name, designation, subordinates) {
    this.f_name = f_name;
    this.l_name = l_name;
    this.designation = designation;
    this.subordinates = subordinates;
  }

  Employee.prototype.work = function () {
    return `${this.f_name} is working`;
  };

  Manager.prototype.manage = function () {
    return `${this.f_name} manages ${this.subordinates} people`;
  };
  console.log(Manager.prototype.__proto__);
  Manager.prototype.__proto__ = Employee.prototype; //Manager inherits properties from Employee
  console.log(Manager.prototype.__proto__);

  let employee1 = new Employee("Peter", "Parker", "Software Engineer");
  console.log(employee1.work());
  console.log(employee1.__proto__.work());
  console.log(employee1.__proto__.work.call(employee1));

  let manager1 = new Manager("Tony", "Stark", "Manager", 10);

  console.log(manager1.__proto__);
  console.log(manager1.__proto__.__proto__);
  console.log(manager1.__proto__.__proto__ === Employee.prototype);

  console.log(manager1.manage());
  console.log(manager1.work());
  console.log(manager1.work.call(employee1));
}

/*----------------------------------------------------Classes--------------------------------------------------------*/
{
  class Vehicle {
    constructor(wheels) {
      this.wheels = wheels;
    }

    getWheels() {
      // return 4
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
  }

  let benz = new Car(4, 9);
  console.log(benz.getWheels());
  console.log(benz.getGears());
  console.log(
    `Benz car has ${benz.getGears()} gears and ${benz.getWheels()} wheels`
  );
  console.log(`Benz car has ${benz.gears} gears and ${benz.wheels} wheels`);
}
