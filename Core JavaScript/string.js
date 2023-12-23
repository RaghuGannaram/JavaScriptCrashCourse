let strl = "0123456789";
let stro = new String("0123456789");

console.log(typeof strl);
console.log(typeof stro);
console.log(typeof stro.toString());

console.log(strl instanceof String);
console.log(strl instanceof Object);
console.log(stro instanceof String);
console.log(stro instanceof Object);

console.log(Object.getOwnPropertyDescriptors("1"));
console.log(Object.getOwnPropertyDescriptors(new String("1")));

console.log(strl.__proto__);
console.log(strl.__proto__.__proto__);
console.log(strl.length);
console.log(strl);

console.log(stro.__proto__);
console.log(stro.__proto__.__proto__);
console.log(stro.length);
console.log(stro);

//------------------------------------------------String.prototype.valueOf()-------------------------------
//used internally by JS engine, not to use directly in code
console.log(stro.valueOf());
console.log(strl.valueOf());

//------------------------------------------------String.prototype.toString()-------------------------------
let strts = new String("Example String Object");

console.log(`${strts}`);
console.log(`${"Example Normal String"}`);

strts.toString = () => "Overridden";

console.log(`${strts}`);

strts.toString = function () {
    return String.prototype.toString.call(this);
};
console.log(`${strts}`);

//---------------------------------------------String.prototype.toLowerCase()-----------------------------
console.log("The quick brown fox jumps over the lazy dog.".toLowerCase());

//---------------------------------------------String.prototype.toUpperCase()-----------------------------
console.log("The quick brown fox jumps over the lazy dog.".toUpperCase());

//------------------------------------------------String.prototype.at()-------------------------------
//default parameter : 0 | negative indexing : true | returns undefined for index outofbounds
console.log("".at());
console.log(" ".at());
console.log(strl.at());
console.log(strl.at(0));
console.log(strl.at("1"));
console.log(strl.at(-1));
console.log(strl.at(100));
console.log(strl.at(-100));
console.log(typeof strl.at());

console.log(stro.at(-1));
console.log(typeof stro.at());

//-----------------------------------------------String.prototype.charAt()--------------------------------
//default parameter : 0 | negative indexing : false | returns [empty string] for index outofbounds
console.log("".charAt());
console.log(" ".charAt());
console.log(strl.charAt());
console.log(strl.charAt(0));
console.log(strl.charAt("1"));
console.log(strl.charAt(-1));
console.log(strl.charAt(100));
console.log(strl.charAt(-100));
console.log(typeof strl.charAt());

console.log(stro.charAt(-1));
console.log(stro.charAt(1));
console.log(typeof stro.charAt(1));

//--------------------------------------------String.prototype.concat()-----------------------------
//default parameter : "" | NaN coerced to "NaN" | null coerced to "null" | undefined coerced to "undefined" | number coerced to string | boolean coerced to string | object coerced to string
let strcnct1 = "Hello";
let strcnct2 = "World";
let strcnct3 = "!";
let strcnct4 = [1, 2, 3];
let strcnct5 = { a: 1, b: 2, c: 3 };

console.log(strcnct1.concat(strcnct2));
console.log(strcnct1.concat(strcnct2, strcnct3));
console.log(strcnct1.concat(" ").concat(strcnct2).concat(strcnct3));
console.log(strcnct1.concat(strcnct2, strcnct3, strcnct4));
console.log(strcnct1.concat(strcnct2, " ", strcnct3, " ", strcnct4, " ", strcnct5));
console.log(strcnct1.concat(strcnct2, " ", strcnct3, " ", strcnct4, "\n", JSON.stringify(strcnct5)));
console.log(strcnct1);

console.log(
    "Coercion".concat(1, " ", undefined, " ", null, " ", true, " ", false, " ", NaN, " ", Infinity, " ", -Infinity)
);

//--------------------------------------------String.prototype.repeat()-----------------------------
//default parameter : 0 | NaN coerced to 0 | negative parameter and large parameter throws error
try {
    "abc".repeat(-1);
} catch (error) {
    console.log(error);
}
console.log("abc".repeat());
console.log("abc".repeat(0));
console.log("abc".repeat(1));
console.log("abc".repeat(2));
console.log("abc".repeat(3.5));
try {
    "abc".repeat(1 / 0);
} catch (error) {
    console.log(error);
}

//--------------------------------------------String.prototype.substring()-----------------------------
// negative indexing : false | negative indexes clap to 0 | default parameter : 0 | NaN coerced to 0 | indexes swap if start > end
console.log(strl);
console.log(strl.substring());
console.log(strl.substring(1));
console.log(strl.substring(1, 1));
console.log(strl.substring(100));
console.log(strl.substring(1, 100));
console.log(strl.substring(2, 5));
console.log(strl.substring(5, 2));
console.log(strl.substring(2, -5));
console.log(strl.substring(-2, 5));
console.log(strl.substring(-2, -5));
console.log(strl.substring(-5, -2));
console.log(strl.substring("a", 5));
console.log(strl.substring("a", -5));

//--------------------------------------------String.prototype.slice()-----------------------------
//negative indexing : true | default parameter : 0 | NaN coerced to 0
console.log(strl);
console.log(strl.slice());
console.log(strl.slice(1));
console.log(strl.slice(1, 1));
console.log(strl.slice(100));
console.log(strl.slice(2, 5));
console.log(strl.slice(5, 2));
console.log(strl.slice(-9, -2));
console.log(strl.slice(-9));
console.log(strl.slice("a", 4));
console.log(strl.slice("a", -4));

let quote = "A Phoenix in the sky, Sun in the Sky";
console.log(quote);
console.log(quote.length);

//----------------------------------------------String.prototype.indexOf()-----------------------------
//default first parameter : "" | default second parameter : 0 | returns -1 if not found
//second param is index from where to start search | negative index is clapped to 0 | if second param > string length, returns -1
console.log(quote.indexOf(""));
console.log(quote.indexOf("sky"));
console.log(quote.indexOf("Sky"));
console.log(quote.indexOf("the"));
console.log(quote.indexOf("the", 13));
console.log(quote.indexOf("the", 20));
console.log(quote.indexOf("the", 200));
console.log(quote.indexOf("the", -200));

//---------------------------------------------String.prototype.lastIndexOf()-----------------------------
//default first parameter : "" | default second parameter : string length | returns -1 if not found
//second param is index from where to start search from backwards |	 negative index is clapped to 0 | if second param > string length , its clapped to string length
console.log(quote.lastIndexOf(""));
console.log(quote.lastIndexOf("the"));
console.log(quote.lastIndexOf("the", 29));
console.log(quote.lastIndexOf("the", 20));
console.log(quote.lastIndexOf("the", 200));
console.log(quote.lastIndexOf("the", -200));

console.log(quote.lastIndexOf("the sky"));
console.log(quote.lastIndexOf("the Sky"));
console.log(quote.lastIndexOf("the Sky", 29));

//---------------String.prototype.trimStart() | String.prototype.trim() | String.prototype.trimEnd()--------------------
//removes whitespace from start and end of string | whitespace : " " , \t , \n , \r , \f , \v
console.log(" \t\t   123   \r\n ");
console.log(" \t\t   123   \r\n ".length);
console.log(" \t\t   123   \r\n ".trim());
console.log(" \t\t   123   \r\n ".trim().length);

console.log(" \t\t     123   \r\n ".trimStart());
console.log(" \t\t     123   \r\n ".trimStart().length);

console.log(" \t\t     123   \r\n ".trimEnd());
console.log(" \t\t     123   \r\n ".trimEnd().length);

//---------------------------------------------String.prototype.split()-----------------------------
//default first parameter : "" | default second parameter : string length | returns an array of strings
//first parameter can be regex
console.log(quote);
console.log(quote.split());
console.log(quote.split(""));
console.log(quote.split(","));
console.log(quote.split(" "));
console.log(quote.split(",").map((sentence) => sentence.split(" ")));

console.log(quote.split("", 3));
console.log(quote.split(" ", 4));
console.log(quote.split(" ", 10));

console.log("".split("x"));
console.log("".split(""));

console.log("😄😄".split(/(?:)/));
console.log("😄😄".split(/(?:)/u));

let strsplt = "  The   quick brown   fox              jumps  over the   lazy dog.  ";
console.log(strsplt.split(" "));
console.log(strsplt.split(/[\s]+/));
console.log(strsplt.trim().split(/[\s]+/));

//--------------------------------String.prototype.padStart() | String.prototype.padEnd()-----------------------
//default first parameter : 0 | default second parameter : " " | returns string of length equal to first parameter
console.log(quote);
console.log(quote.length);
console.log(quote.padStart(40, " "));
console.log(quote.padStart(40, " ").length);
console.log(quote.padStart(40, "-"));
console.log(quote.padStart(40, "-").length);

console.log(quote);
console.log(quote.padEnd(40, " "));
console.log(quote.padEnd(40, " ").length);
console.log(quote.padEnd(40, "-"));
console.log(quote.padEnd(40, "-").length);

console.log(quote);
console.log(quote.padStart(40, "-").padEnd(50, "*"));
console.log(quote.padStart(40, "-").padEnd(50, "*").length);
console.log(quote.padStart(40, " ").padEnd(40, "-"));
console.log(quote.padStart(40, " ").padEnd(40, "-").length);
console.log(quote.padStart(40, "-").padEnd(40, " "));
console.log(quote.padStart(40, "-").padEnd(40, " ").length);
console.log(quote.padStart(40, " ").padEnd(50, " ").trim().length);

console.log(quote.padStart(30, "-").length);
console.log(quote.padEnd(30, "-").length);

console.log(quote.padStart(40).length);
console.log(quote.padStart(" ").length);

//---------------------------------------------String.prototype.startsWith()-----------------------------
//default first parameter : "" | default second parameter : 0 | returns boolean
console.log(quote);
console.log(quote.startsWith(""));
console.log(quote.startsWith("A"));
console.log(quote.startsWith("Phoenix", 2));

//---------------------------------------------String.prototype.endsWith()-----------------------------
//default first parameter : "" | default second parameter : string length | returns boolean
console.log(quote);
console.log(quote.length);
console.log(quote.endsWith("Sky"));
console.log(quote.endsWith("Sky", 36));
console.log(quote.endsWith("Sky", 35));

console.log(quote.charAt(20));
console.log(quote.endsWith("sky", 20));

//---------------------------------------------String.prototype.includes()-----------------------------
//default parameter : "" | returns boolean
console.log(quote);
console.log(quote.includes(""));
console.log(quote.includes("Sky"));
console.log(quote.includes("Sky", 20));
console.log(quote.includes("sky", 20));

//----------------------------------------------String.prototype.search()-----------------------------
// default parameter : "" | returns index of first match | returns -1 if not found
console.log(quote);
console.log(quote.search());
console.log(quote.search(/Sky/));
console.log(quote.search(/Sky/i));
console.log(quote.search(/phoenix/));

//-----------------------------------------------String.prototype.match()-----------------------------
// default parameter : "" | returns an array of matches | returns null if not found
console.log(quote);
console.log(quote.match(/Sky/));
console.log(quote.match(/Sky/i));
console.log(quote.match(/Sky/).index);
console.log(quote.match(/Sky/i).index);
console.log(quote.match(/Sky/g));
console.log(quote.match(/sky/gi));
console.log(quote.match(/phoenix/));

//---------------------------------------------String.prototype.matchAll()-----------------------------
// default parameter : "" | returns an iterator of matches | returns
console.log(quote);
console.log(quote.matchAll(/the/gi));
console.log(...quote.matchAll(/sky/gi));
console.log(...quote.matchAll(/phoenix/gi));
console.log(...quote.matchAll(/phoenix/g));
console.log(...quote.matchAll(/phoenix/g));

//----------------------------------------------String.prototype.replace()-----------------------------
//default first parameter : "" | default second parameter : "" | returns a new string
console.log(quote);
console.log(quote.replace("A", "The"));
console.log(quote);
console.log(quote.replace(/a/, "The"));
console.log(quote);
console.log(quote.replace(/a/i, "The"));
console.log(quote);
console.log(quote.replace(/in/, "tada...!"));
console.log(quote);
console.log(quote.replace(/in/g, "tada...!"));
console.log(quote);

//---------------------------------------------String.prototype.replaceAll()-----------------------------
//default first parameter : "" | default second parameter : "" | returns a new string
console.log(quote);
console.log(quote.replaceAll("in", "tada...!"));
console.log(quote);
console.log(quote.replaceAll(/a/gi, "The"));
console.log(quote);
console.log(quote.replaceAll(/sky/gi, "tada...!"));
console.log(quote);
