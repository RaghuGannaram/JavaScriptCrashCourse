function validPalindrome1(s){
    let filteredS = s.toLowerCase().split('').filter(i=>i.match(/[a-zA-Z0-9]/))
    // console.log(s)
    // console.log(s.toLowerCase())
    // console.log(s.toLowerCase().split(""))
    // console.log(s.toLowerCase().split("").filter(i=>i.match(/[a-zA-Z0-9]/)))
    // console.log(filteredS)
    // console.log(filteredS.reverse())
    // console.log(filteredS.join(""))
    return filteredS.join('')  == filteredS.reverse().join('');
    // let l = Math.floor(filteredS.length/2);
    // for(let i=0;i<l;i++) if(filteredS[i] != filteredS[filteredS.length-1-i]) return false;
    // return true;
}

function validPalindrome2(s){
    let l =0, r = s.length-1;
    while(l<r){
        while(l<r && !(s[l].match(/[a-zA-Z0-9]/))) l++;
        while(l<r && !(s[r].match(/[a-zA-Z0-9]/))) r--;
        if(s[l].toLowerCase()!=s[r].toLowerCase()) return false;
        l++;
        r--;
    }

    return true;
}

function validPalindrome3(s){
    let l =0, r = s.length-1;
    while(l<r){
        while(l<r && !isalnum(s[l])) l++;
        while(l<r && !isalnum(s[r])) r--;
        if(s[l].toLowerCase()!=s[r].toLowerCase()) return false;
        l++;
        r--;
    }

    return true;

    function isalnum(c){
        let num = c.charCodeAt();
        if(48<=num && num<=57 || 65<=num && num<=90 || 97<=num && num<=122) return true
        else return false;
    }
}

console.log(validPalindrome2("a3n3!! a"));
