let strLtrl = "0123456789";
let strObj = new String("Hello World");

console.log(strLtrl);
console.log(strObj);

console.log(typeof strLtrl);
console.log(typeof strObj);
console.log(strLtrl instanceof String);
console.log(strLtrl instanceof Object);
console.log(strObj instanceof String);
console.log(strObj instanceof Object);

let str = "z0123456789";

console.log(str.__proto__);
console.log(str.__proto__.__proto__);
console.log(str.length);

//------------------------------------------------String.prototype.at()----------------------------
console.log(str.at());
console.log(str.at(0));
console.log(str.at("1"));
console.log(str.at(-1));
console.log(typeof str.at());

//-----------------------------------------------String.prototype.charAt()--------------------------
console.log(str.charAt());
console.log(str.charAt(0));
console.log(str.charAt("1"));
console.log(str.charAt(-1));

console.log(str);
console.log(str.slice());
console.log(str);
console.log(str.slice(1));
console.log(str);
console.log(str.slice("a", 100));
console.log(str);
console.log(str.slice("a", 100));
console.log(str);
console.log(str.slice(100));
console.log(str);
console.log(str.slice(2, 3));
console.log(str);
console.log(str.slice(3, 2));
console.log(str);
console.log(str.slice(-9, -2));
console.log(str);
console.log(str.slice(-9));
console.log(str);

console.log(str);
console.log(str.substring());
console.log(str);
console.log(str.substring(1));
console.log(str);
console.log(str.substring(1, 100));
console.log(str);
console.log(str.substring(100));
console.log(str);
console.log(str.substring(2, 5));
console.log(str);
console.log(str.substring(5, 2));
console.log(str);
console.log(str.substring(2, -5));
console.log(str);
console.log(str.substring(-2, 5));
console.log(str);
console.log(str.substring(-2, -5));
console.log(str);
console.log(str.substring("a", 5));
console.log(str);
console.log(str.substring("a", -5));
console.log(str);

console.log(str);
console.log(str.substr(1, 5));
console.log(str);
console.log(str.substr("a", 5));
console.log(str);
console.log(str.substr(5, 1));
console.log(str);
console.log(str.substr(-1, 5));
console.log(str);
console.log(str.substr(100, 5));
console.log(str);
console.log(str.substr(5, 100));
console.log(str);

let quote = "A Phoenix in the sky, Sun in the Sky";

console.log(quote);
console.log(quote.replace("A", "The"));
console.log(quote);
console.log(quote.replace(/a/i, "The"));
console.log(quote);
console.log(quote.replace(/a/, "The"));
console.log(quote);

console.log(quote.length);
console.log(quote.padStart(40, " "));
console.log(quote.padStart(40, " ").length);
console.log(quote);
console.log(quote.padStart(40, "-"));
console.log(quote.padStart(40, "-").length);
console.log(quote);
console.log(quote.padEnd(40, " "));
console.log(quote.padEnd(40, " ").length);
console.log(quote);
console.log(quote.padEnd(40, "-"));
console.log(quote.padEnd(40, "-").length);
console.log(quote);

console.log(quote.padStart(40, "-").padEnd(50, "*"));
console.log(quote.padStart(40, "-").padEnd(50, "-").length);
console.log(quote);
console.log(quote.padStart(40, " ").padEnd(40, "-"));
console.log(quote.padStart(40, " ").padEnd(40, "-").length);
console.log(quote);
console.log(quote.padStart(40, "-").padEnd(40, " "));
console.log(quote.padStart(40, "-").padEnd(40, " ").length);
console.log(quote);
console.log(quote.padStart(40, " ").trim().length);
console.log(quote);

console.log(quote.indexOf("sky"));
console.log(quote.indexOf("Sky"));
console.log(quote.indexOf("the"));
console.log(quote.indexOf("the", 20));
console.log(quote.lastIndexOf("the"));
console.log(quote.lastIndexOf("the", 20));

console.log(quote.includes("Phoenix"));
console.log(quote.includes("Phoenix", 20));
console.log(quote.startsWith("A"));
console.log(quote.startsWith("Phoenix", 2));
console.log(quote.endsWith("Sky"));
console.log(quote.charAt(20));
console.log(quote.endsWith("sky", 20));

console.log(quote.charAt(20));
console.log(quote.charCodeAt(20));
console.log(quote.charAt(0));
console.log(quote.charCodeAt(0));
console.log(str.charAt(0));
console.log(str.charCodeAt(0));

console.log(quote.split());
console.log(quote);
console.log(quote.split(""));
console.log(quote);
console.log(quote.split(","));
console.log(quote);
console.log(quote.split(" "));
console.log(quote);
console.log(quote.split(",").map((sentence) => sentence.split(" ")));
console.log(quote);

console.log(quote.search(/Sky/));
console.log(quote.search(/Sky/i));
console.log(quote.match("the"));
console.log(quote.match("the").index);

console.log(quote.match(/Sky/));
console.log(quote.match(/Sky/i));
console.log(quote.match(/Sky/).index);
console.log(quote.match(/Sky/i).index);

console.log(quote.match(/Sky/g));
console.log(quote.match(/sky/gi));

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
