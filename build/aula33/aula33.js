"use strict";
var Vehicles;
(function (Vehicles) {
    class Car2 {
        name;
        motor;
        constructor(name) {
            this.name = name;
            this.motor = new Motors2.Motor2(3, 100);
        }
    }
    Vehicles.Car2 = Car2;
})(Vehicles || (Vehicles = {}));
var Motors2;
(function (Motors2) {
    class Turbo {
        powerfull;
        constructor(powerfull) {
            this.powerfull = powerfull;
        }
        get potencia() {
            return this.powerfull;
        }
    }
    class Motor2 {
        ligado;
        cilindros;
        power;
        constructor(cilindros, power, turbo) {
            this.ligado = false;
            this.cilindros = cilindros;
            this.power = power + (turbo ? turbo.potencia : 0);
        }
        set liga(ligado) {
            this.ligado = ligado;
        }
        get liga() {
            return this.ligado;
        }
        get powerfull() {
            return this.power;
        }
    }
    Motors2.Motor2 = Motor2;
})(Motors2 || (Motors2 = {}));
