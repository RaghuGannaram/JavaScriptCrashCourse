let vowels = new Set(["a", "e", "i", "o", "u", "a"]);

vowels.add(undefined);
vowels.add(undefined);
vowels.add({ prop1: true });
vowels.add({ prop1: true });
console.log(vowels);

const obj1 = { prop2: true };
const obj2 = obj1;
console.log(vowels.add(obj1));
console.log(vowels.add(obj2));

console.log(vowels);
console.log(vowels.delete({ prop1: true }));
console.log(vowels);
console.log(vowels.delete(obj2));
console.log(vowels.delete(obj1));
console.log(vowels);


vowels.add(obj1);
console.log(vowels.has({ prop1: true }));
console.log(vowels.has(obj2));

let stringifiedVowelsSet = "";

vowels.forEach(s => stringifiedVowelsSet += s + " | ");
console.log(stringifiedVowelsSet);


console.log(vowels);
console.log(vowels.size);
console.log(vowels.clear());
console.log(vowels);
console.log(vowels.size);

vowels = new Set(["a", "e", "i", "o", "u", "a"]);
console.log(vowels)
for (let i of vowels) console.log(i)
for (let i of vowels.keys()) console.log(i)
for (let i of vowels.values()) console.log(i)
for (let i of vowels.entries()) console.log(i)

console.log(vowels.keys())
console.log(vowels.values())
console.log(vowels.entries())
console.log([...vowels.keys()])
console.log([...vowels.values()])
console.log([...vowels.entries()])


console.log(new Set([1, 2, 3]))
console.log(new Set("123"))
try {
  console.log(new Set({ 1: "one", 2: "two", 3: "three" }))
} catch (error) {
  console.log(error)
}
console.log(new Set(new Map([[1, "one"], [2, "two"], [3, "three"]])))
console.log(...new Set(new Map([[1, "one"], [2, "two"], [3, "three"]])).entries())

let setMap1 = new Set(new Map([[1, "one"], [2, "two"], [3, "three"]]));

console.log(setMap1);
console.log(...setMap1.keys())
console.log(...setMap1.values())
console.log(...setMap1.entries())