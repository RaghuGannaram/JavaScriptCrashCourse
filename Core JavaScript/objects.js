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
};
console.log(emp1);


function createEmpFunc(name, id) {
  let obj = {};
  // let obj ={name, id}
  obj.name = name;
  obj.id = id;
  return obj;
}
let emp2 = createEmpFunc("Jane", 456);
console.log(emp2);


function CreateEmp(name, id) {
  this.name = name;
  this.id = id;
//   console.log(this)
}
let emp3 = new CreateEmp("James", "Cameron");
console.log(emp3);


/***********************************************Function Invocation************************************************************* */
(function funcOne(){
    console.log("Hello from funcOne ---|", this)
})()

let context = {parent : "context"};
context.funcTwo = function(){
    this.name = "funcTwo"
    console.log("Hello from funcTwo ---|", this)
}
context.funcTwo();

function funcThree(){
    this.name= "funcThree"
    console.log("Hello from funcThree ---|", this);
}
new funcThree();


/**********************************************Prototypes****************************************************** */
function parent(){

}
parent.prototype.f_name="Martin";
console.log(parent.prototype)
console.log(parent.prototype.constructor.prototype.constructor)


let child = new parent();
child.__proto__.l_name="Scorsese";
child.__proto__.film="Department";
child.film = "Taxi Driver";

console.log(typeof(parent))
console.log(typeof(parent.__proto__))
console.log(typeof(parent.prototype))
console.log(typeof(child))
console.log(typeof(child.__proto__))
console.log(typeof(child.prototype))

console.log(child.__proto__)
console.log(child.__proto__.constructor)
console.log(child)
console.log(child.film)
console.log(child.f_name)
console.log(child.l_name)


/**********************************************Object function****************************************************** */
let obj = new Object();
console.log(obj) //at obj
console.log(obj.__proto__) //at Object
console.log(obj.__proto__.__proto__) // Object is inherited from null
console.log(obj.__proto__.constructor)
console.log(obj.__proto__.constructor.__proto__)
console.log(obj.__proto__.constructor.__proto__.__proto__.__proto__)
console.log(typeof(obj.__proto__.constructor))
// for(let i in new Object()) console.log(i)