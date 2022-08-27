// console.log("-------------------------------------------------------------------------------------------------------")
// setTimeout(() => {
//   new Promise((resolve) => {
//     resolve();
//     console.log(6);
//   }).then(() => {
//     console.log(4);
//   });
//   console.log(7);
// });

// new Promise((resolve) => {
//   resolve();
//   console.log(3);
// }).then(() => {
//   setTimeout(() => {
//     console.log(5);
//   });
//   console.log(1);
// });
// console.log(2);

// console :  3 2 1 6 7 4 5

// Stack           :

// Microtask Queue :

// Callback Queue  :


// console.log("-------------------------------------------------------------------------------------------------------")

// setTimeout(() => console.log("#1 s1"), 0);
// Promise.resolve().then(() => console.log("#1 p1"));
// setTimeout(() => console.log("#1 s2"), 0);
// Promise.resolve().then(() => console.log("#1 p2"));
// setTimeout(() => console.log("#1 s3"), 0);
// setTimeout(() => {
//   Promise.resolve().then(() => console.log("#1 p3"));
//   setTimeout(() => Promise.resolve().then(() => console.log("#1 p4")), 0);
//   Promise.resolve().then(() =>
//     Promise.resolve().then(() => console.log("#1 p5"))
//   );
//   Promise.resolve().then(() => setTimeout(() => console.log("#1 s4"), 0));
// }, 0);
// Promise.resolve().then(() => console.log("#1 p6"));
// setTimeout(() => console.log("#1 s5"), 0);
// console.log("#1 Hello");

// console : "#1 Hello" "#1 p1" "#1 p2" "#1 p6" "#1 s1" "#1 s2" "#1 s3" "#1 p3" "#1 p5" "#1 s5" "#1 p4" "#1 s4"


// Stack           :


// Microtask Queue :


// Callback Queue  :


// console.log("-------------------------------------------------------------------------------------------------------")

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
    console.log("#1 Hello")
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
    console.log("#2 Hello")
}

taskListOne();
taskListTwo();

// console:

//      "#1 Hello" "#1 p1" "#1 p2" "#1 p6" "#1 s1" "#1 s2" "#1 s3" "#1 p3" "#1 p5" "#1 s5" "#1 p4" "#1 s4"

//      "#2 Hello" "#2 p1" "#2 p2" "#2 p6" "#2 s1" "#2 s2" "#2 s3" "#2 p3" "#2 p5" "#2 s5" "#2 p4" "#2 s4"




//      "#1 Hello"  "#2 Hello"  "#1 p1"  "#1 p2"  "#1 p6"  "#2 p1"  "#2 p2"  "#2 p6"  "#1 s1"  "#1 s2"  "#1 s3"  "#1 p3"  "#1 p5"  "#1 s5" 

//       "#2 s1"  "#2 s2"  "#2 s3"  "#2 p3"  "#2 p5"  "#2 s5"  "#1 p4"  "#1 s4"  "#2 p4"  "#2 s4"


// Stack           :





// Microtask Queue :




// Callback Queue  :