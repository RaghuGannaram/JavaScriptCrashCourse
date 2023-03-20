let vowels = new Set(["a", "e", "i", "o", "u", "a"]);

vowels.add(undefined);
vowels.add(undefined);
vowels.add({ prop: true });
vowels.add({ prop: true });
console.log(vowels);
console.log(vowels.delete("a"));
console.log(vowels);
console.log(vowels.add("a"));
console.log(vowels.add("a"));
console.log(vowels);
console.log(vowels.has("a"));
vowels.forEach((a) => console.log(a))
console.log(vowels);
console.log(vowels.size);
console.log(vowels);


let person = {
  firstName : "John",
  lastName : "Doe"
}

var firstName = "Jane";
var lastName = "Doe";

function printName() {
  console.log(`First Name: ${this.firstName}, Last Name: ${this.lastName}`);
}

printName();

console.log([...vowels.values()])
for (let i of vowels.values()){
  console.log(i)
}

