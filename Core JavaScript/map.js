//---------------------------------------- 🧭 Map() Constructor ----------------------------------------//

/**
 * ✅ Purpose:
 * Creates a new Map object that holds key-value pairs and remembers the original insertion order.
 *
 * 🔧 Syntax:
 * new Map([iterable])
 *
 * 📥 Parameters:
 * - iterable (optional): An iterable object (usually an array) whose elements are key-value pairs
 *   ➤ Each element must itself be an array with exactly two elements: [key, value]
 *
 * ✅ Returns:
 * - A new Map instance
 *
 * 🧪 Properties:
 * - 📌 Mutability: ✅ YES (Map contents can be updated)
 * - 🔗 Chainability: ❌ NO (not returned from constructor)
 * - 🧠 Order-preserving: Keys maintain insertion order
 * - 🧠 Keys can be any type (primitive or object)
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES6 / ECMAScript 2015**
 *
 * 🕒 Time Complexity: O(n) to initialize from iterable
 * 💾 Space Complexity: O(n)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples & Checks
//--------------------------------------------------------------------------------------------------//

let map = new Map();

console.log(map);
console.log(typeof map);

console.log(map instanceof Array);
console.log(map instanceof Set);
console.log(map instanceof Map);
console.log(map instanceof Object);

map.set(true, "boolValue");
console.log(map);

map.set(1, "numValue");
console.log(map);

map.set("strKey", "strValue");
console.log(map);

map.set([100, 200], "arrValue");
console.log(map);

map.set({ property: true }, "objValue");
map.set({ property: true }, "newObjValue");
console.log(map);

map.set(2, "twoValue1");
map.set(2, "twoValue2");
console.log(map);

console.log(map.size);
console.log(map.has(2));
console.log(map.get(2));
console.log(map.has([10, 200]));
console.log(map.get([100, 200]));
console.log(map);

map.forEach((value, key, map) => {
    if (value === "arrValue") {
        arrPtr = key;
        console.log(map.get(arrPtr));
    }
});

console.log(map.set(12));
console.log(map.set(12, "twelve"));
console.log(map.set(12));

console.log(map.delete(2));

console.log(map);
console.log(map.size);
console.log(map.has(2));
console.log(map.get(2));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

for (let i of map) console.log(i);
for (let [i, j] of map) console.log(i, j);

for (let i of map.keys()) console.log(i);
for (let i of map.values()) console.log(i);
for (let i of map.entries()) console.log(i);
for (let [i, j] of map.entries()) console.log(i, j);

let stringifiedResult = "";
map.forEach((i, j) => (stringifiedResult = stringifiedResult + i + ":" + j + " | "));
console.log(stringifiedResult);

for (let i of map.keys()) console.log(typeof i);
for (let i of map.keys()) console.log(i instanceof Array);
for (let i of map.keys()) console.log(i instanceof Object);

let mapTwo = new Map([[10], [20], [40], [50], [30], [30]]);
console.log(mapTwo);
for (let i of mapTwo) console.log(i);
for (let i of mapTwo.keys()) console.log(i);
for (let i of mapTwo.values()) console.log(i);
for (let i of mapTwo.entries()) console.log(i);

let mapThree = new Map([
    [10, "a"],
    [20, "b"],
    [40, "c"],
    [50, "d"],
    [30, "e"],
    [30, "f"],
]);
for (let i of mapThree) console.log(i);
for (let i of mapThree.keys()) console.log(i);
for (let i of mapThree.values()) console.log(i);
for (let i of mapThree.entries()) console.log(i);

console.log(mapThree.clear());
for (let i of mapThree) console.log(i);

try {
    console.log(
        new Map([
            [1, 2, 3],
            [4, 5, 6],
        ])
    );
} catch (error) {
    console.log(error);
}

try {
    console.log(new Map([1, 2, 3]));
} catch (error) {
    console.log(error);
}

try {
    console.log(new Map(["a", "b", "c"]));
} catch (error) {
    console.log(error);
}

try {
    console.log(new Map([{ a: 1 }, { b: 2 }, { c: 3 }]));
} catch (error) {
    console.log(error);
}

try {
    console.log(
        new Map([
            { 0: "key1", 1: "val1" },
            { 0: "key2", 1: "val2" },
            { 0: "key3", 1: "val3" },
            { 0: true, 1: "boolValue" },
            { 0: "strKey", 1: "strValue" },
            { 0: 1, 1: "numValue" },
            { 0: [10, 20, 30], 1: "arrValue" },
            { 0: { a: 1, b: 2 }, 1: "objValue" },
        ])
    );
} catch (error) {
    console.log(error);
}

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Unlike objects, keys in Maps can be any type (including functions, objects, arrays)
 * - ✅ Map maintains insertion order (unlike Object)
 * - ✅ Use Maps when key type matters, or when insertion order needs to be preserved
 */

//---------------------------------------- 🧮 Map.groupBy() ----------------------------------------//

/**
 * ✅ Purpose:
 * Groups items from an iterable into a Map, using a callback function to determine the grouping key.
 *
 * 🔧 Syntax:
 * Map.groupBy(iterable, callbackFn)
 *
 * 📥 Parameters:
 * - iterable (required): An iterable collection (like an array) of items to group
 * - callbackFn (required): A function that returns the key for each item
 *     ➤ Receives: currentItem, currentIndex
 *
 * ✅ Returns:
 * - A new Map where each key is a group label, and the value is an array of items that belong to that group
 *
 * 🧪 Properties:
 * - 📌 Mutability: ❌ NO (returns a new Map)
 * - 🔗 Chainability: ❌ NO (not designed to chain)
 * - 🧠 Each value in the resulting Map is an array of grouped elements
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES14 / ECMAScript 2023**
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

const users = [
    { name: "Alice", role: "admin" },
    { name: "Bob", role: "user" },
    { name: "Eve", role: "admin" },
];

const groupedByRole = Map.groupBy(users, (user) => user.role);
console.log(groupedByRole);

for (const [role, group] of groupedByRole.entries()) {
    console.log(role, group);
}

const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 9 },
    { name: "bananas", type: "fruit", quantity: 5 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 12 },
    { name: "fish", type: "meat", quantity: 22 },
];

const groupedByType = Map.groupBy(inventory, (item) => item.type);
console.log(groupedByType);
const groupByQuantity = Map.groupBy(inventory, (item) => item.quantity);
console.log(groupByQuantity);

const restock = { restock: true };
const sufficient = { restock: false };
// const groupByStock = Map.groupBy(inventory, ({ quantity }) => (quantity < 6 ? "restock" : "sufficient"));
const groupByStock = Map.groupBy(inventory, ({ quantity }) => (quantity < 6 ? restock : sufficient));
console.log(groupByStock);

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

/**
 * - Throws if callbackFn is not a function
 * - Result Map always contains arrays as values, even if a group has one item
 * - Keys returned from callback can be any type (including objects)
 */

try {
    Map.groupBy([1, 2, 3], null); // ❌ Invalid callback
} catch (err) {
    console.log(err);
}

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Great for categorizing data by a dynamic property (e.g. role, category, first letter, etc.)
 * - ✅ Similar to `Array.prototype.reduce()` used for grouping, but cleaner and more semantic
 * - ✅ Output is a `Map` — not an object — so it preserves key types and insertion order
 */
