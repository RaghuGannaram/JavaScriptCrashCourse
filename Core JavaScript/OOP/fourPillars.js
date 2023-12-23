/*
    Abstraction : Hiding the internal details and showing the functionality is known as abstraction.
	
	Abstraction in Object-Oriented Programming (OOP) is the concept of hiding the complex implementation details and exposing only the necessary parts to the user. 
	
	It's about focusing on what an object does, rather than how it does it. 
	
	In JavaScript, while we don't have abstract classes or interfaces in the same way as languages like Java or C#,

	we can still implement abstraction by defining a structure for our objects and limiting the exposure of their internal details.

*/
//-----------------------------------------Using Constructor Function-----------------------------------------
function Car(model) {
    let speed = 0; // private variable

    // Public method
    this.accelerate = function () {
        speed += 10;
        console.log(`${model} is going at ${speed} km/h`);
    };

    // Private method (not exposed)
    function checkFuel() {
        console.log("Checking fuel level");
    }
}

const myCar = new Car("Toyota");
myCar.accelerate(); // Toyota is going at 10 km/h
myCar.checkFuel(); // Error: checkFuel is not a function

//-----------------------------------------Using ES6 Classes-----------------------------------------
class BankAccount {
    #balance; // private field using #

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited ${amount}, new balance: ${this.#balance}`);
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew ${amount}, new balance: ${this.#balance}`);
        } else {
            console.log("Insufficient funds");
        }
    }
}

const myAccount = new BankAccount(100);
myAccount.deposit(50); // Deposited 50, new balance: 150
myAccount.withdraw(20); // Withdrew 20, new balance: 130
// console.log(myAccount.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class

//------------------------------------------Using Factory Functions-----------------------------------------
const createMediaPlayer = () => {
    let volume = 50; // private variable

    return {
        // public methods
        turnUpVolume: () => {
            volume += 10;
            console.log(`Volume increased to ${volume}`);
        },
        turnDownVolume: () => {
            volume -= 10;
            console.log(`Volume decreased to ${volume}`);
        },
    };
};

const myPlayer = createMediaPlayer();
myPlayer.turnUpVolume(); // Volume increased to 60
// console.log(myPlayer.volume); // undefined

/*
    Encapsulation : Binding the data and the functions that manipulate the data together as a single unit is known as encapsulation.

    Encapsulation in Object-Oriented Programming (OOP) refers to the bundling of data and the methods that operate on that data within one unit, 
    
    often a class in OOP languages. It also involves restricting access to some of an object's components, a concept known as information hiding. 
    
    In JavaScript, encapsulation can be achieved through closures, factory functions, and the newer class syntax with private fields.
*/

//-----------------------------------------Using Constructor Function and closure-----------------------------------------
function Person(name, age) {
    let _age = age; // private variable

    // Public method
    this.getName = function() {
        return name; // name is accessible here due to closure
    };

    // Public method that accesses the private variable
    this.getAge = function() {
        return _age;
    };

    this.setAge = function(newAge) {
        if (newAge > 0) _age = newAge;
    };
}

const alice = new Person('Alice', 30);
console.log(alice.getName()); // Alice
console.log(alice.getAge()); // 30
alice.setAge(35);
console.log(alice.getAge()); // 35

//-----------------------------------------Using ES6 Classes-----------------------------------------
class Account {
    #balance; // private field

    constructor(balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new Account(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
// console.log(account.#balance); // Syntax Error: Private field '#balance' must be declared in an enclosing class


//-----------------------------------------Using Factory Functions-----------------------------------------
const createCounter = () => {
    let count = 0; // private variable

    return {
        increment: () => {
            count++;
        },
        decrement: () => {
            count--;
        },
        getCount: () => {
            return count;
        }
    };
};

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount()); // 2
// console.log(counter.count); // undefined



/*
    Inheritance : Inheritance is the process of acquiring the properties of the existing class into the new class.
    
    Inheritance in Object-Oriented Programming (OOP) is a mechanism where a new class (called the subclass or child class) is derived from an existing class (the superclass or parent class). 
    
    The subclass inherits all the public and protected properties and methods from the parent class, and can also have its own unique properties and methods. 
    
    Inheritance promotes code reusability and hierarchical classification.

    In JavaScript, inheritance is typically implemented through prototype-based inheritance, and with the introduction of ES6, class-based inheritance has also become a common approach.
*/

//-----------------------------------------Prototype-based Inheritance-----------------------------------------
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound.`);
};

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

// Inheriting from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log(`${this.name} barks.`);
};

const dog1 = new Dog('Rex', 'German Shepherd');
dog1.speak(); // Rex makes a sound.
dog1.bark();  // Rex barks.


//-----------------------------------------Class-based Inheritance-----------------------------------------
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} barks.`);
    }
}

const dog2 = new Dog('Buddy', 'Golden Retriever');
dog2.speak(); // Buddy makes a sound.
dog2.bark();  // Buddy barks.


//--------------------------------------------Inheriting Methods--------------------------------------------
class Vehicle {
    start() {
        console.log('Starting the vehicle.');
    }
}

class Car extends Vehicle {
    start() {
        console.log('Starting the car.');
    }

    drive() {
        console.log('Driving the car.');
    }
}

const car = new Car();
car.start(); // Starting the car.
car.drive(); // Driving the car.

/*
    Polymorphism : Polymorphism is the ability of an object to take many forms.

    Polymorphism, a core concept in Object-Oriented Programming (OOP), allows objects of different classes to be treated as objects of a common superclass. 
    
    It provides a way to perform a single action in different forms or ways. In JavaScript, which is a prototype-based language, 
    
    polymorphism is primarily achieved through inheritance and method overriding.

    Types of Polymorphism in JavaScript
        1. Subtype Polymorphism (Through Inheritance): This is when different classes derived from the same superclass can have different implementations for a method.

        2. Duck Typing (Dynamic Polymorphism): JavaScript being a dynamically typed language, allows polymorphism through duck typing 
            - if it looks like a duck and quacks like a duck, it's a duck. 
              This means that any object that provides certain methods and properties can be treated as an instance of a class.
*/

//-----------------------------------------Subtype Polymorphism-----------------------------------------
class Shape {
    draw() {
        console.log('Drawing a shape');
    }
}

class Circle extends Shape {
    draw() {
        console.log('Drawing a circle');
    }
}

class Square extends Shape {
    draw() {
        console.log('Drawing a square');
    }
}

function drawShape(shape) {
    shape.draw();
}

drawShape(new Shape());   // Drawing a shape
drawShape(new Circle());  // Drawing a circle
drawShape(new Square());  // Drawing a square


//-----------------------------------------Duck Typing-----------------------------------------
function makeQuack(duck) {
    if (typeof duck.quack === "function") {
        duck.quack();
    } else {
        console.log("This is not a duck");
    }
}

const duck = {
    quack: function() {
        console.log("Quack!");
    }
};

const dog = {
    bark: function() {
        console.log("Woof!");
    }
};

makeQuack(duck); // Quack!
makeQuack(dog);  // This is not a duck
