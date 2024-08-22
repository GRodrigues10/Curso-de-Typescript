"use strict";
var Vehicles;
(function (Vehicles) {
    class Car {
        name;
        motor;
        constructor(name) {
            this.name = name;
            this.motor = new Motors.Motor(100);
        }
    }
    Vehicles.Car = Car;
})(Vehicles || (Vehicles = {}));
var Motors;
(function (Motors) {
    class Turbo {
        powerfull;
        constructor(powerfull) {
            this.powerfull = powerfull;
        }
    }
    class Motor {
        power;
        constructor(power) {
            this.power = power;
        }
    }
    Motors.Motor = Motor;
})(Motors || (Motors = {}));
const car1 = new Vehicles.Car('Uno');
const motor1 = new Motors.Motor(2.3);
console.log(car1, motor1);
console.log(car1.motor);
