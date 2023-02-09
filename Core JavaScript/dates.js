console.log(new Date());
console.log(typeof new Date());

let today = new Date();

//--------------------------------------Date.prototype.getTime()-----------------------------------
console.log(today.getTime());

//--------------------------------------Date.prototype.getMilliseconds()-----------------------------------
console.log(today.getMilliseconds());

//--------------------------------------Date.prototype.getUTCMilliseconds()-----------------------------------
console.log(today.getUTCMilliseconds());

//--------------------------------------Date.prototype.getSeconds()-----------------------------------
console.log(today.getSeconds());

//--------------------------------------Date.prototype.getUTCSeconds()-----------------------------------
console.log(today.getUTCSeconds());

//--------------------------------------Date.prototype.getMinutes()-----------------------------------
console.log(today.getMinutes());

//--------------------------------------Date.prototype.getUTCMinutes()-----------------------------------
console.log(today.getUTCMinutes());

//--------------------------------------Date.prototype.getHours()-----------------------------------
console.log(today.getHours());

//--------------------------------------Date.prototype.getUTCHours()-----------------------------------
console.log(today.getUTCHours());

//--------------------------------------Date.prototype.getDay()-----------------------------------
console.log(today.getDay());

//--------------------------------------Date.prototype.getUTCDay()-----------------------------------
console.log(today.getUTCDay());

//--------------------------------------Date.prototype.getDate()-----------------------------------
console.log(today.getDate());

//--------------------------------------Date.prototype.getUTCDate()-----------------------------------
console.log(today.getUTCDate());

//--------------------------------------Date.prototype.getMonth()-----------------------------------
console.log(today.getMonth());

//--------------------------------------Date.prototype.getUTCMonth()-----------------------------------
console.log(today.getUTCMonth());

//--------------------------------------Date.prototype.getFullYear()-----------------------------------
console.log(today.getFullYear());

//--------------------------------------Date.prototype.getUTCFullYear()-----------------------------------
console.log(today.getUTCFullYear());

//--------------------------------------Date.prototype.getTimezoneOffset()------------------------------
console.log(today.getTimezoneOffset());

const holiday = new Date("August 19, 1975 23:15:30");
console.log(holiday);

//--------------------------------------Date.prototype.setTime()-----------------------------------
console.log(holiday.getTime());
console.log(holiday);
console.log(holiday.setTime(holiday.getTime() + 86400000));
console.log(holiday);

//--------------------------------------Date.prototype.setMilliseconds()-----------------------------------
console.log(holiday.setMilliseconds(500));
console.log(holiday);

//--------------------------------------Date.prototype.setUTCMilliseconds()-----------------------------------
console.log(holiday.setUTCMilliseconds(500));
console.log(holiday);

//--------------------------------------Date.prototype.setSeconds()-----------------------------------
console.log(holiday.setSeconds(30));
console.log(holiday);

console.log(holiday.setSeconds(30, 500));
console.log(holiday);

//--------------------------------------Date.prototype.setUTCSeconds()-----------------------------------
console.log(holiday.setUTCSeconds(30));
console.log(holiday);

console.log(holiday.setUTCSeconds(30, 500));
console.log(holiday);

//--------------------------------------Date.prototype.setMinutes()-----------------------------------
console.log(holiday.setMinutes(10));
console.log(holiday);

console.log(holiday.setMinutes(10, 30));
console.log(holiday);

console.log(holiday.setMinutes(10, 30, 500));
console.log(holiday);

//--------------------------------------Date.prototype.setUTCMinutes()-----------------------------------
console.log(holiday.setUTCMinutes(10));
console.log(holiday);

console.log(holiday.setUTCMinutes(10, 30));
console.log(holiday);

console.log(holiday.setUTCMinutes(10, 30, 500));
console.log(holiday);

//--------------------------------------Date.prototype.setHours()-----------------------------------
console.log(holiday.setHours(2));
console.log(holiday);

console.log(holiday.setHours(2, 10));
console.log(holiday);

console.log(holiday.setHours(2, 10, 30));
console.log(holiday);

console.log(holiday.setHours(2, 10, 30, 500));
console.log(holiday);

//--------------------------------------Date.prototype.setUTCHours()-----------------------------------
console.log(holiday.setUTCHours(2));
console.log(holiday);

console.log(holiday.setUTCHours(2, 10));
console.log(holiday);

console.log(holiday.setUTCHours(2, 10, 30));
console.log(holiday);

console.log(holiday.setUTCHours(2, 10, 30, 500));
console.log(holiday);

//--------------------------------------Date.prototype.setDate()-----------------------------------
console.log(holiday.setDate(25));
console.log(holiday);

//--------------------------------------Date.prototype.setUTCDate()-----------------------------------
console.log(holiday.setUTCDate(25));
console.log(holiday);

//--------------------------------------Date.prototype.setMonth()-----------------------------------
console.log(holiday.setMonth(8));
console.log(holiday);

//--------------------------------------Date.prototype.setUTCMonth()-----------------------------------
console.log(holiday.setUTCMonth(8));
console.log(holiday);

//--------------------------------------Date.prototype.setFullYear()-----------------------------------
console.log(holiday.setFullYear(2025));
console.log(holiday);

//--------------------------------------Date.prototype.setUTCFullYear()---------------------------------
console.log(holiday.setUTCFullYear(2025));
console.log(holiday);

//------------------------------------------Date.now()------------------------------------------------
console.log(Date());
console.log(typeof Date());

console.log(Date.now());
console.log(typeof Date.now());

console.log(Date.parse(Date()));
console.log(typeof Date.parse());

//----------------------------------------Date.prototypr.toString()---------------------------------------
let dateStr1 = new Date();
console.log(dateStr1);

console.log(dateStr1.toString());

//----------------------------------------Date.prototypr.toTimeString()---------------------------------------
let dateTStr1 = new Date();
console.log(dateTStr1);

console.log(dateTStr1.toTimeString());

//----------------------------------------Date.prototypr.toDateString()---------------------------------------
let dateDStr1 = new Date();
console.log(dateDStr1);

console.log(dateDStr1.toDateString());

//----------------------------------------Date.prototypr.toISOString()---------------------------------------
let dateIStr1 = new Date();
console.log(dateIStr1);

console.log(dateIStr1.toISOString());

//----------------------------------------Date.prototypr.toUTCString()---------------------------------------
let dateUStr1 = new Date();
console.log(dateUStr1);

console.log(dateUStr1.toUTCString());

//----------------------------------------Date.prototypr.toLocaleString()---------------------------------------
let dateLStr1 = new Date();
console.log(dateLStr1);

console.log(dateLStr1.toLocaleString());
console.log(dateLStr1.toLocaleString("en-GB"));
console.log(dateLStr1.toLocaleString("ko-KR"));
console.log(dateLStr1.toLocaleString("en-GB", { timeZone: "UTC", timeStyle: "full" }));

//----------------------------------------Date.prototypr.toLocaleTimeString()---------------------------------------
let dateLTStr1 = new Date();
console.log(dateLTStr1);

console.log(dateLTStr1.toLocaleTimeString());
console.log(dateLTStr1.toLocaleTimeString("en-GB"));
console.log(dateLTStr1.toLocaleTimeString("ko-KR"));
console.log(dateLTStr1.toLocaleTimeString("en-GB", { timeZone: "UTC", timeStyle: "full" }));

//----------------------------------------Date.prototypr.toLocaleDateString()---------------------------------------
let dateLDStr1 = new Date();
console.log(dateLDStr1);

console.log(dateLDStr1.toLocaleDateString());
console.log(dateLDStr1.toLocaleDateString("en-GB"));
console.log(dateLDStr1.toLocaleDateString("ko-KR"));
console.log(dateLDStr1.toLocaleDateString("en-GB", { timeZone: "UTC" }));

//----------------------------------------Date.prototypr.valueOf()---------------------------------------
let dateV1 = new Date();
console.log(dateV1.valueOf());
console.log(dateV1.getTime());
