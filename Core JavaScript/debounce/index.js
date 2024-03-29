async function fetchMoviesInfo(event) {
	console.log("fetchInfo", event.target.value);
	const response = await fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=${event.target.value}`, {
		method: "GET",
		headers: {
			"x-rapidapi-key": process.env.RAPIS_API_KEY,
			"x-rapidapi-host": "online-movie-database.p.rapidapi.com",
		},
	});
	const data = await response.json();
	console.log(data);
}

function debounce(fn, delay = 1000) {
	let timeout;
	return function (...args) {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			fn.apply(this, args);
		}, delay);
	};
}

const debouncedFetchMoviesInfo = debounce(fetchMoviesInfo, 1000);
