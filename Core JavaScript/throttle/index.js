function throttle(fn, delay) {
	let flag = true;
	return function () {
		if (flag) {
			fn.apply(this, arguments);
			flag = false;
			setTimeout(() => {
				flag = true;
			}, delay);
		}
	};
}

const resizeHandler = throttle(() => {
	console.log("Resize event fired...");
}, 5000);

window.addEventListener("resize", resizeHandler);
