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
console.log(vowels);





