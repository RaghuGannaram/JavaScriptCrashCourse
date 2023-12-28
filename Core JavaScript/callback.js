//---------------------------------------------------Asynchronus programming-------------------------------------------------
const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }
    console.log(data);
});

//--------------------------------------------------------Event Handlers-----------------------------------------------------
const button = document.getElementById("myButton");
button.addEventListener("click", function (event) {
    console.log("Button was clicked!");
});

//---------------------------------------------------------Array Methods-------------------------------------------------------
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
});
console.log(evenNumbers); // [2, 4]

//-------------------------------------------------Callbacks in Custom Functions----------------------------------------------
function greeting(name, callback) {
    console.log("Hello " + name);
    callback();
}

greeting("Alice", function () {
    console.log("Callback called!");
});

//-----------------------------------------------------Error First Callbacks--------------------------------------------------
function fetchData(callback) {
    // Simulating data fetching
    let error = null;
    let data = "Data fetched";

    if (error) {
        callback(error, null);
    } else {
        callback(null, data);
    }
}

fetchData((err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
