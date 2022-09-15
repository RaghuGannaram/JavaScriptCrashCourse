let arr = ["a", "b", "c", "d", "e"];
arr.f = "famous";
arr["g"] = "good";
console.log(arr);

for (let i in arr) console.log(i);
for (let i in arr) console.log(Number(i)+1);
for (let i in arr) console.log(arr[i]);
for (let i of arr) console.log(i);
