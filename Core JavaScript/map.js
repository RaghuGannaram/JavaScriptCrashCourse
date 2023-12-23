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
console.log(map);

map.set(2, "twoValue1");
map.set(2, "twoValue2");
console.log(map);
console.log(map.size);
console.log(map.has(2));
console.log(map.get(2));
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
