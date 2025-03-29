//---------------------------------------- 🧭 Set() Constructor ----------------------------------------//

/**
 * ✅ Purpose:
 * Creates a new Set object that holds unique values of any type.
 *
 * 🔧 Syntax:
 * new Set([iterable])
 *
 * 📥 Parameters:
 * - iterable (optional): An iterable object whose elements are added to the new Set.
 *   ➤ Duplicates are automatically filtered
 *
 * ✅ Returns:
 * - A new Set instance
 *
 * 🧪 Properties:
 * - 📌 Mutability: ✅ YES (contents can be modified)
 * - 🔗 Chainability: ❌ NO (constructor does not chain)
 * - 🧠 Maintains insertion order
 * - 🧠 Does not allow duplicates (reference equality for objects)
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES6 / ECMAScript 2015**
 *
 * 🕒 Time Complexity: O(n) to initialize from iterable
 * 💾 Space Complexity: O(n)
 */

set = new Set();

console.log(set);
console.log(typeof set);

console.log(set instanceof Array);
console.log(set instanceof Set);
console.log(set instanceof Map);
console.log(set instanceof Object);

//---------------------------------------- ➕ Set.prototype.add() ----------------------------------------//

/**
 * ✅ Purpose:
 * Adds a new element to the Set.
 *
 * 🔧 Syntax:
 * set.add(value)
 *
 * 📥 Parameters:
 * - value (required): The value to add
 *
 * ✅ Returns:
 * - The Set object itself (chainable)
 *
 * 🧪 Properties:
 * - 📌 Mutability: ✅ YES (adds to existing Set)
 * - 🔗 Chainability: ✅ YES (returns this)
 * - 🧠 If value already exists (based on SameValueZero), it won't be added again
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES6 / ECMAScript 2015**
 *
 * 🕒 Time Complexity: O(1)
 * 💾 Space Complexity: O(1)
 */

set.add(true);
set.add(1);
set.add("a");
set.add([1, 2, 3]);
set.add({ a: 1 });
set.add(new Map([["a", 1]]));
set.add(new Set("Hello...!"));
set.add(null);
set.add(undefined);
console.log(set);

let vowels = new Set(["a", "e", "i", "o", "u", "a"]);

vowels.add(null);
vowels.add(null);
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

//---------------------------------------- ⚠️ Edge Cases: Reference Equality ----------------------------------------//

console.log(vowels.delete({ prop1: true })); // false (new reference)
console.log(vowels);
console.log(vowels.delete(obj2)); // true
console.log(vowels.delete(obj1)); // false (already deleted)
console.log(vowels);

//---------------------------------------- 🧠 Set.prototype.has() + Iteration + Chaining ----------------------------------------//

vowels.add(obj1);
console.log(vowels.has({ prop1: true })); // false
console.log(vowels.has(obj2)); // true (same ref)
console.log(vowels)
console.log(vowels[0])
console.log(vowels[1])
console.log(vowels[2])

let stringifiedVowelsSet = "";
vowels.forEach((s) => (stringifiedVowelsSet += s + " | "));
console.log(stringifiedVowelsSet);

console.log(vowels);
console.log(vowels.size);
console.log(vowels.clear());
console.log(vowels);
console.log(vowels.size);

//---------------------------------------- 🔁 Iterating a Set ----------------------------------------//

vowels = new Set(["a", "e", "i", "o", "u", "a"]);
console.log(vowels);
for (const i of vowels) console.log(i);
for (const i of vowels.keys()) console.log(i);
for (const i of vowels.values()) console.log(i);
for (const i of vowels.entries()) console.log(i);

console.log(vowels.keys());
console.log(vowels.values());
console.log(vowels.entries());
console.log([...vowels.keys()]);
console.log([...vowels.values()]);
console.log([...vowels.entries()]);

//---------------------------------------- 🧪 Valid & Invalid Set Constructions ----------------------------------------//

console.log(new Set([1, 2, 3]));
console.log(new Set("123"));

try {
    console.log(new Set({ 1: "one", 2: "two", 3: "three" },1,2));
} catch (error) {
    console.log(error);
}

console.log(
    new Set(
        new Map([
            [1, "one"],
            [2, "two"],
            [3, "three"],
        ])
    )
);
console.log(
    ...new Set(
        new Map([
            [1, "one"],
            [2, "two"],
            [3, "three"],
        ])
    ).entries()
);

setMap1 = new Set(
    new Map([
        [1, "one"],
        [2, "two"],
        [3, "three"],
    ])
);
console.log(new Set(new Set("hi")))
console.log(setMap1);
console.log(...setMap1.keys());
console.log(...setMap1.values());
console.log(...setMap1.entries());

console.log(new Set());

//---------------------------------------- ⚠️ Constructor Edge Cases ----------------------------------------//

try {
    console.log(new Set(undefined));
} catch (error) {
    console.log(error);
}

try {
    console.log(new Set(null));
} catch (error) {
    console.log(error);
}

try {
    console.log(new Set(true));
} catch (error) {
    console.log(error);
}

try {
    console.log(new Set(1));
} catch (error) {
    console.log(error);
}

try {
    console.log(new Set({ a: 1 }));
} catch (error) {
    console.log(error);
}

console.log(new Set("Hello...!"));
console.log(new Set([1, 2, 3]));

try {
    console.log(new Set(..."Hello...!"));
} catch (error) {
    console.log(error);
}

try {
    console.log(new Set(...[1, 2, 3]));
} catch (error) {
    console.log(error);
}

console.log(new Set("asd", 1, 2, 3));
console.log(new Set(undefined, "asd"));

try {
    console.log(new Set(1, "asd"));
} catch (error) {
    console.log(error);
}

console.log(
    new Set(
        new Map([
            ["a", 1],
            ["b", 2],
        ])
    )
);
console.log(new Set(new Set("Hello...!")));

console.log(set);
console.log(set.size);
console.log(set.add("x").size);
console.log(set.add("y").has("y"));
console.log(set.delete("z"));
