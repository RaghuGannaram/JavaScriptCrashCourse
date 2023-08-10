const atm = (amount, denom) => {
	let answer = {},
		i = 0;

	// Your code goes here
	while (amount > 0 ) {
		if (amount >= denom[i]) {
			amount -= denom[i];
			answer[denom[i]] = (answer[denom[i]] ?? 0) + 1;
		} else {
			i++;
		}
	}

	return answer;
};

console.log(atm(6600, [2000, 500, 200]));
// Answer should be in the following format {"2000": 3, "500":1, "200":1}
// Array being passed will always be in a descending order
// Length of the array can change, instead of 3 notes the array could have n notes
// where n can be any positive number
