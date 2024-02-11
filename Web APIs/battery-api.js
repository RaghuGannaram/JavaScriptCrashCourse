async function batteryAPI() {
    const battery = await navigator.getBattery();

    return battery;
}

export default batteryAPI;
