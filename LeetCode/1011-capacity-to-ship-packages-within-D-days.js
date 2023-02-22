var shipWithinDays1 = function (weights, days) {
	let loader,
		cur,
		d,
		temp,
		cMin = Math.max(...weights),
		cMax = weights.reduce((acc, current) => acc + current, 0);
	console.log(cMin, cMax);

	for (let c = 5; c <= cMax; c++) {
		cur = 0;
		d = 1;
		loader = [...weights];
		console.log(loader);

		while (loader.length) {
			console.log(loader);
			console.log(cur);
			temp = loader[0];
			if (cur + temp > c) {
				d = d + 1;
				cur = temp;
			} else {
				cur += temp;
			}
			if (d > days) {
				break;
			}
			loader.shift();
		}
		console.log(loader);
		if (!loader.length) {
			return c;
		}
	}
};

var shipWithinDays2 = function (weights, days) {
	let packages,
		cargo,
		daysLeft,
		temp,
		capacity,
		leastCapacity,
		l = Math.max(...weights),
		r = weights.reduce((acc, cur) => acc + cur, 0);

	leastCapacity = r;

	while (l < r) {
    console.log(l,r)
		capacity = Math.floor((l + r) / 2);
		packages = weights.slice(0);
		daysLeft = days;
		cargo = 0;

		while (packages.length) {
			temp = packages[0];
			if (cargo + temp <= capacity) {
				cargo += temp;
			} else {
				daysLeft--;
				cargo = temp;
			}
			if (daysLeft === 0) break;
			packages.shift();
		}

		if (packages.length === 0) {
			r = capacity;
			leastCapacity = Math.min(leastCapacity, capacity);
		}
		if (packages.length > 0) {
			l = capacity + 1;
		}
	}
	return leastCapacity;
};

console.log(shipWithinDays2([3, 2, 2, 4, 1, 4], 3));
