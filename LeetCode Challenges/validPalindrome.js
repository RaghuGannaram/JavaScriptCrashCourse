function validPalindrome(s){
    let filteredS = s.toLowerCase().split('').filter(i=>i.match(/[a-zA-Z0-9]/))
    return filteredS.join('')  == filteredS.reverse().join('');
    // let l = Math.floor(filteredS.length/2);
    // for(let i=0;i<l;i++) if(filteredS[i] != filteredS[filteredS.length-1-i]) return false;
    // return true;
}

let output =validPalindrome("ana");
console.log(output);
