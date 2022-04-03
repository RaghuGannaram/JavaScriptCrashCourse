let str = "0123456789";

console.log(str)
console.log(typeof(str))
console.log(str.__proto__)
console.log(str.__proto__.__proto__)

console.log(str.length)
console.log(str.slice(1))
console.log(str.slice(2,3))
console.log(str.slice(-9,-2))
console.log(str.slice(-9))
console.log(str)


console.log(str.substring(1))
console.log(str.substring(2, 5))
console.log(str.substring(2, -5))
console.log(str.substring(-2, 5))
console.log(str.substring(-2, -5))

console.log(str.substr(1,5))
console.log(str.substr(-9,5))



let quote = "A Phoenix in the sky, Sun in the Sky";

console.log(quote.replace('A', 'The'))
console.log(quote)
console.log(quote.replace(/a/i, 'The'))
console.log(quote.replace(/a/ig, 'The'))

console.log(quote.length)
console.log(quote.padStart(40,' ').length)
console.log(quote.padStart(40,'-'))
console.log(quote.padEnd(40,'-'))

console.log(quote.padStart(40,'-').padEnd(50,'-'))
console.log(quote.padStart(40,' ').padEnd(40,'-').length)
console.log(quote.padStart(40,' ').trim().length)
console.log(quote.length)

console.log(quote.charAt(0))
console.log(quote.charCodeAt(0))
console.log(str.charCodeAt(0))

console.log(quote.split())
console.log(quote.split(''))
console.log(quote.split(','))
console.log(quote.split(' '))
console.log(quote.split(',').map(sentence => sentence.split(' ')))

console.log(quote.indexOf('sky'))
console.log(quote.indexOf('Sky'))
console.log(quote.indexOf('the'))
console.log(quote.indexOf('the',15))
console.log(quote.lastIndexOf('the',20))
console.log(quote.lastIndexOf('the'))
console.log(quote.search(/Sky/))
console.log(quote.search(/Sky/i))
console.log(quote.match('the'))
console.log(quote.match('the').index)

console.log(quote.match(/sky/g))
console.log(quote.match(/sky/ig))

console.log(quote.includes('the',20))
console.log(quote.startsWith('A'))
console.log(quote.startsWith('Phoenix',2))
console.log(quote.endsWith('Sky'))
console.log(quote.endsWith('sky',20))


let s = "   fly me   to   the moon  ";
console.log(s.split(' '))
console.log(s.lastIndexOf(s.split(' ')[-1]))
