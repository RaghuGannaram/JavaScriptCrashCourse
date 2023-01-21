const loadVideo = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Video loaded..!");
	}, 1000);
});

loadVideo.then((data) => console.log(data));
