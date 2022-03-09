setTimeout(() => {
    new Promise((resolve) => {
        resolve() 
        console.log(6)
    }).then(() => {
        console.log(4)
    })
    console.log(7)
});

new Promise((resolve) => {
    resolve()
    console.log(3)
}).then(() => {
    setTimeout(() => {
        console.log(5)
    })
    console.log(1)
})

console.log(2) 