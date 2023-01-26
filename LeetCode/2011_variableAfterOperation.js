/**
 * @param {string[]} operations
 * @return {number}
 */
 var finalValueAfterOperations1 = function(operations) {
    let result = 0;
    
    for(let i=0; i<operations.length; i++){
        if(operations[i].slice(1,2) === "+") result+=1;
        else result-=1;
    }
    
    return result;
};

var finalValueAfterOperations2 = function(operations) {
    return operations.reduce((sum, cur) => cur.includes('+') ? sum + 1 : sum - 1, 0);
};

console.log(finalValueAfterOperations1['++X', '--X','++X'])