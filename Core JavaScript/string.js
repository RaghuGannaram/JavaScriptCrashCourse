let strLtrl = "0123456789";
let strObj = new String("Hello World");

console.log(strLtrl);
console.log(strObj);

console.log(typeof strLtrl);
console.log(typeof strObj);
console.log(typeof strObj.toString());

console.log(strLtrl instanceof String);
console.log(strLtrl instanceof Object);
console.log(strObj instanceof String);
console.log(strObj instanceof Object);

console.log(Object.getOwnPropertyDescriptors(strLtrl));
console.log(Object.getOwnPropertyDescriptors(strObj));

let str = "0123456789";

console.log(str.__proto__);
console.log(str.__proto__.__proto__);
console.log(str.length);

//------------------------------------------------String.prototype.at()-------------------------------
//default parameter : 0, negativeIndexing : true
console.log("".at());
console.log(str.at());
console.log(str.at(0));
console.log(str.at("1"));
console.log(str.at(-1));
console.log(typeof str.at());

//-----------------------------------------------String.prototype.charAt()--------------------------------
//default parameter : 0, negativeIndexing : false, returns [empty string] for index outofbounds
console.log(str.charAt());
console.log(str.charAt(0));
console.log(str.charAt("1"));
console.log(str.charAt(-1));

//-----------------------------------------------String.prototype.charCodeAt()-----------------------------
//default parameter : 0,  negativeIndexing : false, returns NaN for index outofbounds,
console.log(str.charCodeAt(0));
console.log(str.charCodeAt(1));
console.log(str.charCodeAt(100));

//-----------------------------------------------String.prototype.codePoinAt()------------------------------
//default parameter : 0,  negativeIndexing : false, returns undefined for index outofbounds,
console.log(str.codePointAt(0));
console.log(str.codePointAt(1));
console.log(str.codePointAt(100));

//-----------------------------------------------String.fromCharCode()-----------------------------
console.log(String.fromCharCode(48, 49, 50, 1010022));

//-----------------------------------------------String.fromCodePoint()----------------------------
console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804));

//--------------------------------------------String.prototype.concat()-----------------------------
console.log(str.concat("\n", "Hello", " ", "world", ".", ".", "!", "\n", [1, 2, 3], "\n", JSON.stringify({ a: 1, b: 2, c: 3 })));

//--------------------------------------------String.prototype.slice()-----------------------------
console.log(str);
console.log(str.slice());
console.log(str.slice(1));
console.log(str.slice(100));
console.log(str.slice("a", 2));
console.log(str.slice(2, 3));
console.log(str.slice(3, 2));
console.log(str.slice(-9, -2));
console.log(str.slice(-9));

//--------------------------------------------String.prototype.substring()-----------------------------
console.log(str);
console.log(str.substring());
console.log(str.substring(1));
console.log(str.substring(100));
console.log(str.substring(1, 100));
console.log(str.substring(-100, 100));
console.log(str.substring(2, 5));
console.log(str.substring(5, 2));
console.log(str.substring(2, -5));
console.log(str.substring(-2, 5));
console.log(str.substring(-2, -5));
console.log(str.substring("a", 5));
console.log(str.substring("a", -5));

//----------------------------------------------String.prototype.substr()-----------------------------
console.log(str);
console.log(str.substr(1, 5));
console.log(str.substr("a", 5));
console.log(str.substr(5, 1));
console.log(str.substr(-1, 5));
console.log(str.substr(100, 5));
console.log(str.substr(5, 100));

let quote = "A Phoenix in the sky, Sun in the Sky";
//----------------------------------------------String.prototype.indexOf()-----------------------------
console.log(quote.indexOf("sky"));
console.log(quote.indexOf("Sky"));
console.log(quote.indexOf("the"));
console.log(quote.indexOf("the", 20));

//---------------------------------------------String.prototype.lastIndexOf()-----------------------------
console.log(quote.lastIndexOf("the"));
console.log(quote.lastIndexOf("the", 20));

//----------------------------------------------String.prototype.search()-----------------------------
console.log(quote);
console.log(quote.search(/Sky/));
console.log(quote.search(/Sky/i));

//-----------------------------------------------String.prototype.match()-----------------------------
console.log(quote.match("the"));
console.log(quote.match("the").index);
console.log(quote.match(/Sky/));
console.log(quote.match(/Sky/i));
console.log(quote.match(/Sky/).index);
console.log(quote.match(/Sky/i).index);
console.log(quote.match(/Sky/g));
console.log(quote.match(/sky/gi));

//---------------------------------------------String.prototype.matchAll()-----------------------------
for (let result of quote.matchAll("the")) {
	console.log(result);
	console.log(result.index);
}

for (let result of quote.matchAll(/sky/gi)) {
	console.log(result);
	console.log(result.index);
}

//----------------------------------------------String.prototype.replace()-----------------------------
console.log(quote);
console.log(quote.replace("A", "The"));
console.log(quote);
console.log(quote.replace(/a/, "The"));
console.log(quote);
console.log(quote.replace(/a/i, "The"));
console.log(quote);
console.log(quote.replace(/in/g, "tada...!"));
console.log(quote);

//---------------------------------------------String.prototype.replaceAll()-----------------------------
console.log(quote);
console.log(quote.replaceAll("in", "tada...!"));
console.log(quote);
console.log(quote.replaceAll(/a/gi, "The"));
console.log(quote);
console.log(quote.replaceAll(/sky/gi, "tada...!"));
console.log(quote);

//--------------------------------String.prototype.padStart() | String.prototype.padEnd()-----------------------
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

//---------------String.prototype.trimStart()|String.prototype.trim()|-String.prototype.trimEnd()--------------------
console.log("    123    ".length);
console.log("    123    ".trimStart().length);
console.log("    123    ".trimEnd().length);
console.log("    123    ".trim().length);

//---------------------------------------------String.prototype.startsWith()-----------------------------
console.log(quote);
console.log(quote.startsWith("A"));
console.log(quote.startsWith("Phoenix", 2));

//---------------------------------------------String.prototype.endsWith()-----------------------------
console.log(quote);
console.log(quote.endsWith("Sky"));
console.log(quote.charAt(20));
console.log(quote.endsWith("sky", 20));

//---------------------------------------------String.prototype.split()-----------------------------
console.log(quote);
console.log(quote.split());
console.log(quote.split(""));
console.log(quote.split(","));
console.log(quote.split(" "));
console.log(quote.split(",").map((sentence) => sentence.split(" ")));

//---------------------------------------------String.prototype.toLowerCase()-----------------------------
console.log(quote);
console.log(quote.toLowerCase());

//---------------------------------------------String.prototype.toUpperCase()-----------------------------
console.log(quote);
console.log(quote.toUpperCase());

let s = "   fly me   to   the moon  ";
console.log(s);
console.log(s.length);
console.log(s.trim());
console.log(s);
console.log(s.length);
console.log(s.includes(" "));
console.log(s.split(" "));
console.log(s.split(" ").includes(" "));
console.log(s.split(""));
console.log(s.split("").includes(" "));

console.log("a" === "A");

let test = "abcdefg";

console.log(test.replace("a", "z"));

console.log(test);

console.log(quote);
let asd = "Bob hit   a ball, the hit BALL flew far after d. it was hit.";

let wed = "   as   fd   we ewe  we";
console.log(wed.split(" ").filter((x) => x));
console.log(asd.replace(/(\!|\?|\'|\,|\;|\.)/g, "").toLowerCase());
for (let i of test) {
	console.log(i);
}
