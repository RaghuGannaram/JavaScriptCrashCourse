let romanToInt = function (s) {
  let num = 0;
  let lookup = {
      'I' : 1,
      'V' : 5.,
      'X' : 10,
      'L' : 50,
      'C' : 100,
      'D' : 500,
      'M' : 1000
  }
  for(let i=0; i<s.length; i++){
      (lookup[s[i]]<lookup[s[i+1]]) ? num-=lookup[s[i]] : num+=lookup[s[i]]
  }
  
  return num;
};


let roman = "CMXCVIII";
let integer = romanToInt(roman);
console.log(`\nGiven Roman =  ${roman},\nEquivalent Integer = ${integer}`);
