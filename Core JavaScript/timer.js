console.log('Start of script');

setTimeout(() => {
    console.log('setTimeout executed');
}, 0);

setImmediate(() => {
    console.log('Immediate callback executed');
});

console.log('End of script');
