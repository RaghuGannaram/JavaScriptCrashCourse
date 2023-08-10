const buffer = new ArrayBuffer(8);

const signed8bitArray = new Int8Array(buffer);
const unsigned8bitArray = new Uint8Array(buffer);

const signed16bitArray = new Int16Array(buffer);
const unsigned16bitArray = new Uint16Array(buffer);

const signed32bitArray = new Int32Array(buffer);
const unsigned32bitArray = new Uint32Array(buffer);

console.log(buffer.byteLength);

console.log(signed8bitArray);
console.log(unsigned8bitArray);
console.log(signed16bitArray);
console.log(unsigned16bitArray);
console.log(signed32bitArray);
console.log(unsigned32bitArray);

signed8bitArray[0] = 128;
console.log(signed8bitArray);
console.log(unsigned8bitArray);
console.log(signed16bitArray);
console.log(unsigned16bitArray);
console.log(signed32bitArray);
console.log(unsigned32bitArray);

signed8bitArray[0] = 254;
signed8bitArray[1] = 254;
console.log(signed8bitArray);
console.log(unsigned8bitArray);
console.log(signed16bitArray);
console.log(unsigned16bitArray);
console.log(signed32bitArray);
console.log(unsigned32bitArray);
let a = 10;
console.log(Array.isArray(a))