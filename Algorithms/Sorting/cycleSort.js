function cycleSortMark1(arr) {
	for (let final_pos, cycle_start = 0; cycle_start < arr.length; cycle_start++) {
		while (true) {
			final_pos = cycle_start;
			for (let i = cycle_start + 1; i < arr.length; i++) {
				if (arr[i] < arr[cycle_start]) final_pos++;
			}
			if (cycle_start === final_pos) break;
			[arr[cycle_start], arr[final_pos]] = [arr[final_pos], arr[cycle_start]];
		}
	}
	return arr;
}

function cycleSortMark2(arr) {
	for (let final_pos, cycle_start = 0; cycle_start < arr.length; cycle_start++) {
		while (true) {
			final_pos = cycle_start;
			for (let i = cycle_start + 1; i < arr.length; i++) {
				if (arr[i] < arr[cycle_start]) final_pos++;
			}
			if (cycle_start === final_pos) break;
			while (arr[cycle_start] === arr[final_pos]) final_pos++;
			[arr[cycle_start], arr[final_pos]] = [arr[final_pos], arr[cycle_start]];
		}
	}
	return arr;
}

function cycleSortMark3(arr) {
	for (let temp, final_pos, cycle_start = 0; cycle_start < arr.length; cycle_start++) {
		temp = arr[cycle_start];
		while (true) {
			final_pos = cycle_start;
			for (let i = cycle_start + 1; i < arr.length; i++) {
				if (arr[i] < temp) final_pos++;
			}
			if (cycle_start === final_pos) break;
			while (temp === arr[final_pos]) final_pos++;
			[temp, arr[final_pos]] = [arr[final_pos], temp];
		}
		arr[cycle_start] = temp;
	}
	return arr;
}

function cycleSort(arr) {
	for (let temp, final_pos, cycle_start = 0; cycle_start < arr.length; cycle_start++) {
		temp = arr[cycle_start];
		
		final_pos = cycle_start;
		for (let i = cycle_start + 1; i < arr.length; i++) {
			if (arr[i] < temp) final_pos++;
		}
		if (cycle_start === final_pos) continue;
		while (temp === arr[final_pos]) final_pos++;
		[temp, arr[final_pos]] = [arr[final_pos], temp];

		while (true) {
			final_pos = cycle_start;
			for (let i = cycle_start + 1; i < arr.length; i++) {
				if (arr[i] < temp) final_pos++;
			}
			if (cycle_start === final_pos) break;
			while (temp === arr[final_pos]) final_pos++;
			[temp, arr[final_pos]] = [arr[final_pos], temp];
		}

		arr[cycle_start] = temp;
	}
	return arr;
}

// console.log(cycleSortMark1([4, 1, 6, 7, 3, 2, 5]));
// console.log(cycleSortMark2([4, 1, 4, 7, 3, 2, 5]));
// console.log(cycleSortMark3([4, 1, 4, 7, 3, 2, 5]));
console.log(cycleSort([4, 1, 4, 7, 3, 2, 5]));

let input = [234, 43, 234, -56, -56, 55, 63, 5, 6, 235, 547];
// console.log("input : ", input);
// let { writes: w, arr: output } = cycleSort(input);
// console.log(`No of writes : ${w} \nSorted array : `, output);
