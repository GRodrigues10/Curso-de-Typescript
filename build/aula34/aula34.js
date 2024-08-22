"use strict";
var Vehicles;
(function (Vehicles) {
    let Cores;
    (function (Cores) {
        Cores["Azul"] = "Azul";
        Cores["Branco"] = "Branco";
        Cores["Preto"] = "Preto";
        Cores["Vermelho"] = "Vermelho";
    })(Cores = Vehicles.Cores || (Vehicles.Cores = {}));
    class Car3 {
        name;
        motor;
        cor;
        constructor(name, motor, cor) {
            this.name = name;
            this.motor = motor;
            this.cor = cor;
        }
        ligar() {
            this.motor.liga = true;
        }
        desligar() {
            this.motor.liga = false;
        }
        get minhaCor() {
            return this.cor;
        }
        get meuNome() {
            return this.name;
        }
        get estouLigado() {
            return this.motor.liga ? 'Sim' : 'Não';
        }
        get minhaPotencia() {
            return this.motor.powerfull;
        }
    }
    class CarroEsportivo extends Car3 {
        constructor(nome, cor) {
            super(nome, new Motors3.Motor3(6, 300, new Motors3.Turbo(100)), cor);
        }
    }
    Vehicles.CarroEsportivo = CarroEsportivo;
})(Vehicles || (Vehicles = {}));
var Motors3;
(function (Motors3) {
    class Turbo {
        powerfull;
        constructor(powerfull) {
            this.powerfull = powerfull;
        }
        get potencia() {
            return this.powerfull;
        }
    }
    Motors3.Turbo = Turbo;
    class Motor3 {
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
    Motors3.Motor3 = Motor3;
})(Motors3 || (Motors3 = {}));
const meuCarro = new Vehicles.CarroEsportivo('Fusca', Vehicles.Cores.Azul);
console.log(meuCarro.meuNome);
console.log(meuCarro.minhaCor);
console.log(meuCarro.estouLigado);
console.log(meuCarro.minhaPotencia);
