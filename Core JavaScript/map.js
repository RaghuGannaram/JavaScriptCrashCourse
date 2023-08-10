let map = new Map();

console.log(map);
console.log(typeof map);
console.log(map instanceof Object);
console.log(map instanceof Map);
console.log(map instanceof Array);

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

map.set(2, "twoValue");
console.log(map);
console.log(map.size);
console.log(map.has(2));
console.log(map.get(2));

map.delete(2);

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

try {
	new Map([10, 20, 30, 40, 50]);
} catch (error) {
	console.log(error);
}

try {
	new Map({ 10: "a", 20: "b", 40: "c", 50: "d", 30: "e", 30: "f" });
} catch (error) {
	console.log(error);
}

let mapTwo = new Map([[10], [20], [40], [50], [30], [30]]);
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

mapThree.clear();
for (let i of mapThree) console.log(i);

let mapFour = new Map([{ 10: "a" }]);
console.log(mapFour);

try {
	console.log(new Map("123"));
} catch (error) {
	console.log(error);
}
try {
	console.log(new Map([1, 2, 3]));
} catch (error) {
	console.log(error.name);
	console.log(error.message);
	console.log(error.stack);
	console.log(error.toString());
}
try {
	console.log(
		new Map([
			[1, "one"],
			[2, "two"],
			[3, "three"],
		])
	);
} catch (error) {
	console.log(error);
}
try {
	console.log(new Map(["123", "456", "789"]));
} catch (error) {
	console.log(error);
}
try {
	console.log(new Map([{ a: "123" }, { b: "456" }, { c: "789" }]));
} catch (error) {
	console.log(error);
}
