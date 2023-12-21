//-----------------------------------------------------------------------------------------------------------------------------------------------------
setTimeout(() => {
    new Promise((resolve) => {
        resolve();
        console.log(6);
    }).then(() => {
        console.log(4);
    });
    console.log(7);
});

new Promise((resolve) => {
    resolve();
    console.log(3);
}).then(() => {
    setTimeout(() => {
        console.log(5);
    });
    console.log(1);
});
console.log(2);


// console          :  3 2 1 6 7 4 5

// ____________________
// Stack            :

// Microtask Queue  : [

// ]

// Callback Queue   : [

// ]


//-----------------------------------------------------------------------------------------------------------------------------------------------------

// setTimeout(() => console.log("#1 s1"), 0);
// Promise.resolve().then(() => console.log("#1 p1"));
// setTimeout(() => console.log("#1 s2"), 0);
// Promise.resolve().then(() => console.log("#1 p2"));
// setTimeout(() => console.log("#1 s3"), 0);
// setTimeout(() => {
//     Promise.resolve().then(() => console.log("#1 p3"));
//     setTimeout(() => Promise.resolve().then(() => console.log("#1 p4")), 0);
//     Promise.resolve().then(() => Promise.resolve().then(() => console.log("#1 p5")));
//     Promise.resolve().then(() => setTimeout(() => console.log("#1 s4"), 0));
// }, 0);
// Promise.resolve().then(() => console.log("#1 p6"));
// setTimeout(() => console.log("#1 s5"), 0);
// console.log("#1 Hello");


// // console          : "#1 Hello" "#1 p1" "#1 p2" "#1 p6" "#1 s1" "#1 s2" "#1 s3" "#1 p3" "#1 p5" "#1 s5" "#1 p4" "#1 s4"

// // ____________________
// // Stack            :

// // Microtask Queue  : [

// // ]

// // Callback Queue   : [

// // ]


//-----------------------------------------------------------------------------------------------------------------------------------------------------
function taskListOne() {
    setTimeout(() => console.log("#1 s1"), 0);
    Promise.resolve().then(() => console.log("#1 p1"));
    setTimeout(() => console.log("#1 s2"), 0);
    Promise.resolve().then(() => console.log("#1 p2"));
    setTimeout(() => console.log("#1 s3"), 0);
    setTimeout(() => {
        Promise.resolve().then(() => console.log("#1 p3"));
        setTimeout(() => Promise.resolve().then(() => console.log("#1 p4")), 0);
        Promise.resolve().then(() => Promise.resolve().then(() => console.log("#1 p5")));
        Promise.resolve().then(() => setTimeout(() => console.log("#1 s4"), 0));
    }, 0);
    Promise.resolve().then(() => console.log("#1 p6"));
    setTimeout(() => console.log("#1 s5"), 0);
    console.log("#1 Hello");
}

function taskListTwo() {
    setTimeout(() => console.log("#2 s1"), 0);
    Promise.resolve().then(() => console.log("#2 p1"));
    setTimeout(() => console.log("#2 s2"), 0);
    Promise.resolve().then(() => console.log("#2 p2"));
    setTimeout(() => console.log("#2 s3"), 0);
    setTimeout(() => {
        Promise.resolve().then(() => console.log("#2 p3"));
        setTimeout(() => Promise.resolve().then(() => console.log("#2 p4")), 0);
        Promise.resolve().then(() => Promise.resolve().then(() => console.log("#2 p5")));
        Promise.resolve().then(() => setTimeout(() => console.log("#2 s4"), 0));
    }, 0);
    Promise.resolve().then(() => console.log("#2 p6"));
    setTimeout(() => console.log("#2 s5"), 0);
    console.log("#2 Hello");
}

//-------------------------------------------------Case 1: Executing Single function------------------------------------------------------------------
function task() {
    taskListOne();
    taskListTwo();
}

// task();


// console          : "#1 Hello" "#2 Hello" "#1 p1" "#1 p2" "#1 p6" "#2 p1" "#2 p2" "#2 p6" "#1 s1" "#1 s2" "#1 s3" "#1 p3" "#1 p5" "#1 s5" "#2 s1" "#2 s2" "#2 s3" "#2 p3" "#2 p5" "#2 s5" "#1 p4" "#1 s4" "#2 p4" "#2 s4"

// ____________________
// Stack            :

// Microtask Queue  : [

// ]

// Callback Queue   : [

// ]

const btnOne = document.getElementById("btn1");
const btnTwo = document.getElementById("btn2");
const btn = document.getElementById("btn");

btnOne.addEventListener("click", taskListOne);
btnTwo.addEventListener("click", taskListTwo);

btn.addEventListener("click", taskListOne);
btn.addEventListener("click", taskListTwo);

//-------------------------------------------------Case 2: Button click (programmatic)------------------------------------------------------------------
//Note: EventListeners are called synchronously

btn.click();


// console          : "#1 Hello" "#2 Hello" "#1 p1" "#1 p2" "#1 p6" "#2 p1" "#2 p2" "#2 p6" "#1 s1" "#1 s2" "#1 s3" "#1 p3" "#1 p5" "#1 s5" "#2 s1" "#2 s2" "#2 s3" "#2 p3" "#2 p5" "#2 s5" "#1 p4" "#1 s4" "#2 p4" "#2 s4"

// () => {
//     taskListOne();
//     taskListTwo();
// };
// ____________________
// Stack            :

// Microtask Queue  : [

// ]

// Callback Queue   : [

// ]


// ------------------------------------------------Case 3: User click (event handler)------------------------------------------------------------------
// Note: EventListeners are called asynchronously

// console          :"#1 Hello" "#1 p1" "#1 p2" "#1 p6" "#2 Hello" "#2 p1" "#2 p2" "#2 p6" "#1 s1" "#1 s2" "#1 s3" "#1 p3" "#1 p5" "#1 s5" "#2 s1" "#2 s2" "#2 s3" "#2 p3" "#2 p5" "#2 s5" "#1 p4" "#1 s4" "#2 p4" "#2 s4"


// ____________________
// Stack            :

// Microtask Queue  : [
    
    
// ]

// Callback Queue   : [
    // taskListOne();
    // taskListTwo();
// ]

