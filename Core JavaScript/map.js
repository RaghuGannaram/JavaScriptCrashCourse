let map = new Map();

console.log(map)
console.log(typeof(map))
console.log(map instanceof Object)
console.log(map instanceof Map)
console.log(map instanceof Array)


map.set(true, "boolValue")
console.log(map)

map.set(1, "numValue")
console.log(map)

map.set("strKey", "strValue")
console.log(map)

map.set([100, 200], "arrValue")
console.log(map)

map.set({property : true}, "objValue")
console.log(map)

map.set(2, "twoValue")
console.log(map.get(2))
console.log(map.has(2))
map.delete(2);
console.log(map.has(2))

console.log(map.size)
// for (let i in map.keys()) console.log(i)
for (let i of map.keys()) console.log(i)
for (let i of map.keys()) console.log(typeof(i))
for (let i of map.keys()) console.log(i instanceof Array)
for (let i of map.keys()) console.log(i instanceof Object)
// for (let i in map.values()) console.log(i)
// for (let [i,j] in map.entries()) console.log(i, j)
for (let [i,j] of map.entries()) console.log(i, j)

console.log(map.size)
console.log(map.size)



