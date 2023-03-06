function bucketSort(arr) {
	let min = Math.min(...arr),
		max = Math.max(...arr),
		size = Math.sqrt(max - min) + 1;

	console.log(Math.sqrt(max - min));

	const buckets = Array.from({ length: Math.ceil((max - min) / size) }, () => []);

	arr.forEach((val) => {
		console.log(Math.floor((val - min) / size));
		buckets[Math.floor((val - min) / size)].push(val);
	});
	return buckets.reduce((acc, b) => [...acc, ...b.sort((a, b) => a - b)], []);
}

let input = [5, 2, 3, 1];
console.log("input : ", input);
let output = bucketSort(input);
console.log("output : ", output);
