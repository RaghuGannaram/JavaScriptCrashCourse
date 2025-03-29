//==================================================================================================//
//                                     📚 ARRAY METHOD CLASSIFICATION                                 //
//==================================================================================================//

/**
 * 🧱 ➊ CORE CONSTRUCTORS & CREATORS
 * ───────────────────────────────────────────────
 *   • Array()
 *   • Array.of()
 *   • Array.from()
 *   • Array.isArray()
 *
 * ✂️ ➋ EXTRACTION & MANIPULATION
 * ───────────────────────────────────────────────
 *   • Array.prototype.slice()
 *   • Array.prototype.splice()
 *   • Array.prototype.toSpliced()
 *   • Array.prototype.copyWithin()
 *   • Array.prototype.fill()
 *
 * 🔍 ➌ SEARCHING & INDEXING
 * ───────────────────────────────────────────────
 *   • Array.prototype.includes()
 *   • Array.prototype.indexOf()
 *   • Array.prototype.lastIndexOf()
 *   • Array.prototype.at()
 *
 * 🔁 ➍ ITERATION-BASED OPERATIONS
 * ───────────────────────────────────────────────
 *   • Array.prototype.forEach()
 *   • Array.prototype.map()
 *   • Array.prototype.filter()
 *   • Array.prototype.reduce()
 *   • Array.prototype.reduceRight()
 *   • Array.prototype.some()
 *   • Array.prototype.every()
 *   • Array.prototype.find()
 *   • Array.prototype.findLast()
 *   • Array.prototype.findIndex()
 *   • Array.prototype.findLastIndex()
 *
 * 📥 ➎ FLATTENING & MAPPING
 * ───────────────────────────────────────────────
 *   • Array.prototype.flat()
 *   • Array.prototype.flatMap()
 *
 * 📊 ➏ SORTING & REVERSING
 * ───────────────────────────────────────────────
 *   • Array.prototype.sort()
 *   • Array.prototype.toSorted()
 *   • Array.prototype.reverse()
 *   • Array.prototype.toReversed()
 *
 * ➕ ➐ ADDING & REMOVING ELEMENTS
 * ───────────────────────────────────────────────
 *   • Array.prototype.push()
 *   • Array.prototype.pop()
 *   • Array.prototype.shift()
 *   • Array.prototype.unshift()
 *
 * 🔗 ➑ JOINING & STRING CONVERSION
 * ───────────────────────────────────────────────
 *   • Array.prototype.join()
 *   • Array.prototype.toString()
 *
 * 🧬 ➒ COMBINATION & COPYING
 * ───────────────────────────────────────────────
 *   • Array.prototype.concat()
 *
 * 🧭 ➓ ITERATORS
 * ───────────────────────────────────────────────
 *   • Array.prototype.entries()
 *   • Array.prototype.keys()
 *   • Array.prototype.values()
 */

//==================================================================================================//
//                                 🧠 LET'S DOCUMENT THEM ONE BY ONE                                 //
//==================================================================================================//

let fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];
let numbers = [234, 43, 234, -57, -56, -20, 55, 63, 5, 6, 235, 547];
let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupitor", "Saturn", "Uranus", "Neptune", "Pluto"];

//-------------------------------------------- 🧱 Array() Constructor -------------------------------------------//

/**
 * ✅ Purpose:
 * Creates a new array instance. Can be used with `new` or as a regular function.
 *
 * 🧠 Behavior:
 * - No arguments → creates an empty array.
 * - Single number → creates an array with length n (but no elements).
 * - Multiple arguments → creates an array populated with given values.
 *
 * 🔧 Syntax:
 * new Array()
 * new Array(length)
 * new Array(element0, element1, ..., elementN)
 *
 * 🧪 Properties:
 * - 📌 Mutability: ✅ YES (array is mutable)
 * - 🔗 Chainability: ✅ YES (if returned)
 * - 🧠 Sparse Array Capable: ✅ YES (supports holes)
 * - ⚙️ Constructable: ✅ YES (can be used with `new`)
 * - 🧱 Prototype: `Array.prototype`
 *
 * 📅 ECMAScript Version:
 * - Introduced in ES1 / ECMA-262 (1997)
 * - Available in all modern and legacy JavaScript environments
 *
 * 🕒 Time Complexity: O(n) — where n is number of elements passed or length
 * 💾 Space Complexity: O(n)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

const objArr = new Array();
objArr[0] = "a";
objArr[1] = "b";
objArr[2] = "c";
objArr["firstName"] = "John";
objArr["lastName"] = "Doe";
objArr["age"] = 30;

console.log(objArr);

for (let i in objArr) console.log(i); // includes keys like "firstName"
for (let i of objArr) console.log(i); // only numeric values

console.log(new Array());
console.log(new Array().length);
console.log(new Array(0));
console.log(new Array(0).length);
console.log(new Array(1));
console.log(new Array(1).length);
console.log(new Array(undefined));
console.log(new Array(undefined).length);
console.log(new Array(null));
console.log(new Array(null).length);
console.log(new Array(""));
console.log(new Array(" "));
console.log(new Array("  "));
console.log(new Array("  ").length);
console.log(new Array("  ")[0].length);
console.log(new Array(5));
console.log(new Array("5"));
console.log(new Array(5)[0]);
console.log(new Array(5)[0] === undefined);
console.log(new Array(5).length);
console.log(new Array("a", "b"));
console.log(new Array(5, 6));
console.log(new Array("a", 2));
console.log(new Array([5, 6]));
console.log(new Array(...[5, 6]));
console.log(new Array(...[5]));
console.log(new Array({ a: 1 }));
console.log(new Array(new Set(["foo", "bar", "baz", "foo"])));
console.log(new Array(...new Set(["foo", "bar", "baz", "foo"])));
console.log(new Array(...new Set([5])));
console.log(
    new Array(
        new Map([
            [1, 2],
            [2, 4],
            [4, 8],
        ])
    )
);
console.log(
    new Array(
        ...new Map([
            [1, 2],
            [2, 4],
            [4, 8],
        ])
    )
);

console.log([1, 2, 3]);
console.log(...[1, 2, 3]);
console.log(1, 2, 3);

console.log(new Array(new Map([[3, 7]])));
console.log(new Array(...new Map([[3, 7]])));
console.log(new Array([...new Map([[3, 7]])]));
console.log(new Array([...new Map([[3, 7]])][0]));
console.log(new Array([...new Map([[3, 7]])][0][0]));

let arrCnstr1 = [10, 20, 30, [40, 50]];
let arrCnstr2 = new Array(...arrCnstr1);
arrCnstr1[3].push(60);
console.log(arrCnstr2);

let setCnstr = new Set(["a", "b", "c"]);
let arrCnstr = new Array(setCnstr);
// let arrCnstr = new Array(...setCnstr);
console.log(arrCnstr);
setCnstr.add("d");
console.log(arrCnstr);

console.log(Array());
console.log(Array().length);
console.log(Array(0));
console.log(Array(0).length);
console.log(Array(1));
console.log(Array(1).length);
console.log(Array(undefined));
console.log(Array(undefined).length);
console.log(Array(null));
console.log(Array(null).length);
console.log(Array(""));
console.log(Array(" "));
console.log(Array("  "));
console.log(Array("  ")[0].length);
console.log(Array(5));
console.log(Array("5"));
console.log(Array(5)[0]);
console.log(Array(5).length);
console.log(Array("a", "b"));
console.log(Array(5, 6));
console.log(Array("a", 2));
console.log(Array([5, 6]));
console.log(Array(...[5, 6]));
console.log(Array(...[5]));
console.log(Array({ a: 1 }));
console.log(Array(new Set(["foo", "bar", "baz", "foo"])));
console.log(Array(...new Set(["foo", "bar", "baz", "foo"])));
console.log(Array(...new Set([5])));
console.log(
    Array(
        new Map([
            [1, 2],
            [2, 4],
            [4, 8],
        ])
    )
);
console.log(
    Array(
        ...new Map([
            [1, 2],
            [2, 4],
            [4, 8],
        ])
    )
);

let arrCnstr3 = [10, 20, 30, [40, 50]];
let arrCnstr4 = Array(arrCnstr3);
console.log(arrCnstr4);
arrCnstr3[3].push(60);
console.log(arrCnstr4);

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

/**
 * - new Array(5) creates sparse array with length 5, but no elements.
 * - new Array("5") creates an array with one string element.
 * - Spreading iterables like Set/Map behaves differently depending on how they're used.
 * - Setting non-numeric properties (e.g., .firstName) creates object-like structure (not iterable).
 * - You can't deep clone arrays with nested structures this way — it's shallow.
 */

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Use `[]` (array literals) whenever possible — it's cleaner and safer.
 * - ✅ Use `new Array(n)` when you want to preallocate space or use `.fill()` or `.map()` afterward.
 * - ✅ Use `Array.from()` or `Array.of()` when working with iterables or dynamic arguments.
 * - ⚠️ Avoid creating sparse arrays unless you're explicitly managing indices.
 */

3; //--------------------------------------------- 🧱 Array.of() ---------------------------------------------//

/**
 * ✅ Purpose:
 * Creates a new array instance **with the exact items** passed to it, regardless of the number or type of arguments.
 *
 * 🧠 Key Difference:
 * - `Array.of(5)` → [5]
 * - `new Array(5)` → array of length 5 (sparse)
 *
 * 🔧 Syntax:
 * Array.of(element0, element1, ..., elementN)
 *
 * 📥 Parameters:
 * - Any number of arguments, of any type (including none)
 *
 * ✅ Returns:
 * - A new array with the provided elements in the same order
 *
 * 🧪 Properties:
 * - 📌 Mutability: ✅ YES
 * - 🔗 Chainability: ✅ YES (if returned)
 * - 🧠 Precise: ✅ Avoids ambiguity in constructor overload (esp. single number)
 * - ⚙️ Constructable: ❌ NO (cannot be used with `new`)
 * - 🧱 Prototype: `Array.prototype`
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES6 / ECMAScript 2015**
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

console.log(Array.of());
console.log(Array.of(undefined));
console.log(Array.of(null));
console.log(Array.of(NaN));
console.log(Array.of(""));
console.log(Array.of(" "));
console.log(Array.of("  "));
console.log(Array.of("  ")[0].length);

console.log(Array.of(5));
console.log(Array.of(5, 6));
console.log(Array.of([5, 6]));
console.log(Array.of(...[5, 6]));
console.log(Array.of(...[5]));

let arrOf1 = [10, 20, 30, [40, 50]];
let arrOf2 = Array.of(arrOf1);
arrOf1[3].push(60);
console.log(arrOf2);

console.log(Array.of(new Set(["foo", "bar", "baz", "foo"])));
console.log(Array.of(...new Set(["foo", "bar", "baz", "foo"])));
console.log(Array.of(...new Set([10])));

console.log(
    Array.of(
        new Map([
            [1, 2],
            [2, 4],
            [4, 8],
        ])
    )
);

console.log(
    Array.of(
        ...new Map([
            [1, 2],
            [2, 4],
            [4, 8],
        ])
    )
);

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

/**
 * - Array.of(5) → [5], but new Array(5) → empty array with length 5
 * - Can be used safely with any number, including floats, negative numbers, NaN, etc.
 * - Array.of(undefined) → [undefined]
 * - Array.of(...iterable) spreads values, not structures (no deep cloning)
 */

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Use `Array.of()` whenever you want to create arrays from values directly and avoid confusion.
 * - ✅ Use over `new Array()` to avoid sparse array pitfalls.
 * - 🔄 Works great with spread for converting Sets, Maps, arguments objects, etc.
 * - ⚠️ Cannot be used with `new` → TypeError: Array.of is not a constructor
 */

//--------------------------------------------- 🧱 Array.from() ---------------------------------------------//

/**
 * ✅ Purpose:
 * Creates a new array instance from an **array-like** or **iterable** object.
 * Also supports an optional mapping function and `thisArg` for custom transformation.
 *
 * 🔧 Syntax:
 * Array.from(arrayLike, mapFn?, thisArg?)
 *
 * 📥 Parameters:
 * - arrayLike (required): An iterable (e.g. Set, Map, string) or array-like (e.g. arguments, { length }) object
 * - mapFn (optional): Function to call on each element before inserting
 * - thisArg (optional): `this` context for `mapFn`
 *
 * ✅ Returns:
 * - A new **shallow-copied** array from the input
 *
 * 🧪 Properties:
 * - 📌 Mutability: ✅ YES
 * - 🔗 Chainability: ✅ YES
 * - 🧱 Prototype: `Array.prototype`
 * - 🧠 Auto-spreads iterable inputs
 * - 🧠 Works on both real iterables and objects with `length`
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES6 / ECMAScript 2015**
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

// From undefined/null → throws error
try {
    console.log(Array.from(undefined));
} catch (error) {
    console.log(error);
}

try {
    console.log(Array.from(null));
} catch (error) {
    console.log(error);
}

// Non-iterables like numbers → throw
try {
    console.log(Array.from(5));
    console.log(Array.from(5, 6));
} catch (error) {
    console.log(error);
}

// From boolean or number → treated as object with length 0
console.log(Array.from(true));
console.log(Array.from(5));

// From string
console.log(Array.from(""));
console.log(Array.from(" "));
console.log(Array.from("  "));
console.log(Array.from("foo", (x) => x + "z"));

// From arrays
console.log(Array.from([5, 6]));
console.log(Array.from([...[5, 6], [7, 8]]));
console.log(Array.from([5, 6], (x) => x + 10));

// From Set
console.log(Array.from(new Set(["foo", "bar", "baz", "foo"])));

// Incorrect spread usage with from
try {
    console.log(Array.from(...new Set(["foo", "bar", "baz", "foo"])));
} catch (error) {
    console.log(error);
}

// From Map
console.log(
    Array.from(
        new Map([
            [1, 2],
            [2, 4],
            [4, 8],
        ]),
        (x) => x[0]
    )
);

// From plain object with `length`
console.log(Array.from({}));
console.log(Array.from({ length: 3 }));

// From nested array (shallow copy)
let arrFrm1 = [10, 20, 30, [40, 50]];
let arrFrm2 = Array.from(arrFrm1);
arrFrm1[3].push(60);
console.log(arrFrm2);

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

/**
 * - Array.from(undefined or null) → ❌ Throws TypeError
 * - Array.from(number) → ✅ returns [] (number treated as non-iterable with no length)
 * - Array.from({ length: 3 }) → ✅ [undefined, undefined, undefined]
 * - Spreadable iterables only — won't deep clone structures
 * - Mapping function only runs if iterable is valid
 */

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Use for converting Sets, Maps, NodeLists, Strings, arguments, or any custom iterable.
 * - ✅ Use with mapping callback for inline transformations.
 * - ✅ Safer and clearer than spreading in some cases (e.g., when pre-transforming values).
 * - ⚠️ Do not use on undefined/null directly — wrap with fallback if unsure.
 */

//--------------------------------------------- 🧱 Array.isArray() ---------------------------------------------//

/**
 * ✅ Purpose:
 * Checks whether the given value is a real Array (not just an object with `.length` or indexed keys).
 *
 * 🔧 Syntax:
 * Array.isArray(value)
 *
 * 📥 Parameters:
 * - value (required): Any value to check
 *
 * ✅ Returns:
 * - true if value is a genuine array
 * - false otherwise
 *
 * 🧪 Properties:
 * - 📌 Mutability: ❌ NO (does not modify input)
 * - 🔗 Chainability: ❌ NO (returns boolean, not the input)
 * - 🧠 Reliable: ✅ Works across frames/realms unlike `instanceof`
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES5 / ECMAScript 2009**
 *
 * 🕒 Time Complexity: O(1)
 * 💾 Space Complexity: O(1)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

console.log(Array.isArray());
console.log(Array.isArray([]));
console.log(Array.isArray([1]));
console.log(Array.isArray("abc"));
console.log(Array.isArray(Array()));
console.log(Array.isArray(new Array(3)));
console.log(Array.isArray({}));
console.log(Array.isArray({ length: 10 }));
console.log(Array.isArray(arguments));

(function testArguments() {
    console.log(Array.isArray(arguments));
})();

let nestedArray = [10, [20, 30]];
console.log(Array.isArray(nestedArray[1]));

let objLike = {
    0: "a",
    1: "b",
    length: 2,
};
console.log(Array.isArray(objLike));

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Works correctly even across different execution contexts (e.g., iframes, worker threads)
 * - ✅ Safer than `value instanceof Array` (which fails across realms)
 * - ❌ Cannot detect typed arrays or array-like objects as "real" arrays
 */

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Use `Array.isArray()` over `instanceof Array` in **all cases**
 * - ✅ Very handy when validating JSON-parsed data
 * - ✅ Safe for checking `arguments`, results from third-party libs, etc.
 */

//---------------------------------------- ✂️ Array.prototype.slice() ----------------------------------------//

/**
 * ✅ Purpose:
 * Returns a **shallow copy** of a portion of an array into a new array, selected by start and end indices.
 * Original array is NOT modified.
 *
 * 🔧 Syntax:
 * arr.slice(start?, end?)
 *
 * 📥 Parameters:
 * - start (optional): Zero-based index at which to begin extraction. Defaults to 0. Supports negative indices.
 * - end   (optional): Zero-based index before which to end extraction (non-inclusive). Defaults to arr.length. Supports negative indices.
 *
 *   - Parameter Type coercion:
 *     - `null` → 0
 *     - `undefined` → 0
 *     - `NaN` → 0
 *     - Non-numeric strings → NaN → treated as 0
 *
 * ✅ Returns:
 * - A new array containing the extracted elements.
 *
 * 🧪 Properties:
 * - 📌 Mutability: ❌ NO (non-mutating)
 * - 🔗 Chainability: ✅ YES
 * - 🧠 Supports negative indices
 * - 🧠 Sparse-safe: Preserves holes
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES3 / ECMAScript 1999**
 *
 * 🕒 Time Complexity: O(k) — k = number of items copied
 * 💾 Space Complexity: O(k)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];

console.log(fruits.slice());
console.log(fruits.slice(-2));
console.log(fruits.slice(-5));
console.log(fruits.slice(-100));
console.log(fruits.slice(2));
console.log(fruits.slice(5));
console.log(fruits.slice(2, 3));
console.log(fruits.slice(2, 30));
console.log(fruits.slice(2, -1));
console.log(fruits.slice(2, 2));
console.log(fruits.slice(0));
console.log(fruits.slice(0, 0));
console.log(fruits.slice(0, null));
console.log(fruits.slice(0, undefined));
console.log(fruits.slice(null));
console.log(fruits.slice(null, null));
console.log(fruits.slice(undefined));
console.log(fruits.slice(3, undefined));
console.log(fruits.slice(undefined, undefined));
console.log(fruits.slice("0"));
console.log(fruits.slice("a"));
console.log(fruits.slice("a", "2"));
console.log(fruits.slice("a", "b"));
console.log(fruits.slice(NaN));
console.log(fruits.slice(NaN, NaN));
console.log(fruits);

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

/**
 * - `undefined`, `NaN`, or invalid numbers are coerced to 0
 * - Non-numeric strings like "a" become NaN → treated as 0
 * - Negative indices count from the end
 * - Out-of-bound indices do not throw errors — they return empty array or clamp
 * - Preserves holes (e.g., sparse arrays remain sparse)
 */

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Use for cloning arrays: `let copy = arr.slice();`
 * - ✅ Use `slice()` instead of `splice()` when you don’t want to mutate the original
 * - ⚠️ `slice()` does NOT deep clone nested arrays or objects — it's shallow!
 * - ✅ Works great for pagination, trimming, extracting subsections
 */

//---------------------------------------- 🧬 Array.prototype.splice() ----------------------------------------//

/**
 * ✅ Purpose:
 * Adds, removes, or replaces elements **in-place** in an array.
 *
 * 🔧 Syntax:
 * arr.splice(start, deleteCount?, item1, item2, ...)
 *
 * 📥 Parameters:
 * - start (required): Index to start changing the array .Supports negative indices.
 * - deleteCount (optional): Number of elements to remove
 * - item1, item2, ... (optional): Elements to add at the start index
 *
 *  - Parameter Type coercion:
 *   - `null` → 0
 *   - `undefined` → 0
 *   - `NaN` → 0
 *   - Non-numeric strings → NaN → treated as 0
 *
 * ✅ Returns:
 * - An array containing the removed elements (can be empty)
 *
 * 🧪 Properties:
 * - 📌 Mutability: ✅ YES (in-place mutation)
 * - 🔗 Chainability: ❌ NO (returns deleted items, not mutated array)
 * - 🧠 Works with negative indices
 * - 🧠 Can insert, delete, or replace in a single call
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES3 / ECMAScript 1999**
 *
 * 🕒 Time Complexity: O(n) (shifting elements as needed)
 * 💾 Space Complexity: O(k) (k = number of elements deleted)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];

console.log(fruits.splice());
console.log(fruits);

fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];
console.log(fruits.splice(3));
console.log(fruits);

console.log(fruits.splice(4, 0, "Guava", "Grapes"));
console.log(fruits);

console.log(fruits.splice(4, 1, "Poppaya"));
console.log(fruits);

console.log(fruits.splice(2, 0, "Sapota"));
console.log(fruits);

console.log(fruits.splice(-2, 1, "Kiwis"));
console.log(fruits);

console.log(fruits.splice(3, 1, "Muskmelon"));
console.log(fruits);

console.log(fruits.splice(5, 0, "Lemon", "Pomegranate"));
console.log(fruits);

console.log(fruits.splice(5, 1));
console.log(fruits);

console.log(fruits.splice(6, "a"));
console.log(fruits);

console.log(fruits.splice(6, "1"));
console.log(fruits);

console.log(fruits.splice(2, "a", "Dummy fruit"));
console.log(fruits);

console.log(fruits.splice(2, "1"));
console.log(fruits);

console.log(fruits.splice("a", 2));
console.log(fruits);

//--------------------------------------------------------------------------------------------------//
// ⚠️ Variations with undefined, null, and edge cases
//--------------------------------------------------------------------------------------------------//

fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];

console.log(fruits.splice(undefined));
console.log(fruits);

fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];
console.log(fruits.splice(undefined, undefined));
console.log(fruits);

fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];
console.log(fruits.splice(undefined, undefined, undefined));
console.log(fruits);

fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];
console.log(fruits.splice(null));
console.log(fruits);

fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];
console.log(fruits.splice(null, null));
console.log(fruits);

fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];
console.log(fruits.splice(null, null, null));
console.log(fruits);

//--------------------------------------------------------------------------------------------------//
// 🕳️ Hole Behavior
//--------------------------------------------------------------------------------------------------//

fruits = ["Apple", "Banana", "Cherries"];
console.log(fruits.splice(4, 0, "Guava", "Grapes")); // index > length
console.log(fruits);

/**
 * ❗ Why aren't holes created here?
 * - `splice()` does NOT create holes even if you specify an index beyond current length.
 * - It treats the insert as a push — just appends to the end.
 *
 * To create holes, you need direct assignment like:
 *   let arr = [];
 *   arr[4] = "X"; // creates holes at index 0–3
 */

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

/**
 * - Non-numeric or invalid values like `"a"`, `null`, or `undefined` are coerced:
 *   → `undefined` becomes 0
 *   → `null` becomes 0
 *   → `"a"` becomes NaN → treated as 0
 * - Negative start index counts from end
 * - `deleteCount` is optional → deletes everything from `start` to end
 * - Returned array contains the removed elements
 * - Actual array is modified — elements shift left/right
 */

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ⚠️ Don't confuse with `slice()` — `splice()` mutates, `slice()` does not.
 * - ✅ Use when you need to surgically insert/remove items mid-array.
 * - 🔁 Can replace, delete, and insert in a **single** operation.
 * - 🧼 Use in place of multiple `push()`/`shift()`/`pop()` calls when performance matters.
 */

//---------------------------------------- ❄️ Array.prototype.toSpliced() ----------------------------------------//

/**
 * ✅ Purpose:
 * Returns a **new array** with the same elements as the original,
 * but with the specified elements removed and/or replaced — just like `splice()`, but non-mutating.
 *
 * 🔧 Syntax:
 * arr.toSpliced(start, deleteCount?, item1, item2, ...)
 *
 * 📥 Parameters:
 * - start (required): Index at which to begin changes. Supports negative indices.
 * - deleteCount (optional): Number of items to remove
 * - item1, item2, ... (optional): Items to insert at `start`
 *
 * - Parameter Type coercion:
 *   - `null` → 0
 *   - `undefined` → 0
 *   - `NaN` → 0
 *   - Non-numeric strings → NaN → treated as 0
 *
 * ✅ Returns:
 * - A **new array** with modifications applied
 *
 * 🧪 Properties:
 * - 📌 Mutability: ❌ NO (non-mutating)
 * - 🔗 Chainability: ✅ YES
 * - 🧠 Same API as `splice()` but leaves the original array untouched
 * - 🧠 Does not preserve holes when inserting beyond bounds
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

fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];

console.log(fruits.toSpliced());
console.log(fruits.toSpliced(undefined));
console.log(fruits.toSpliced(undefined, undefined));
console.log(fruits.toSpliced(undefined, undefined, undefined));
console.log(fruits.toSpliced(null));
console.log(fruits.toSpliced(null, null));
console.log(fruits.toSpliced(null, null, null));

console.log(fruits.toSpliced("a"));
console.log(fruits.toSpliced("a", "a"));
console.log(fruits.toSpliced("a", "a", "a"));

console.log(fruits.toSpliced(4));
console.log(fruits.toSpliced(-1));
console.log(fruits.toSpliced(1, 1, "Strange fruit"));

console.log(fruits); // original is untouched

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

/**
 * - `undefined`, `null`, `"a"`, or `NaN` are coerced:
 *   - `undefined` → 0
 *   - `null` → 0
 *   - `"a"` → NaN → 0
 * - Negative `start` counts from the end
 * - `deleteCount` is optional
 * - Returns a new array; original remains unchanged
 * - If `start > length`, items are appended (no holes created)
 */

//--------------------------------------------------------------------------------------------------//
// 🕳️ Hole Behavior
//--------------------------------------------------------------------------------------------------//

/**
 * - Like `splice()`, `toSpliced()` does NOT create holes when inserting beyond bounds
 *   ➤ It appends the items instead
 *
 * Example:
 *   let fruits = ["A", "B", "C"];
 *   let result = fruits.toSpliced(5, 0, "X");
 *   ➤ result: ["A", "B", "C", "X"]
 *   ➤ no holes at index 3 or 4!
 */

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Prefer over `splice()` when working with immutable state (e.g., React, Redux)
 * - ✅ Great for safe undo operations or keeping history snapshots
 * - 🧠 API parity with `splice()` makes it an easy drop-in replacement when mutation is not desired
 */
//---------------------------------------- 🪞 Array.prototype.copyWithin() ----------------------------------------//

/**
 * ✅ Purpose:
 * Shallow-copies part of an array **to another location within the same array** without modifying its length.
 *
 * 🔧 Syntax:
 * arr.copyWithin(target, start = 0, end = arr.length)
 *
 * 📥 Parameters:
 * - target (required): Index to copy elements **to** . Supports negative indices.
 * - start (optional): Index to copy elements **from** (default = 0). Supports negative indices.
 * - end (optional): Index to **stop copying** (default = array.length) — exclusive. Supports negative indices.
 *
 *  - Parameter Type coercion:
 *   - `null` → 0
 *   - `undefined` → 0
 *   - `NaN` → 0
 *   - Non-numeric strings → NaN → treated as 0
 *
 * ✅ Returns:
 * - The **modified array** itself (in-place)
 *
 * 🧪 Properties:
 * - 📌 Mutability: ✅ YES
 * - 🔗 Chainability: ✅ YES
 * - 🧠 Does NOT add or remove elements (length stays the same)
 * - 🧠 Overwrites existing values at the target
 * - 🧠 Supports negative indices
 * - 🧠 Preserves holes (copies them too)
 * - 🧠 Shallow copy (objects copied by reference)
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES6 / ECMAScript 2015**
 *
 * 🕒 Time Complexity: O(k) (k = number of items copied)
 * 💾 Space Complexity: O(1)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

fruits = ["Apple", "Banana", "Cherries", , "Orange", "Mango"];

console.log(fruits.copyWithin(0));
fruits = ["Apple", "Banana", "Cherries", , "Orange", "Mango"];
console.log(fruits.copyWithin(2));
fruits = ["Apple", "Banana", "Cherries", , "Orange", "Mango"];
console.log(fruits.copyWithin(2, 1));
fruits = ["Apple", "Banana", "Cherries", , "Orange", "Mango"];
console.log(fruits.copyWithin(2, 1, 3));
fruits = ["Apple", "Banana", "Cherries", , "Orange", "Mango"];
console.log(fruits.copyWithin(3, 1));
console.log(fruits);
fruits = ["Apple", "Banana", "Cherries", , "Orange", "Mango"];
console.log(fruits.copyWithin(0, 1));

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

let nums = [1, 2, 3, 4, 5];

console.log(nums.copyWithin(-4, -3, -1)); // negative target and start

console.log([].copyWithin(0, 1)); // empty array → still []

console.log([1, 2, 3].copyWithin(NaN)); // NaN is treated as 0

// Holes are preserved
let sparse = [1, , 3, , 5];
console.log(sparse.copyWithin(1, 3)); // copies hole to index 1

//--------------------------------------------------------------------------------------------------//
// 🕳️ Hole Behavior
//--------------------------------------------------------------------------------------------------//

/**
 * - Holes (empty slots) are **copied exactly as-is**
 * - They are **not skipped**, so a copied hole results in a hole
 * - Does NOT create new holes — it only overwrites
 *
 * Example:
 * let a = [1, , 3];
 * a.copyWithin(1, 0, 1) ➤ [1, 1, 3] (hole at index 1 is overwritten)
 *
 * let b = [1, , 3, , 5];
 * b.copyWithin(1, 3) ➤ [1, , 5, , 5]
 */

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Useful for fast in-place shifts, swaps, or reordering
 * - ✅ Doesn’t allocate new memory (space-efficient)
 * - ⚠️ Be careful with overlapping regions — order of overwrite matters!
 * - ⚠️ Shallow copy: referenced objects will still point to the same memory
 */

//---------------------------------------- 🧂 Array.prototype.fill() ----------------------------------------//

/**
 * ✅ Purpose:
 * Fills all (or part of) an array with a static value.
 *
 * 🔧 Syntax:
 * arr.fill(value, start = 0, end = arr.length)
 *
 * 📥 Parameters:
 * - value (required): The value to fill array with
 * - start (optional): The index to start filling (default: 0). Supports negative indices.
 * - end (optional): The index to stop filling (exclusive, default: arr.length). Supports negative indices.
 *
 *  - Parameter Type coercion:
 *   - `null` → 0
 *   - `undefined` → 0original examples that I have provided in the given initial file so you need to provide all of the initial examples in the respect to method and also you need to provide the proper formatting like the one which we are doing in this way
 *   - `NaN` → 0
 *   - Non-numeric strings → NaN → treated as 0
 *
 * ✅ Returns:
 * - The **modified** array (same reference)
 *
 * 🧪 Properties:
 * - 📌 Mutability: ✅ YES
 * - 🔗 Chainability: ✅ YES
 * - 🧠 Overwrites values in-place from start to end
 * - 🧠 Works on holes — fills even empty slots!
 * - 🧠 Can use object reference (not deep copy)
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES6 / ECMAScript 2015**
 *
 * 🕒 Time Complexity: O(k) (k = end - start)
 * 💾 Space Complexity: O(1)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];

console.log(fruits.fill());
fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];
console.log(fruits.fill(""));
fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];
console.log(fruits.fill("", 2));
fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];
console.log(fruits.fill("", 2, 3));
fruits = ["Apple", "Banana", "Dummy fruit", "Orange", "Mango"];
console.log(fruits.fill("Cherries", 2, 3));

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

let arr;

// Fill on holes
arr = new Array(5);
console.log(arr.fill(0));

// Negative indices
arr = [1, 2, 3, 4, 5];
console.log(arr.fill(9, -3)); // starts at index 2

// Negative start and end
arr = [1, 2, 3, 4, 5];
console.log(arr.fill(8, -4, -2)); // from index 1 to 3

// Filling objects (reference)
arr = new Array(3).fill({ a: 1 });
arr[0].a = 100;
console.log(arr); // all 3 items are updated (same object)

// Sparse array: holes get filled
arr = [1, , 3, , 5];
console.log(arr.fill(0));

// Non-numeric/invalid input
try {
    console.log([1, 2, 3].fill(undefined, "a", "z"));
} catch (err) {
    console.log(err);
}

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Great for pre-filling arrays for testing, resets, and initialization
 * - ✅ Works with `.map()` to generate patterns after filling
 * - ⚠️ When filling with objects, all elements share the same reference
 * - ⚠️ Replaces holes and values alike — doesn't skip anything
 * - ✅ Use with `.from({ length })` or `Array(n)` to quickly create structured arrays
 */

//---------------------------------------- 🔍 Array.prototype.includes() ----------------------------------------//

/**
 * ✅ Purpose:
 * Checks if the array contains a specific element.
 *
 * 🔧 Syntax:
 * arr.includes(searchElement, fromIndex = 0)
 *
 * 📥 Parameters:
 * - searchElement (required): The element to search for
 * - fromIndex (optional): The index to start searching from (can be negative)
 *
 * ✅ Returns:
 * - true if the element is found
 * - false otherwise
 *
 * 🧪 Properties:
 * - 📌 Mutability: ❌ NO
 * - 🔗 Chainability: ❌ NO (returns boolean)
 * - 🧠 Uses strict equality (like ===) with a special case: `NaN` is considered equal to `NaN`
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES7 / ECMAScript 2016**
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(1)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango", "Apple"];

console.log(fruits.includes("Banana"));
console.log(fruits.includes("Ban"));
console.log(fruits.includes("Banana", 2));
console.log(fruits.includes("Banana", 6));
console.log(fruits.includes("Banana", -2));
console.log(fruits.includes("Banana", -5));
console.log(fruits.includes("Banana", -6));

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

/**
 * - Negative `fromIndex` is counted from the end (e.g. -1 means last element)
 * - If `fromIndex >= array.length`, returns false
 * - If `fromIndex < -array.length`, search starts from index 0
 * - Can detect `NaN` correctly, unlike `indexOf()`
 */

console.log([NaN].includes(NaN));
console.log([undefined].includes(undefined)); // true
console.log([null].includes(null)); // true

console.log([1, 2, 3].includes(3, 3)); // false (start index beyond length)
console.log([1, 2, 3].includes(1, -100)); // true (start index below -length → 0)

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Safer and cleaner than `indexOf(...) !== -1`
 * - ✅ Preferred for readability in modern codebases
 * - ✅ Works well in conditionals for presence checks
 * - ❌ Cannot match deep equality (e.g., objects or arrays by structure)
 */

//---------------------------------------- 🔢 Array.prototype.indexOf() ----------------------------------------//

/**
 * ✅ Purpose:
 * Returns the **first index** at which a given element is found in the array, or -1 if not present.
 *
 * 🔧 Syntax:
 * arr.indexOf(searchElement, fromIndex = 0)
 *
 * 📥 Parameters:
 * - searchElement (required): Element to locate in the array
 * - fromIndex (optional): Index to start the search (can be negative)
 *
 * ✅ Returns:
 * - First index of matching element (or -1 if not found)
 *
 * 🧪 Properties:
 * - 📌 Mutability: ❌ NO
 * - 🔗 Chainability: ❌ NO
 * - 🧠 Uses strict equality (`===`) — does NOT find `NaN`
 * - 🧠 Stops at first match
 * - 🧠 Search is forward-only
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES5 / ECMAScript 2009**
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(1)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango", "Apple"];

console.log(fruits.indexOf());
console.log(fruits.indexOf("Apple"));
console.log(fruits.indexOf("Apple", 0));
console.log(fruits.indexOf("Apple", 1));
console.log(fruits.indexOf("Apple", 100));
console.log(fruits.indexOf("Apple", -100));
console.log(fruits.indexOf("App"));

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

/**
 * - If fromIndex < 0, it's treated as array.length + fromIndex
 * - If fromIndex >= array.length → returns -1
 * - Uses strict comparison (`===`) → no coercion
 * - Cannot find NaN (use `findIndex()` or `includes()` instead)
 */

console.log([1, 2, NaN].indexOf(NaN)); // -1
console.log([undefined].indexOf(undefined)); // 0
console.log([null].indexOf(null)); // 0
console.log([false].indexOf(false)); // 0
console.log([1, 2, 3].indexOf(3, 3)); // -1

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Use when you need the actual position of a value
 * - ⚠️ Avoid for deep comparison (objects/arrays will fail unless same reference)
 * - ❌ Cannot detect `NaN` — use `includes()` or `findIndex()` for that
 * - 🔄 Useful when building custom filters, loops, or conditionally updating elements
 */
//---------------------------------------- 🔙 Array.prototype.lastIndexOf() ----------------------------------------//

/**
 * ✅ Purpose:
 * Returns the **last index** at which a given element can be found in the array, or -1 if not found.
 *
 * 🔧 Syntax:
 * arr.lastIndexOf(searchElement, fromIndex = arr.length - 1)
 *
 * 📥 Parameters:
 * - searchElement (required): Element to locate
 * - fromIndex (optional): Index to start searching **backward** from
 *
 * ✅ Returns:
 * - Last index of matching element, or -1 if not found
 *
 * 🧪 Properties:
 * - 📌 Mutability: ❌ NO
 * - 🔗 Chainability: ❌ NO
 * - 🧠 Uses strict equality (`===`)
 * - 🧠 Does NOT find `NaN`
 * - 🧠 Search proceeds from right to left
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES5 / ECMAScript 2009**
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(1)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango", "Apple"];

console.log(fruits.lastIndexOf());
console.log(fruits.lastIndexOf("Apple"));
console.log(fruits.lastIndexOf("Apple", 4));
console.log(fruits.lastIndexOf("Apple", 5));
console.log(fruits.lastIndexOf("Apple", 100));
console.log(fruits.lastIndexOf("Apple", -100));
console.log(fruits.lastIndexOf("App"));

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

/**
 * - If fromIndex is negative, it's added to array.length
 * - If fromIndex is greater than array length, the entire array is searched
 * - Returns -1 if item not found
 * - Uses strict equality → `NaN` is not matched
 */

console.log([1, 2, NaN].lastIndexOf(NaN)); // -1
console.log([null, null, null].lastIndexOf(null)); // 2
console.log([false, true, false].lastIndexOf(false)); // 2
console.log(["a", "b", "c", "b", "a"].lastIndexOf("b", 3)); // 3
console.log(["a", "b", "c", "b", "a"].lastIndexOf("b", 2)); // 1
console.log(["a", "b", "c", "b", "a"].lastIndexOf("b", -2)); // 1

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Use when you need the most recent match in a reversed loop or trace
 * - ✅ Use in scenarios like finding the last error, latest event, etc.
 * - ⚠️ Cannot detect `NaN` → use `findLastIndex()` if needed
 * - ❌ Slower than `indexOf()` if the match is near the start
 */

//---------------------------------------- 📍 Array.prototype.at() ----------------------------------------//

/**
 * ✅ Purpose:
 * Returns the element at the specified index, supporting **negative indexing**.
 *
 * 🔧 Syntax:
 * arr.at(index)
 *
 * 📥 Parameters:
 * - index (required): Position to access (can be negative)
 *
 * ✅ Returns:
 * - Element at that position, or `undefined` if out of bounds
 *
 * 🧪 Properties:
 * - 📌 Mutability: ❌ NO
 * - 🔗 Chainability: ❌ NO
 * - 🧠 Supports negative indexing (e.g., -1 = last item)
 * - 🧠 Handles sparse arrays normally (returns `undefined` if hole)
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES13 / ECMAScript 2022**
 *
 * 🕒 Time Complexity: O(1)
 * 💾 Space Complexity: O(1)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

fruits = ["Apple", "Banana", "Cherries", "Orange", "Mango"];

console.log(fruits.at());
console.log(fruits.at(1));
console.log(fruits.at(-1));
console.log(fruits[1]); // same as at(1)
console.log(fruits[-1]); // ❌ returns undefined, not last item

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

/**
 * - index < -length → returns undefined
 * - index >= length → returns undefined
 * - Works on sparse arrays
 * - index is coerced to integer (floating point or NaN becomes 0)
 */

sparse = [1, , 3];
console.log(sparse.at(1)); // undefined (hole remains a hole)

console.log([1, 2, 3].at(5)); // undefined
console.log([1, 2, 3].at(-5)); // undefined
console.log([1, 2, 3].at("1")); // coerced to 1 → 2
console.log([1, 2, 3].at(null)); // 0 → 1
console.log([1, 2, 3].at(NaN)); // 0 → 1

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//OK great so far we have completed two sections

/**
 * - ✅ Use when you want readable code that supports negative indexing
 * - ✅ Cleaner than arr[arr.length - 1] when accessing from end
 * - ✅ Works with all array-like objects (e.g., strings, typed arrays)
 * - ✅ Good for pagination, slicing, history stack access, or buffer queues
 */
//---------------------------------------- 🔁 Array.prototype.forEach() ----------------------------------------//

/**
 * ✅ Purpose:
 * Executes a provided callback function once per array element (in order).
 *
 * 🔧 Syntax:
 * arr.forEach(callbackFn, thisArg?)
 *
 * 📥 Parameters:
 * - callbackFn (required): Function to execute for each element.
 *     ➤ Receives: element, index, array
 * - thisArg (optional): Value to use as `this` when executing callback
 *
 * ✅ Returns:
 * - undefined
 *
 * 🧪 Properties:
 * - 📌 Mutability: ❌ NO (unless callback mutates it manually)
 * - 🔗 Chainability: ❌ NO
 * - 🧠 Skips holes (sparse elements are ignored)
 * - 🧠 Cannot break early (no return, break, or continue allowed)
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES5 / ECMAScript 2009**
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(1)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

let avengers = ["Captain America", "Iron Man", "Thor", "Hulk", "HawkEye", "Black Widow", "Spider Man"];

avengers.forEach((hero) => {
    console.log(hero.toUpperCase());
    console.log(hero.toLowerCase());
});

let emptySlots = [1, , 3];
emptySlots.forEach((val, i) => {
    console.log(i, val);
});

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

/**
 * - Holes (empty slots) are skipped silently
 * - Callback must be provided → otherwise throws TypeError
 * - Cannot be exited early (no break or return)
 */

try {
    [1, 2, 3].forEach(); // Missing callback
} catch (err) {
    console.log(err);
}

//--------------------------------------------------------------------------------------------------//
// 🔁 Parameter Type Coercion
//--------------------------------------------------------------------------------------------------//

/**
 * - thisArg: If not provided, `undefined` in strict mode, `window/global` in non-strict
 * - callbackFn: Mandatory. Not providing it throws error
 */

//--------------------------------------------------------------------------------------------------//
// 🧭 Negative Index Support
//--------------------------------------------------------------------------------------------------//

/**
 * ❌ Not applicable. Indexes are generated internally by the array itself.
 */

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Best for side effects (logging, mutation, DOM manipulation)
 * - ❌ Not useful when you want to return a transformed array (use `map()` instead)
 * - ✅ Safer than `for...in` for numeric index iteration
 */

//---------------------------------------- 🔁 Array.prototype.map() ----------------------------------------//

/**
 * ✅ Purpose:
 * Returns a **new array** with the results of calling a provided function on every element.
 *
 * 🔧 Syntax:
 * arr.map(callbackFn, thisArg?)
 *
 * 📥 Parameters:
 * - callbackFn (required): Function to execute on each element
 *     ➤ Receives: element, index, array
 * - thisArg (optional): Value to use as `this` inside the callback
 *
 * ✅ Returns:
 * - A new array with transformed values
 *
 * 🧪 Properties:
 * - 📌 Mutability: ❌ NO (non-mutating)
 * - 🔗 Chainability: ✅ YES
 * - 🧠 Skips holes (does not call callback on them)
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES5 / ECMAScript 2009**
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

avengers = ["Captain America", "Iron Man", "Thor", "Hulk", "HawkEye", "Black Widow", "Spider Man"];

let uppercased = avengers.map((hero) => hero.toUpperCase());
console.log(uppercased);

let repeated = avengers.map((hero) => [hero, hero.length]);
console.log(repeated);

let holes = [1, , 3];
let doubled = holes.map((x) => x * 2);
console.log(doubled);

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

/**
 * - Holes are skipped and preserved in resulting array
 * - If callback is missing, throws TypeError
 */

try {
    [1, 2, 3].map();
} catch (err) {
    console.log(err);
}

//--------------------------------------------------------------------------------------------------//
// 🔁 Parameter Type Coercion
//--------------------------------------------------------------------------------------------------//

/**
 * - thisArg: Used as `this` inside the callback if provided
 * - callbackFn: Must be a function; if not provided, throws
 */

//--------------------------------------------------------------------------------------------------//
// 🧭 Negative Index Support
//--------------------------------------------------------------------------------------------------//

/**
 * ❌ Not applicable — indexes are internally provided
 */

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Use `map()` when you want to transform values into a new array
 * - ✅ Chainable with `filter()`, `reduce()`, etc.
 * - ⚠️ Avoid side-effects; it's designed for transformation, not mutation
 */

//---------------------------------------- 🧹 Array.prototype.filter() ----------------------------------------//

/**
 * ✅ Purpose:
 * Creates a **new array** with all elements that pass the test implemented by the provided callback function.
 *
 * 🔧 Syntax:
 * arr.filter(callbackFn, thisArg?)
 *
 * 📥 Parameters:
 * - callbackFn (required): Function to test each element
 *     ➤ Receives: element, index, array
 * - thisArg (optional): Value to use as `this` inside the callback
 *
 * ✅ Returns:
 * - A new array with elements that pass the test
 *
 * 🧪 Properties:
 * - 📌 Mutability: ❌ NO (non-mutating)
 * - 🔗 Chainability: ✅ YES
 * - 🧠 Skips holes (callback is not called for empty slots)
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES5 / ECMAScript 2009**
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

avengers = ["Captain America", "Iron Man", "Thor", "Hulk", "HawkEye", "Black Widow", "Spider Man"];

let startsWithI = avengers.filter((hero) => hero.toLowerCase().startsWith("i"));
console.log(startsWithI);

let containsMan = avengers.filter((hero) => hero.match(/man/i));
console.log(containsMan);

holes = [1, , 3, 4];
let filtered = holes.filter((x) => x > 2);
console.log(filtered);

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

/**
 * - Holes are skipped
 * - If no elements match, returns an empty array
 * - If callback is not a function, throws TypeError
 */

try {
    [1, 2, 3].filter();
} catch (err) {
    console.log(err);
}

//--------------------------------------------------------------------------------------------------//
// 🔁 Parameter Type Coercion
//--------------------------------------------------------------------------------------------------//

/**
 * - thisArg: Optional binding for `this` inside the callback
 * - callbackFn: Must be a function; otherwise, throws TypeError
 */

//--------------------------------------------------------------------------------------------------//
// 🧭 Negative Index Support
//--------------------------------------------------------------------------------------------------//

/**
 * ❌ Not applicable — indexes are assigned internally
 */

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Ideal for extracting subsets of data
 * - ✅ Commonly chained with `map()` and `reduce()`
 * - ⚠️ Does not modify the original array
 * - ⚠️ Works only with truthy return values — `false`/`undefined`/`null` filters out
 */

//---------------------------------------- 🧮 Array.prototype.reduce() ----------------------------------------//

/**
 * ✅ Purpose:
 * Reduces the array to a single value by executing a reducer function on each element (from left to right).
 *
 * 🔧 Syntax:
 * arr.reduce(callbackFn, initialValue?)
 *
 * 📥 Parameters:
 * - callbackFn (required): Function to execute on each element
 *     ➤ Receives: accumulator, currentValue, currentIndex, array
 * - initialValue (optional): Value to use as the first argument to the first call of the callback
 *
 * ✅ Returns:
 * - The final accumulated value
 *
 * 🧪 Properties:
 * - 📌 Mutability: ❌ NO
 * - 🔗 Chainability: ❌ NO
 * - 🧠 Executes left-to-right
 * - 🧠 If no initialValue is provided, first element is used as accumulator (skips callback for that index)
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES5 / ECMAScript 2009**
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(1)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

numbers = [234, 43, 234, -57, -56, -20, 55, 63, 5, 6, 235, 547];

let total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total);

let sentenceWords = ["A", "Quick", "Brown", "Fox", "Jumps", "Over", "A", "Lazy", "Dog"];

let sentence = sentenceWords.reduce((acc, word) => acc + " " + word);
console.log(sentence);

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

/**
 * - If array is empty and no initialValue is provided → throws TypeError
 * - Holes are skipped
 * - Works right from index 0 when initialValue is provided, else starts from index 1
 */

try {
    [].reduce((acc, val) => acc + val);
} catch (err) {
    console.log(err);
}

sparse = [, , 3];
let result = sparse.reduce((acc, val) => acc + val, 0);
console.log(result);

//--------------------------------------------------------------------------------------------------//
// 🔁 Parameter Type Coercion
//--------------------------------------------------------------------------------------------------//

/**
 * - callbackFn must be a function → otherwise throws TypeError
 * - initialValue is optional; if omitted, array[0] is used
 */

//--------------------------------------------------------------------------------------------------//
// 🧭 Negative Index Support
//--------------------------------------------------------------------------------------------------//

/**
 * ❌ Not applicable — indexes are sequentially accessed left to right
 */

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Great for aggregations (sum, product, max, etc.)
 * - ✅ Useful for complex transformations (grouping, merging, flattening)
 * - ⚠️ If no initial value and array is empty → error
 * - ⚠️ Chaining with `map()`/`filter()` can simplify logic
 */

//---------------------------------------- 🔁 Array.prototype.reduceRight() ----------------------------------------//

/**
 * ✅ Purpose:
 * Works like `reduce()`, but processes the array **from right to left**.
 *
 * 🔧 Syntax:
 * arr.reduceRight(callbackFn, initialValue?)
 *
 * 📥 Parameters:
 * - callbackFn (required): Function to execute on each element
 *     ➤ Receives: accumulator, currentValue, currentIndex, array
 * - initialValue (optional): Value to use as the first argument to the first call of the callback
 *
 * ✅ Returns:
 * - The final accumulated value
 *
 * 🧪 Properties:
 * - 📌 Mutability: ❌ NO
 * - 🔗 Chainability: ❌ NO
 * - 🧠 Executes from right to left
 * - 🧠 If no initialValue is provided, last element is used as accumulator
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES5 / ECMAScript 2009**
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(1)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

let words = ["A", "Quick", "Brown", "Fox", "Jumps", "Over", "A", "Lazy", "Dog"];

let reversedSentence = words.reduceRight((acc, word) => acc + " " + word);
console.log(reversedSentence);

numbers = [1, 2, 3, 4];
let multiplyRight = numbers.reduceRight((acc, num) => acc * num);
console.log(multiplyRight);

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

/**
 * - If array is empty and no initialValue is provided → throws TypeError
 * - Holes are skipped
 * - Works from last index to first
 */

try {
    [].reduceRight((acc, val) => acc + val);
} catch (err) {
    console.log(err);
}

sparse = [, , 5];
result = sparse.reduceRight((acc, val) => acc + val, 0);
console.log(result);

//--------------------------------------------------------------------------------------------------//
// 🔁 Parameter Type Coercion
//--------------------------------------------------------------------------------------------------//

/**
 * - callbackFn must be a function → otherwise throws TypeError
 * - initialValue is optional; if omitted, array[last] is used
 */

//--------------------------------------------------------------------------------------------------//
// 🧭 Negative Index Support
//--------------------------------------------------------------------------------------------------//

/**
 * ❌ Not applicable — indexes are accessed in reverse order
 */

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Use when reduction order matters (e.g., right-associative operations)
 * - ✅ Helpful for parsing or reverse calculations
 * - ⚠️ Don't forget that right-to-left may affect logic/results
 */

//---------------------------------------- 🔎 Array.prototype.some() ----------------------------------------//

/**
 * ✅ Purpose:
 * Tests whether at least one element in the array passes the test implemented by the provided callback function.
 *
 * 🔧 Syntax:
 * arr.some(callbackFn, thisArg?)
 *
 * 📥 Parameters:
 * - callbackFn (required): Function to test each element
 *     ➤ Receives: element, index, array
 * - thisArg (optional): Value to use as `this` inside the callback
 *
 * ✅ Returns:
 * - true if the callback returns a truthy value for any element
 * - false otherwise
 *
 * 🧪 Properties:
 * - 📌 Mutability: ❌ NO
 * - 🔗 Chainability: ❌ NO
 * - 🧠 Short-circuits on first match
 * - 🧠 Skips holes (sparse elements are ignored)
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES5 / ECMAScript 2009**
 *
 * 🕒 Time Complexity: O(n) worst case
 * 💾 Space Complexity: O(1)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

numbers = [234, 43, 234, -57, -56, -20, 55, 63, 5, 6, 235, 547];

console.log(numbers.some((num) => num < -50));
console.log(numbers.some((num) => num < -150));
console.log([10, , 15].some((num) => num <= 10));
console.log([].some((num) => num <= 10));
console.log(numbers.some((num) => true));
console.log([].some(() => true));

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

/**
 * - Stops iteration after first match (short-circuits)
 * - If array is empty → returns false
 * - If callback always false → returns false
 * - Skips holes (sparse elements)
 */

//--------------------------------------------------------------------------------------------------//
// 🔁 Parameter Type Coercion
//--------------------------------------------------------------------------------------------------//

/**
 * - callbackFn: Must be a function; otherwise throws TypeError
 * - thisArg: Optional; coerced and used as `this` in callback
 */

//--------------------------------------------------------------------------------------------------//
// 🧭 Negative Index Support
//--------------------------------------------------------------------------------------------------//

/**
 * ❌ Not applicable — indexes are internally generated
 */

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Ideal for checking conditions like presence, eligibility, matching patterns
 * - ✅ Faster than `filter().length > 0` due to short-circuiting
 * - ⚠️ Does not return the element itself — only a boolean result
 */
//---------------------------------------- ✅ Array.prototype.every() ----------------------------------------//

/**
 * ✅ Purpose:
 * Tests whether **all elements** in the array pass the test implemented by the provided callback function.
 *
 * 🔧 Syntax:
 * arr.every(callbackFn, thisArg?)
 *
 * 📥 Parameters:
 * - callbackFn (required): Function to test each element
 *     ➤ Receives: element, index, array
 * - thisArg (optional): Value to use as `this` inside the callback
 *
 * ✅ Returns:
 * - true if callback returns a truthy value for **all** elements
 * - false otherwise
 *
 * 🧪 Properties:
 * - 📌 Mutability: ❌ NO
 * - 🔗 Chainability: ❌ NO
 * - 🧠 Short-circuits on first failure
 * - 🧠 Skips holes (sparse elements are ignored)
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES5 / ECMAScript 2009**
 *
 * 🕒 Time Complexity: O(n) worst case
 * 💾 Space Complexity: O(1)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

numbers = [234, 43, 234, -57, -56, -20, 55, 63, 5, 6, 235, 547];

console.log(numbers.every((num) => num < 1000));
console.log([10, , 15].every((num) => num >= 10));
console.log([10, undefined, 15].every((num) => num >= 10));
console.log([10, , 15].every((num) => num !== undefined && num >= 10));
console.log([10, undefined, 15].every((num) => num !== undefined && num >= 10));

console.log([].every((num) => num >= 10));
console.log(
    [].every(() => {
        return false;
    })
);
console.log(numbers.every((num) => false));
console.log([].every(() => false));

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

/**
 * - Returns true for empty arrays
 * - Short-circuits on first `false`
 * - Skips holes
 * - All values must return truthy for `true` result
 */

//--------------------------------------------------------------------------------------------------//
// 🔁 Parameter Type Coercion
//--------------------------------------------------------------------------------------------------//

/**
 * - callbackFn: Must be a function; otherwise throws TypeError
 * - thisArg: Optional; coerced and used as `this` in callback
 */

//--------------------------------------------------------------------------------------------------//
// 🧭 Negative Index Support
//--------------------------------------------------------------------------------------------------//

/**
 * ❌ Not applicable — indexes are internally generated
 */

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Useful for validations, all-pass filters, and constraints
 * - ✅ More efficient than `filter().length === array.length`
 * - ⚠️ Does not return which value failed — only boolean
 * - ✅ Empty array always returns true (vacuous truth)
 */

//---------------------------------------- 🔍 Array.prototype.find() ----------------------------------------//

/**
 * ✅ Purpose:
 * Returns the **first element** in the array that satisfies the provided testing function.
 *
 * 🔧 Syntax:
 * arr.find(callbackFn, thisArg?)
 *
 * 📥 Parameters:
 * - callbackFn (required): Function to execute on each element
 *     ➤ Receives: element, index, array
 * - thisArg (optional): Value to use as `this` inside the callback
 *
 * ✅ Returns:
 * - The first element that satisfies the condition
 * - undefined if no match is found
 *
 * 🧪 Properties:
 * - 📌 Mutability: ❌ NO
 * - 🔗 Chainability: ❌ NO
 * - 🧠 Stops after finding the first match
 * - 🧠 Skips holes (sparse elements are ignored)
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES6 / ECMAScript 2015**
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(1)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

numbers = [234, 43, 234, -57, -56, -20, 55, 63, 5, 6, 235, 547];

console.log(numbers.findIndex((num) => num > 100));
console.log(numbers.findIndex((num) => num > 500));
console.log(numbers.findIndex((num) => num > 600));
console.log(numbers.findIndex((num) => true));
console.log(numbers.findIndex((num) => false));

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

/**
 * - Returns undefined if no element matches
 * - Stops at first match
 * - Skips holes
 * - callback must return a truthy/falsy value
 */

sparse = [, , 50, 100];
console.log(sparse.find((x) => x > 10));

//--------------------------------------------------------------------------------------------------//
// 🔁 Parameter Type Coercion
//--------------------------------------------------------------------------------------------------//

/**
 * - callbackFn: Must be a function; otherwise throws TypeError
 * - thisArg: Optional and coerced if provided
 */

//--------------------------------------------------------------------------------------------------//
// 🧭 Negative Index Support
//--------------------------------------------------------------------------------------------------//

/**
 * ❌ Not applicable — index is generated internally
 */

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Great for locating first match from a search condition
 * - ✅ Safer and cleaner than manual loop search
 * - ❌ Only returns the value, not the index (use `findIndex()` for index)
 * - ✅ Short-circuits once a match is found
 */

//---------------------------------------- 🔍 Array.prototype.findLast() ----------------------------------------//

/**
 * ✅ Purpose:
 * Returns the **last element** in the array that satisfies the provided testing function.
 *
 * 🔧 Syntax:
 * arr.findLast(callbackFn, thisArg?)
 *
 * 📥 Parameters:
 * - callbackFn (required): Function to execute on each element
 *     ➤ Receives: element, index, array
 * - thisArg (optional): Value to use as `this` inside the callback
 *
 * ✅ Returns:
 * - The last element that satisfies the condition
 * - undefined if no match is found
 *
 * 🧪 Properties:
 * - 📌 Mutability: ❌ NO
 * - 🔗 Chainability: ❌ NO
 * - 🧠 Iterates from right to left
 * - 🧠 Skips holes (sparse elements are ignored)
 * - 🧠 Stops after finding the first match from the end
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES14 / ECMAScript 2023**
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(1)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

numbers = [234, 43, 234, -57, -56, -20, 55, 63, 5, 6, 235, 547];

console.log(numbers.findLastIndex((num) => num > 100));
console.log(numbers.findLastIndex((num) => num > 500));
console.log(numbers.findLastIndex((num) => num > 600));
console.log(numbers.findLastIndex((num) => true));
console.log(numbers.findLastIndex((num) => false));

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

/**
 * - Returns undefined if no element matches
 * - Stops at first match from the right
 * - Skips holes
 * - callback must return a truthy/falsy value
 */

sparse = [, , 50, 100];
console.log(sparse.findLast((x) => x > 10));

//--------------------------------------------------------------------------------------------------//
// 🔁 Parameter Type Coercion
//--------------------------------------------------------------------------------------------------//

/**
 * - callbackFn: Must be a function; otherwise throws TypeError
 * - thisArg: Optional and coerced if provided
 */

//--------------------------------------------------------------------------------------------------//
// 🧭 Negative Index Support
//--------------------------------------------------------------------------------------------------//

/**
 * ❌ Not applicable — index is generated internally
 */

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Useful for reverse lookups, last-match conditions, and log/event checks
 * - ✅ Safer than manual reverse iteration
 * - ❌ Only returns the value, not the index (use `findLastIndex()` for index)
 * - ✅ Stops at first match from the right
 */

//---------------------------------------- 🔍 Array.prototype.findIndex() ----------------------------------------//

/**
 * ✅ Purpose:
 * Returns the **index** of the **first element** in the array that satisfies the provided testing function.
 *
 * 🔧 Syntax:
 * arr.findIndex(callbackFn, thisArg?)
 *
 * 📥 Parameters:
 * - callbackFn (required): Function to execute on each element
 *     ➤ Receives: element, index, array
 * - thisArg (optional): Value to use as `this` inside the callback
 *
 * ✅ Returns:
 * - Index of the first matched element
 * - -1 if no match is found
 *
 * 🧪 Properties:
 * - 📌 Mutability: ❌ NO
 * - 🔗 Chainability: ❌ NO
 * - 🧠 Stops after finding the first match
 * - 🧠 Skips holes (sparse elements are ignored)
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES6 / ECMAScript 2015**
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(1)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

numbers = [234, 43, 234, -57, -56, -20, 55, 63, 5, 6, 235, 547];

console.log(numbers.findIndex((num) => num > 100));
console.log(numbers.findIndex((num) => num > 500));
console.log(numbers.findIndex((num) => num > 600));
console.log(numbers.findIndex((num) => true));
console.log(numbers.findIndex((num) => false));

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

/**
 * - Returns -1 if no match is found
 * - Stops at first match
 * - Skips holes
 */

sparse = [, , 50, 100];
console.log(sparse.findIndex((x) => x > 10));

//--------------------------------------------------------------------------------------------------//
// 🔁 Parameter Type Coercion
//--------------------------------------------------------------------------------------------------//

/**
 * - callbackFn: Must be a function; otherwise throws TypeError
 * - thisArg: Optional and coerced if provided
 */

//--------------------------------------------------------------------------------------------------//
// 🧭 Negative Index Support
//--------------------------------------------------------------------------------------------------//

/**
 * ❌ Not applicable — index is generated internally
 */

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Use to get position of matching element (vs value in `find()`)
 * - ✅ Useful when combining with other methods like `slice()` or `splice()`
 * - ⚠️ Index of first match only — not all matches
 */

//---------------------------------------- 🔍 Array.prototype.findLastIndex() ----------------------------------------//

/**
 * ✅ Purpose:
 * Returns the **index** of the **last element** in the array that satisfies the provided testing function.
 *
 * 🔧 Syntax:
 * arr.findLastIndex(callbackFn, thisArg?)
 *
 * 📥 Parameters:
 * - callbackFn (required): Function to execute on each element
 *     ➤ Receives: element, index, array
 * - thisArg (optional): Value to use as `this` inside the callback
 *
 * ✅ Returns:
 * - Index of the last matched element
 * - -1 if no match is found
 *
 * 🧪 Properties:
 * - 📌 Mutability: ❌ NO
 * - 🔗 Chainability: ❌ NO
 * - 🧠 Iterates from right to left
 * - 🧠 Skips holes (sparse elements are ignored)
 * - 🧠 Stops after finding the first match from the right
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES14 / ECMAScript 2023**
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(1)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

numbers = [234, 43, 234, -57, -56, -20, 55, 63, 5, 6, 235, 547];

console.log(numbers.findLastIndex((num) => num > 100));
console.log(numbers.findLastIndex((num) => num > 500));
console.log(numbers.findLastIndex((num) => num > 600));
console.log(numbers.findLastIndex((num) => true));
console.log(numbers.findLastIndex((num) => false));

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

/**
 * - Returns -1 if no match is found
 * - Stops at first match from the right
 * - Skips holes
 */

sparse = [, , 50, 100];
console.log(sparse.findLastIndex((x) => x > 10));

//--------------------------------------------------------------------------------------------------//
// 🔁 Parameter Type Coercion
//--------------------------------------------------------------------------------------------------//

/**
 * - callbackFn: Must be a function; otherwise throws TypeError
 * - thisArg: Optional and coerced if provided
 */

//--------------------------------------------------------------------------------------------------//
// 🧭 Negative Index Support
//--------------------------------------------------------------------------------------------------//

/**
 * ❌ Not applicable — index is generated internally
 */

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Use when you want the index of the last occurrence matching a condition
 * - ✅ Especially useful in reverse loops, logs, tracking systems
 * - ⚠️ Like `findLast()`, but returns index instead of value
 */
//---------------------------------------- 🪙 Array.prototype.flat() ----------------------------------------//

/**
 * ✅ Purpose:
 * Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 *
 * 🔧 Syntax:
 * arr.flat(depth = 1)
 *
 * 📥 Parameters:
 * - depth (optional): How deep a nested array structure should be flattened (default = 1)
 *
 * ✅ Returns:
 * - A new flattened array
 *
 * 🧪 Properties:
 * - 📌 Mutability: ❌ NO
 * - 🔗 Chainability: ✅ YES
 * - 🧠 Skips holes while flattening
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES10 / ECMAScript 2019**
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

flatArr1 = [1, 2, , [40, [500, 600, [7000]]]];

console.log(flatArr1.flat());
console.log(flatArr1.flat(1));
console.log(flatArr1.flat(0));
console.log(flatArr1.flat(2));
console.log(flatArr1.flat(3));
console.log(flatArr1.flat(100));

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

/**
 * - depth < 0: treated as 0
 * - depth === Infinity: flattens all levels
 * - skips holes (empty slots are removed in result)
 */

console.log([1, , 2, [3, , [4]]].flat(2));
console.log([1, 2, [3, 4, [5, 6]]].flat(Infinity));

//--------------------------------------------------------------------------------------------------//
// 🔁 Parameter Type Coercion
//--------------------------------------------------------------------------------------------------//

/**
 * - depth is coerced to integer (e.g., "2" → 2, null → 0)
 */

console.log([1, 2, [3]].flat("2"));
console.log([1, 2, [3]].flat(null));

//--------------------------------------------------------------------------------------------------//
// 🧭 Negative Index Support
//--------------------------------------------------------------------------------------------------//

/**
 * ❌ Not applicable
 */

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Great for simplifying nested structures
 * - ✅ Useful before mapping or filtering when structure varies
 * - ⚠️ Removes holes; does not preserve sparse structure
 */

//---------------------------------------- 🔀 Array.prototype.flatMap() ----------------------------------------//

/**
 * ✅ Purpose:
 * Maps each element using a mapping function, then flattens the result into a new array (depth = 1).
 *
 * 🔧 Syntax:
 * arr.flatMap(callbackFn, thisArg?)
 *
 * 📥 Parameters:
 * - callbackFn (required): Function to map each element
 *     ➤ Receives: element, index, array
 * - thisArg (optional): Value to use as `this` in callback
 *
 * ✅ Returns:
 * - A new flattened array (after mapping + flattening one level)
 *
 * 🧪 Properties:
 * - 📌 Mutability: ❌ NO
 * - 🔗 Chainability: ✅ YES
 * - 🧠 Depth of flattening is fixed at 1
 * - 🧠 Skips holes
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES10 / ECMAScript 2019**
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

console.log([1, 2, 3, 4].flatMap((item) => item));
console.log([1, 2, 3, 4].map((item) => [item, item * 3]));
console.log([1, 2, 3, 4].flatMap((item) => [item, item * 3]));

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

/**
 * - Equivalent to `.map(...).flat(1)`
 * - Mapping to non-array (e.g., primitive) values will not flatten
 * - Depth is fixed at 1 — cannot be changed
 */

console.log([1, 2, 3].flatMap((x) => x * 10));
console.log([1, , 3].flatMap((x) => [x, x]));

//--------------------------------------------------------------------------------------------------//
// 🔁 Parameter Type Coercion
//--------------------------------------------------------------------------------------------------//

/**
 * - callbackFn: Must be function — else throws
 * - thisArg: Optional and coerced
 */

//--------------------------------------------------------------------------------------------------//
// 🧭 Negative Index Support
//--------------------------------------------------------------------------------------------------//

/**
 * ❌ Not applicable
 */

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Great for flattening mapped arrays in a single pass
 * - ✅ Use for cases where each element maps to a collection
 * - ⚠️ Cannot control depth (use `map().flat(depth)` if needed)
 */

//---------------------------------------- 🔁 Array.prototype.sort() ----------------------------------------//

/**
 * ✅ Purpose:
 * Sorts the elements of an array **in-place** and returns the sorted array.
 *
 * 🔧 Syntax:
 * arr.sort(compareFn?)
 *
 * 📥 Parameters:
 * - compareFn (optional): Function to define the sort order
 *     ➤ Receives: a, b — two elements to compare
 *     ➤ Returns:
 *         - < 0 → a comes before b
 *         - > 0 → b comes before a
 *         - 0 → no change in order
 *
 * ✅ Returns:
 * - The reference to the original sorted array
 *
 * 🧪 Properties:
 * - 📌 Mutability: ✅ YES (in-place)
 * - 🔗 Chainability: ✅ YES
 * - 🧠 Sorts based on UTF-16 code units by default
 * - 🧠 Non-stable in older engines, stable in modern ones
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ECMA-262 / ECMAScript 1**
 *
 * 🕒 Time Complexity: O(n log n)
 * 💾 Space Complexity: O(log n) auxiliary (implementation-dependent)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

console.log(numbers);
console.log(numbers.sort());
console.log(numbers.sort((a, b) => a - b));
console.log(numbers.sort((a, b) => b - a));
console.log(numbers.sort(() => 0.5 - Math.random()));
console.log(numbers.sort((a, b) => a - b).at(0));
console.log(numbers.sort((a, b) => a - b).at(-1));
console.log(numbers.sort((a, b) => a - b)[0]);
console.log(numbers.sort((a, b) => a - b)[numbers.length - 1]);

pairs = [
    [100, 20],
    [1, 200],
    [10, 2],
];

console.log(pairs.sort((a, b) => a[0] - b[0]));
console.log(pairs.sort((a, b) => a[1] - b[1]));
for (const [i, j] of pairs) console.log(i, j);

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

/**
 * - Default sort converts elements to strings and sorts by UTF-16 code units
 * - Mutates original array
 * - Holes are moved to the end
 * - Not guaranteed stable in older engines
 */

console.log([1, 30, 4, 21].sort());
console.log(["delta", "alpha", "CHARLIE"].sort());

//--------------------------------------------------------------------------------------------------//
// 🔁 Parameter Type Coercion
//--------------------------------------------------------------------------------------------------//

/**
 * - If compareFn is not provided, elements are converted to strings
 * - compareFn must return a number; otherwise unexpected behavior
 */

//--------------------------------------------------------------------------------------------------//
// 🕳️ Hole Behavior
//--------------------------------------------------------------------------------------------------//

/**
 * - Holes are treated as undefined and sorted to the end of the array
 * - Holes are skipped in the comparison function
 */
console.log([1, 2, , 4].sort()); // [1, 2, 4, undefined]
console.log([1, 2, , 4].sort((a, b) => a - b)); // [1, 2, undefined, 4]
console.log([1, 2, , 4].sort((a, b) => b - a)); // [4, 2, 1,undefined]

//--------------------------------------------------------------------------------------------------//
// 🧭 Negative Index Support
//--------------------------------------------------------------------------------------------------//

/**
 * ❌ Not applicable
 */

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Always provide a comparator for numeric or custom sorting
 * - ✅ Works great for multi-key sorts with stable sort support (modern engines)
 * - ⚠️ Avoid relying on default behavior for numbers
 */

//---------------------------------------- 🧊 Array.prototype.toSorted() ----------------------------------------//

/**
 * ✅ Purpose:
 * Returns a **new sorted array**, leaving the original array unmodified.
 *
 * 🔧 Syntax:
 * arr.toSorted(compareFn?)
 *
 * 📥 Parameters:
 * - compareFn (optional): Same as `sort()`
 *
 * ✅ Returns:
 * - A new sorted array
 *
 * 🧪 Properties:
 * - 📌 Mutability: ❌ NO (non-mutating)
 * - 🔗 Chainability: ✅ YES
 * - 🧠 Stable sort
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES13 / ECMAScript 2022**
 *
 * 🕒 Time Complexity: O(n log n)
 * 💾 Space Complexity: O(n)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

numbers = [234, 43, 234, -57, -56, -20, 55, 63, 5, 6, 235, 547];

console.log(numbers);
console.log(numbers.toSorted());
console.log(numbers.toSorted((a, b) => a - b));

//--------------------------------------------------------------------------------------------------//
// 🕳️ Hole Behavior
//--------------------------------------------------------------------------------------------------//

/**
 * - Holes are treated as undefined and sorted to the end of the array
 * - Holes are skipped in the comparison function
 */
console.log([1, 2, , 4].toSorted()); // [1, 2, 4, undefined]
console.log([1, 2, , 4].toSorted((a, b) => a - b)); // [1, 2, 4, undefined]
console.log([1, 2, , 4].toSorted((a, b) => b - a)); // [4, 2, 1,undefined]

//---------------------------------------- 🔁 Array.prototype.reverse() ----------------------------------------//

/**
 * ✅ Purpose:
 * Reverses the elements of an array **in place**.
 *
 * 🔧 Syntax:
 * arr.reverse()
 *
 * ✅ Returns:
 * - The same array after being reversed
 *
 * 🧪 Properties:
 * - 📌 Mutability: ✅ YES
 * - 🔗 Chainability: ✅ YES
 * - 🧠 Reverses the order without affecting values
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ECMA-262 / ECMAScript 1**
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(1)
 */

console.log(numbers);
console.log(numbers.reverse());

console.log(numbers.reverse((a, b) => a - b)); // No effect, as reverse does not take a comparator
console.log([1, 2, , 4].reverse()); // [4, undefined, 2, 1]

//---------------------------------------- 🧊 Array.prototype.toReversed() ----------------------------------------//

/**
 * ✅ Purpose:
 * Returns a **new array** with the elements in reverse order.
 *
 * 🔧 Syntax:
 * arr.toReversed()
 *
 * ✅ Returns:
 * - A new reversed array
 *
 * 🧪 Properties:
 * - 📌 Mutability: ❌ NO (non-mutating)
 * - 🔗 Chainability: ✅ YES
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES13 / ECMAScript 2022**
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

console.log(numbers);
console.log(numbers.toReversed());

console.log(numbers.toReversed((a, b) => a - b)); // No effect, as toReversed does not take a comparator
console.log([1, 2, , 4].toReversed()); // [4, undefined, 2, 1]

//---------------------------------------- 📤 Array.prototype.pop() ----------------------------------------//

/**
 * ✅ Purpose:
 * Removes the **last element** from an array and returns it.
 *
 * 🔧 Syntax:
 * arr.pop()
 *
 * ✅ Returns:
 * - The removed element
 * - undefined if array is empty
 *
 * 🧪 Properties:
 * - 📌 Mutability: ✅ YES (in-place)
 * - 🔗 Chainability: ❌ NO
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ECMA-262 / ECMAScript 1**
 *
 * 🕒 Time Complexity: O(1)
 * 💾 Space Complexity: O(1)
 */
console.log(planets);
console.log(planets.pop());
console.log(planets);

//---------------------------------------- 📦 Array.prototype.push() ----------------------------------------//

/**
 * ✅ Purpose:
 * Adds one or more elements to the **end** of an array and returns the new length.
 *
 * 🔧 Syntax:
 * arr.push(element1, ..., elementN)
 *
 * 📥 Parameters:
 * - element1, ..., elementN: Elements to add to the array
 *
 * ✅ Returns:
 * - New length of the array
 *
 * 🧪 Properties:
 * - 📌 Mutability: ✅ YES (in-place)
 * - 🔗 Chainability: ❌ NO
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ECMA-262 / ECMAScript 1**
 *
 * 🕒 Time Complexity: O(1)
 * 💾 Space Complexity: O(1)
 */
console.log(planets);
console.log(planets.push("Pluto"));
console.log(planets);

//---------------------------------------- ↪️ Array.prototype.shift() ----------------------------------------//

/**
 * ✅ Purpose:
 * Removes the **first element** from an array and returns it.
 *
 * 🔧 Syntax:
 * arr.shift()
 *
 * ✅ Returns:
 * - The removed element
 * - undefined if array is empty
 *
 * 🧪 Properties:
 * - 📌 Mutability: ✅ YES (in-place)
 * - 🔗 Chainability: ❌ NO
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ECMA-262 / ECMAScript 1**
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(1)
 */

console.log(planets.shift());

//---------------------------------------- ↩️ Array.prototype.unshift() ----------------------------------------//

/**
 * ✅ Purpose:
 * Adds one or more elements to the **beginning** of an array and returns the new length.
 *
 * 🔧 Syntax:
 * arr.unshift(element1, ..., elementN)
 *
 * 📥 Parameters:
 * - element1, ..., elementN: Elements to add to the start of the array
 *
 * ✅ Returns:
 * - New length of the array
 *
 * 🧪 Properties:
 * - 📌 Mutability: ✅ YES (in-place)
 * - 🔗 Chainability: ❌ NO
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ECMA-262 / ECMAScript 1**
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(1)
 */

console.log(planets);
console.log(planets.unshift("Mercury"));
console.log(planets);

//---------------------------------------- 🔗 Array.prototype.join() ----------------------------------------//

/**
 * ✅ Purpose:
 * Joins all elements of an array into a string using a specified separator.
 *
 * 🔧 Syntax:
 * arr.join(separator?)
 *
 * 📥 Parameters:
 * - separator (optional): String to separate each pair of adjacent elements (default = ",")
 *
 * ✅ Returns:
 * - A string with all array elements joined
 *
 * 🧪 Properties:
 * - 📌 Mutability: ❌ NO
 * - 🔗 Chainability: ✅ YES
 * - 🧠 Holes and `undefined`/`null` are converted to empty strings
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ECMA-262 / ECMAScript 1**
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

console.log(fruits);
console.log(fruits.join());
console.log(fruits.join(""));
console.log(fruits.join(" "));
console.log(fruits.join("-"));

//---------------------------------------- 🔗 Array.prototype.toString() ----------------------------------------//

/**
 * ✅ Purpose:
 * Returns a string representing the array and its elements, separated by commas.
 *
 * 🔧 Syntax:
 * arr.toString()
 *
 * ✅ Returns:
 * - A comma-separated string representation of the array
 *
 * 🧪 Properties:
 * - 📌 Mutability: ❌ NO
 * - 🔗 Chainability: ✅ YES
 * - 🧠 Calls `join()` internally
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ECMA-262 / ECMAScript 1**
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

//internally used join method
console.log(fruits.toString());
let arrToStr1 = [10, 20, 30];
console.log(arrToStr1.toString.toString());
console.log(arrToStr1.join.toString());
console.log(arrToStr1.toString());
arrToStr1.join = "Overridden";
console.log(arrToStr1.toString());
arrToStr1.join = () => "a";
console.log(arrToStr1.toString());
arrToStr1.join = function () {
    return Array.prototype.join.call(this);
    // return this.reduce((a, i) => a + "," + i, "").slice(1);
};
// arrToStr1.join = Array.prototype.join.apply(arrToStr1);
console.log(arrToStr1.toString());

//---------------------------------------- 🧬 Array.prototype.concat() ----------------------------------------//

/**
 * ✅ Purpose:
 * Merges two or more arrays (or values) into a new array.
 *
 * 🔧 Syntax:
 * arr.concat(value1, value2, ..., valueN)
 *
 * 📥 Parameters:
 * - value1, value2, ..., valueN: Arrays or values to concatenate
 *
 * ✅ Returns:
 * - A new array resulting from merging all inputs
 *
 * 🧪 Properties:
 * - 📌 Mutability: ❌ NO (returns a new array)
 * - 🔗 Chainability: ✅ YES
 * - 🧠 Shallow copy only — nested objects are not deeply cloned
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ECMA-262 / ECMAScript 1**
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

console.log(fruits);
console.log(fruits.concat([]));
console.log(fruits.concat(["a", , "b"], "Pears"));
console.log(fruits.concat("Pears", ["a", "b"]));
console.log(fruits.concat("Pears", ["a", "b", ["c", "d"]]));
console.log(fruits.concat("Pears"));

nestedArr1 = [[10, 20], 3, 4];
nestedArr2 = [[100, 200], 30, 40];
concatedArr1 = nestedArr1.concat(nestedArr2);
console.log(concatedArr1);

nestedArr1[0].push(30);
nestedArr2[0].push(300);
console.log(concatedArr1);

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

/**
 * - Works with primitives, arrays, and array-like objects
 * - Does not flatten nested arrays more than one level
 * - Shallow copies references (not deep copies)
 */

console.log([1, 2].concat([[3, 4], 5], 6));
console.log([].concat({ 0: "a", length: 1 }));

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Good for merging multiple datasets
 * - ⚠️ Mutating sources afterward may affect references inside result
 * - ✅ Chainable and predictable for composing lists
 */


//---------------------------------------- 🧭 Array.prototype.entries() ----------------------------------------//

/**
 * ✅ Purpose:
 * Returns a new Array Iterator object that contains key/value pairs for each index.
 *
 * 🔧 Syntax:
 * arr.entries()
 *
 * ✅ Returns:
 * - An Array Iterator with [index, value] pairs
 *
 * 🧪 Properties:
 * - 📌 Mutability: ❌ NO
 * - 🔗 Chainability: ❌ NO (returns iterator, not array)
 * - 🧠 Supports iteration using `for...of`, destructuring, `.next()`
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES6 / ECMAScript 2015**
 *
 * 🕒 Time Complexity: O(1) to create iterator, O(n) to consume it
 * 💾 Space Complexity: O(1) for iterator
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

numsItr = [10, , 20, 30].entries();

console.log(typeof numsItr);
console.log(numsItr instanceof Array);
console.log(numsItr instanceof Object);
console.log(numsItr);

console.log(numsItr.next());
console.log(numsItr.next());
console.log(numsItr.next());
console.log(numsItr.next());
console.log(numsItr.next());

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

/**
 * - Holes are preserved as `undefined` values
 * - Can be used with destructuring or `for...of`
 */

for (const [i, v] of [1, , 3].entries()) {
    console.log(i, v);
}

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Use for index-element iteration with cleaner syntax
 * - ✅ Works seamlessly with `for...of`, spread, destructuring
 */


//---------------------------------------- 🧭 Array.prototype.keys() ----------------------------------------//

/**
 * ✅ Purpose:
 * Returns a new Array Iterator containing the keys (indexes) of the array.
 *
 * 🔧 Syntax:
 * arr.keys()
 *
 * ✅ Returns:
 * - An Array Iterator of numeric keys (indices)
 *
 * 🧪 Properties:
 * - 📌 Mutability: ❌ NO
 * - 🔗 Chainability: ❌ NO
 * - 🧠 Useful for index-based iteration
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES6 / ECMAScript 2015**
 *
 * 🕒 Time Complexity: O(1) to create, O(n) to consume
 * 💾 Space Complexity: O(1)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

numKeys = [10, 20, 30, , 50].keys();

console.log(typeof numKeys);
console.log(numKeys instanceof Array);
console.log(numKeys instanceof Object);
console.log(numKeys);

console.log(numKeys.next());
console.log(numKeys.next());
console.log(numKeys.next());
console.log(numKeys.next());
console.log(numKeys.next());
console.log(numKeys.next());

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

/**
 * - Always returns keys for all slots (including holes)
 */

for (const k of [1, , 3].keys()) {
    console.log(k);
}

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Useful for manual index access or mapping indices
 * - ✅ Great for `for...of` loops when you only need indices
 */


//---------------------------------------- 🧭 Array.prototype.values() ----------------------------------------//

/**
 * ✅ Purpose:
 * Returns a new Array Iterator containing the values of each element in the array.
 *
 * 🔧 Syntax:
 * arr.values()
 *
 * ✅ Returns:
 * - An Array Iterator of values
 *
 * 🧪 Properties:
 * - 📌 Mutability: ❌ NO
 * - 🔗 Chainability: ❌ NO
 * - 🧠 Skips holes — returns `undefined` for them
 *
 * 📅 ECMAScript Version:
 * - Introduced in **ES6 / ECMAScript 2015**
 *
 * 🕒 Time Complexity: O(1) to create, O(n) to consume
 * 💾 Space Complexity: O(1)
 */

//--------------------------------------------------------------------------------------------------//
// ✅ Examples
//--------------------------------------------------------------------------------------------------//

numValues = [10, 20, 30, , 50].values();

console.log(typeof numValues);
console.log(numValues instanceof Array);
console.log(numValues instanceof Object);
console.log(numValues);

console.log(numValues.next());
console.log(numValues.next());
console.log(numValues.next());
console.log(numValues.next());
console.log(numValues.next());
console.log(numValues.next());

//--------------------------------------------------------------------------------------------------//
// ⚠️ Edge Cases
//--------------------------------------------------------------------------------------------------//

/**
 * - Holes yield `undefined` in the iteration
 */

for (const v of [1, , 3].values()) {
    console.log(v);
}

//--------------------------------------------------------------------------------------------------//
// 🧠 Deep Dive Tips
//--------------------------------------------------------------------------------------------------//

/**
 * - ✅ Clean alternative to using manual indexing
 * - ✅ Pairs well with `keys()` and `entries()` for full control
 */
