let add1 = x => x+1;
let mul2 = x => x*2;
let div4 = x => x/4;


function curryArithmetic(operatorChain){
    return function(...operators){
        return function(value){
            return operatorChain([...operators], value);
        }
    }
}

function operatorChain(operators, value){
    let chainedOperator =value
    operators.forEach(operator=>{
        chainedOperator =operator(chainedOperator);
    })
    return chainedOperator;
}

let pipe = curryArithmetic(operatorChain)


console.log("Expected 2, Result :",pipe(add1, mul2, div4)(3))
console.log("Expected 1.75, Result :",pipe(mul2, add1, div4)(3))
console.log("Expected 2.5, Result :",pipe(mul2, div4, add1)(3))
console.log("Expected 5, Result :",pipe(mul2, div4, add1, mul2)(3))