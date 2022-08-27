/************************************************************************************************************************* */
function* simpleGenerator(){
//    console.log(yield 1)
//    console.log(yield 2)
//    console.log(yield 3)
    yield 2;
    yield 3;
}

let customSeries = simpleGenerator();
console.log(customSeries.next())
// console.log(customSeries.next().value)
console.log(customSeries.next())
// console.log(customSeries.next().value)

// console.log(customSeries.next("a").value)
// console.log(customSeries.next("b").value)
// console.log(customSeries.next("c").value)
// console.log(customSeries.next())
// console.log(customSeries.next())
// console.log(customSeries.next())

/************************************************************************************************************************* */
function* generateId(){
    let id = 1000;
    while(true){
        let init = yield id;
        if(init) id+=init;
        else id++
    }
}

let uniqueId = generateId();
console.log(uniqueId.next())
console.log(uniqueId.next(500))
console.log(uniqueId.next())
console.log(uniqueId.next())
console.log(uniqueId.next())
console.log(uniqueId.return(10000))
console.log(uniqueId.next())
// console.log(uniqueId.throw(new Error("Hello World")))
console.log(uniqueId.next())

/************************************************************************************************************************* */
