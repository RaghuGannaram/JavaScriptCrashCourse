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
let x = 0;

const resizeHandler = throttle(() => {
    console.log("Resize event fired...", x++);
}, 1000);

window.addEventListener("resize", resizeHandler);
