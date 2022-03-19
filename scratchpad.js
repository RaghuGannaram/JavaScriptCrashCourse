let obj = {
    name: "John",
    age:24
}

// let obj2 = {
//     ...obj
// }
let obj2 =obj;

obj.age=25;

console.log("obj", obj)
console.log("obj2",obj2)