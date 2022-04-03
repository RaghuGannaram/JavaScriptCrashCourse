function add(s1,s2){
    let n1 = s1.split('');
    let n2 = s2.split('');
    let res = '';
    let carry = 0;

    for(let i =0; i<Math.max(n1.length, n2.length);i++){
        let m = Number(n1[n1.length-1-i]) || 0;
        let n = Number(n2[n2.length-1-i]) || 0;
        let total = m+n+carry;
        let s = total%2;
        res=s+res;
        if(total>=2) carry =1;
        else carry =0; 
    }
    if(carry) res ='1'+res;
    return res;
}


let output =add('1010','1011');
console.log(output)
