console.log("Start of script");

setTimeout(() => {
    console.log("setTimeout executed");
}, 0);

setInterval(() => {
    console.log("setInterval executed");
}, 1000);

setImmediate(() => {
    console.log("Immediate callback executed");
});

console.log("End of script");
