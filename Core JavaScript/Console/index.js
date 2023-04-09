console.log("Hello world...!", 123, ["Apple", "Banana"], { firstname: "John", lastname: "Doe" });

// --------------------------------------------------------------console.info()-------------------------------------------------
console.info("%cInfo: %cHello world...!", "color:blue; font-size:20px", "color:violet");

// --------------------------------------------------------------console.log()-------------------------------------------------
console.log("%cLog %cHello world...!", "color:green;font-size:20px", "color:violet");

// --------------------------------------------------------------console.debug()-------------------------------------------------
console.debug("%cDebug: %cHello world...!", "color:yellowgreen; font-size:20px", "color:violet");

// --------------------------------------------------------------console.warn()-------------------------------------------------
console.warn("%cWarn: %cHello world...!", "color:yellow; font-size:20px", "color:violet");

// --------------------------------------------------------------console.error()-------------------------------------------------
console.error("%cError: %cHello world...!", "color:red; font-size:20px", "color:violet");

// --------------------------------------------------------------console.dir()-------------------------------------------------
console.log(document.body);
console.dir(document.body);

// --------------------------------------------------------------console.table()-------------------------------------------------
console.table([
	{ firstname: "John", lastname: "Doe", age: 20 },
	{ firstname: "Jane", lastname: "Doe", age: 19 },
]);

// --------------------------------------------------------------console.group()-------------------------------------------------
console.groupCollapsed("%cPlanets", "color:magenta;font-size:20px");
console.log("Mars");
console.log("Earth");
console.log("Saturn");
console.groupEnd("Planets");

// --------------------------------------------------------------console.time()-------------------------------------------------
console.time("countHundered");
console.groupCollapsed("%ccountHundered", "color:magenta; font-size:20px");
for (let i = 1; i <= 100; i++) {
	console.log("%c  %i", "color:#" + `${(Math.round(0xffffff / 0x64) * i).toString(16)}`, i);
	if (i % 10 === 0) {
		console.timeLog("countHundered");
	}
}
console.groupEnd("countHundered");
console.timeEnd("countHundered");

// --------------------------------------------------------------console.assert()-------------------------------------------------
console.assert(22 % 2, "22 isOdd");
console.assert(!(21 % 2), "21 isEven");

// --------------------------------------------------------------console.count()-------------------------------------------------
console.log("%cHow many numbers divisible by 3 and 5 under 100", 'color:plum; font-size:24px; font-family: "Times New Roman", Times, serif');
for (let i = 0; i < 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.count("divisible by 3 & 5-------");
	}
}
