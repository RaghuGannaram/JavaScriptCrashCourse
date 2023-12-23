class Vehicle {
    constructor(model, tankCapacity, mileage, maxSpeed, fuelType, color, yearOfManufacture) {
        this.model = model;
        this.tankCapacity = tankCapacity; // Liters
        this.mileage = mileage; // Km/Litre
        this.maxSpeed = maxSpeed; // Kmph
        this.fuelType = fuelType;
        this.color = color;
        this.yearOfManufacture = yearOfManufacture;

        this.distance = 0; // Km
        this.speed = 0; // Kmph
        this.gear = 0; // Current gear
        this.fuel = tankCapacity; // Liters, starts full
        this.maintenanceRequired = false;
    }

    _updateFuelConsumption() {
        const FUEL_CONSUMPTION_RATE = (this.speed < 20 ? 0.9 : 1) / this.mileage;
        return FUEL_CONSUMPTION_RATE;
    }

    _checkMaintenance() {
        if (this.distance >= 10000) {
            // Simple rule for maintenance check
            this.maintenanceRequired = true;
        }
    }

    accelerate() {
        if (this.speed < this.maxSpeed) {
            this.speed += 10;
            this.gear = Math.min(5, Math.floor(this.speed / 20) + 1);
            return `speed: ${this.model} is going at ${this.speed} km/h, Gear: ${this.gear}`;
        } else {
            return `speed: ${this.model} is already at max speed of ${this.maxSpeed} km/h`;
        }
    }

    // brake() {
    //     this.speed = Math.max(0, this.speed - 10);
    //     this.gear = Math.max(0, this.gear - 1);
    //     return this.speed > 0
    //         ? `brake: ${this.model} is going at ${this.speed} km/h`
    //         : `brake: ${this.model} has stopped`;
    // }

    // drive(seconds) {
    //     let hours = seconds / 3600;
    //     let distanceCovered = this.speed * hours;
    //     let fuelUsed = distanceCovered * this._updateFuelConsumption();

    //     if (this.fuel >= fuelUsed) {
    //         this.distance += distanceCovered;
    //         this.fuel -= fuelUsed;
    //         this._checkMaintenance();
    //         return `drive: Driving for ${seconds} seconds. Distance: ${this.distance.toFixed(
    //             2
    //         )} km, Fuel left: ${this.fuel.toFixed(2)} liters`;
    //     } else {
    //         return `drive: Not enough fuel to drive for ${seconds} seconds. Distance: ${this.distance.toFixed(
    //             2
    //         )} km, Fuel left: ${this.fuel.toFixed(2)} liters`;
    //     }
    // }

    // Start driving
    startDriving() {
        if (this.drivingIntervalId) {
            console.log("update: The vehicle is already driving.");
            return;
        }

        this.drivingIntervalId = setInterval(() => {
            if (this.speed > 0) {
                let hours = 1 / 3600; // Assuming the interval is 1 second for simplicity
                let distanceCovered = this.speed * hours;
                let fuelUsed = distanceCovered * this._updateFuelConsumption();

                if (this.fuel >= fuelUsed) {
                    this.distance += distanceCovered;
                    this.fuel -= fuelUsed;
                    this._checkMaintenance();
                } else {
                    console.log("Not enough fuel. Vehicle stopped.");
                    this.speed = 0;
                    this.stopDriving();
                }
            }
        }, 1000);
    }

    // Stop driving
    stopDriving() {
        clearInterval(this.drivingIntervalId);
        this.drivingIntervalId = null;
    }

    // Modified brake function
    brake() {
        this.speed = Math.max(0, this.speed - 10);
        this.gear = Math.max(0, this.gear - 1);
        if (this.speed === 0) {
            this.stopDriving();
        }
        return this.speed > 0 ? `${this.model} is going at ${this.speed} km/h` : `${this.model} has stopped`;
    }

    checkFuel() {
        return this.fuel < this.tankCapacity * 0.2
            ? `checkFuel: Low fuel. Please refill`
            : `checkFuel: Current fuel: ${this.fuel.toFixed(2)} liters`;
    }

    performMaintenance() {
        if (this.maintenanceRequired) {
            this.maintenanceRequired = false;
            this.distance = 0; // Resetting distance for simplicity
            return `performMaintenance: ${this.model} maintenance completed`;
        }
        return `performMaintenance: ${this.model} does not require maintenance yet`;
    }

    getCurrentStats() {
        return {
            model: this.model,
            speed: this.speed,
            gear: this.gear,
            fuel: this.fuel,
            distance: this.distance,
            maintenanceRequired: this.maintenanceRequired,
        };
    }

    // Start continuous updates
    startContinuousUpdates(updateInterval) {
        if (this.updateIntervalId) {
            console.log("Continuous updates already running.");
            return;
        }

        this.updateIntervalId = setInterval(() => {
            console.log(this.getCurrentStats());
        }, updateInterval);
    }

    // Stop continuous updates
    stopContinuousUpdates() {
        clearInterval(this.updateIntervalId);
        this.updateIntervalId = null;
    }
}

// Example instantiation
const myCar = new Vehicle("Toyota", 50, 10, 200, "Petrol", "Red", 2021);

// Example usage
const monitor = myCar.startContinuousUpdates(1000);
console.log(myCar.accelerate());
console.log(myCar.accelerate());
console.log(myCar.accelerate());
console.log(myCar.accelerate());
console.log(myCar.accelerate());
console.log(myCar.accelerate());
console.log(myCar.accelerate());
console.log(myCar.accelerate());
console.log(myCar.accelerate());
// console.log(myCar.drive(3600)); // Drive for an hour
myCar.startContinuousUpdates(1000); // Update every 1 second
myCar.startDriving();
console.log(myCar.checkFuel());
// console.log(myCar.brake());
console.log(myCar.performMaintenance());
console.log(myCar.getCurrentStats());
