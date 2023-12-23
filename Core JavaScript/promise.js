function greet(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof name === "string") {
                resolve(`Hello ${name}...!`);
            } else {
                reject("name must be a string!");
            }
        }, 1000);
    });
}

// greet("Tony Stark")
//     .then(
//         (data) => {
//             console.log("Data code B: " + data);
//             return greet("Iron Man");
//         },
//         (err) => {
//             console.log("Error code B: " + err);
//         }
//     )
//     .then(
//         (data) => {
//             console.log("Data code C: " + data);
//             return greet("Billionaire, Playboy, Philanthropist");
//         },
//         (err) => {
//             console.log("Error code C: " + err);
//         }
//     )
//     .then(
//         (data) => {
//             console.log("Data code D: " + data);
//             return greet(100);
//         },
//         (err) => {
//             console.log("Error code D: " + err);
//         }
//     )
//     .then(
//         (data) => {
//             console.log("Data code E: " + data);
//         },
//         (err) => {
//             console.log("Error code E: " + err);
//         }
//     )
//     .then(
//         (data) => {
//             console.log("Data code F: " + data);
//         },
//         (err) => {
//             console.log("Error code F: " + err);
//         }
//     )
//     .catch((err) => {
//         console.log("Error code G: " + err);
//     })
//     .finally(() => {
//         console.log("Promise is settled");
//     });

// greet(1)
//     .then(
//         (data) => {
//             console.log("Data code H: " + data);
//         },
//         (err) => {
//             console.log("Error code H: " + err);
//         }
//     )
//     .catch((err) => {
//         console.log("Error code I: " + err);
//     })
//     .finally(() => {
//         console.log("Promise is settled");
//     });

// function destinedToFail() {
//     return new Promise((resolve, reject) => {
//         throw new Error("Error occured");
//     });
// }

// destinedToFail()
//     .then((data) => console.log("Data code J: " + data))
//     .catch((err) => console.log("Error code J: " + err));

/*
    Promise States: 
    1. Pending
    2. Fulfilled
    3. Rejected

    Fulfilled
        Meaning         : A Promise is "fulfilled" when the operation it represents completes successfully.
        How It Occurs   : This happens when the function passed to the new Promise constructor calls the resolve function.

    Rejected
        Meaning         : A Promise is "rejected" when the operation it represents fails.
        How It Occurs   : This happens when the function passed to the new Promise constructor calls the reject function.

    Settled
        Meaning         : A Promise is "settled" when it is either fulfilled or rejected, i.e., the operation it represents is no longer pending, regardless of whether it was successful or not.
        How It Occurs   : This occurs after either the resolve or reject function is called.
        Use Case        : Often used in the context of Promise.allSettled() which waits for all promises to settle, regardless of whether they are fulfilled or rejected.

    Resolved
        Meaning         : A Promise is "resolved" if it is settled or if it has "resolved" to another promise.
        Special Case    : A promise can be resolved with another promise (known as a thenable in JavaScript). This means that it will adopt the state (fulfilled or rejected) of the promise it resolves to.

    Promise Chaining
    1. Promise.all
        Behavior        : Waits for all promises to be resolved or for any to be rejected.
        Use Case        : When you need to execute multiple asynchronous operations and wait for all of them to complete.
        Returns         : A single Promise that resolves to an array of the results of the input promises.
        Error Handling  : If any of the passed-in promises reject, Promise.all immediately rejects with the value of the rejected promise.
                
    2. Promise.allSettled
        Behavior        : Waits for all promises to either resolve or reject.
        Use Case        : When you want to know the result of each promise, regardless of whether they were fulfilled or rejected.
        Returns         : A Promise that resolves to an array of objects that each describe the outcome of each promise.
        Error Handling  : Does not short-circuit. It waits for all promises to complete.

    3. Promise.race
        Behavior        : Resolves or rejects as soon as one of the promises in the iterable resolves or rejects.
        Use Case        : When you need the result of the first settled promise (either resolved or rejected).
        Returns         : A Promise that resolves or rejects as soon as one of the promises in the array does.
        Error Handling  : Takes the result of the first settled promise, whether it's a resolve or reject.

    4. Promise.any
        Behavior        : Resolves as soon as any one of the promises in the iterable resolves.
        Use Case        : When you need the result from the first promise that successfully resolves, ignoring all rejections unless all promises reject.
        Returns         : A Promise that resolves with the value of the first fulfilled promise.
        Error Handling  : If all the given promises are rejected, it returns an AggregateError.
*/

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 1 resolved");
//         // reject("Promise 1 rejected");
//     }, 1000);
// });

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 2 resolved");
//     }, 2000);
// });

// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 3 resolved");
//     }, 3000);
// });

// Promise.all([p1, p2, p3])
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// Promise.allSettled([p1, p2, p3])
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// Promise.race([p1, p2, p3])
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// Promise.any([p1, p2, p3])
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// const loadVideo = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("Video loaded..!");
// 	}, 1000);
// });

// loadVideo.then((data) => console.log(data));

// const myPromise = new Promise((resolve, reject) => {

// });

// const users = fetch("https://jsonplaceholder.typicode.com/users");

// setTimeout(() => {
//     console.log(users, "Called after 5 seconds");
// }, 5000);

// console.log(users, "Called immediately");

//------------------------------------------------------------sleep function-----------------------------------------------------
async function sleep(millis) {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, millis);
    });
}

// console.log("Before sleep");
// sleep(5000).then(() => {
//     console.log("After sleep");
// });

//-----------------------------------------------------------Promise time limit--------------------------------------------------
const timeLimit = function (fn, t) {
    return async function (...args) {
        let res = await Promise.race([
            fn(...args),
            new Promise((resolve, reject) => {
                setTimeout(() => reject("Time Limit Exceeded"), t);
            }),
        ]);
        return res;
    };
};

const limitedGreet = timeLimit(greet, 1500);

limitedGreet("Tony Stark")
    .then((data) => console.log("Data code K: " + data))
    .catch((err) => console.log("Error code K: " + err));