function plusOne (digits) {
    return String(BigInt(digits.join(''))+BigInt(1)).split('').map(n=>Number(n))
}

function plusOneCustom(digits){
    let i = 0;
    let l = digits.length-1;
    let carry = 1;

    while(carry){
        if(i < digits.length){
            if(digits[l-i] == 9) {
                digits[l-i] = 0;
                carry = 1;
            }
            else {
                digits[l-i]+=1;
                carry = 0;
            }
        }else {
            digits.unshift(1);
            carry = 0;
        }
        i++;
    }
    return digits;
}



let digits = [1,9,9];
console.log(plusOneCustom(digits));

