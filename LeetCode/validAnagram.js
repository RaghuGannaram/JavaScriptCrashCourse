function validAnagramOne(s,t){
    if(s.length != t.length) return false;

    let sEntry = {}, tEntry = {};
    
    for(let i =0; i<s.length;i++){
        sEntry[s.charAt(i)] = 1+ (sEntry[s.charAt(i)] ?? 0);
        tEntry[t.charAt(i)] = 1+ (tEntry[t.charAt(i)] ?? 0);
    }
    for(let char in sEntry) if(sEntry[char] != tEntry[char]) return false;
    return true;
}

function validAnagramTwo(s,t){
    return s.split('').sort().join('') == t.split('').sort().join('');
}

let output = validAnagramTwo('care','race');
console.log(output);




/******************************************************Scratchpad*********************************************************** */

console.log('hskjasjas'.split().sort().join())
console.log('hskjasjas'.split('').sort().join())
console.log('hskjasjas'.split('').sort().join(''))
console.log([1,2,3] == [1,2,3])
let a =[1,2,3]
console.log(a==[1,2,3])
console.log(a==a)
