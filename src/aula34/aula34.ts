namespace Vehicles {
    // Exportando a enum Cores para que ela possa ser usada fora do namespace Vehicles
    export enum Cores { 
        Azul = 'Azul', 
        Branco = 'Branco', 
        Preto = 'Preto', 
        Vermelho = 'Vermelho' 
    }

    abstract class Car3 {
        private name: string;
        private motor: Motors3.Motor3;
        private cor: Cores;

        constructor(name: string, motor: Motors3.Motor3, cor: Cores) {
            this.name = name;
            this.motor = motor;
            this.cor = cor;
        }

        public ligar() {
            this.motor.liga = true;
        }

        public desligar() {
            this.motor.liga = false;
        }

        get minhaCor(): string {
            return this.cor; // Retorna o valor da cor como string
        }

        get meuNome(): string {
            return this.name;
        }

        get estouLigado(): string {
            return this.motor.liga ? 'Sim' : 'Não';
        }

        get minhaPotencia(): number {
            return this.motor.powerfull;
        }
    }

    export class CarroEsportivo extends Car3 {
        constructor(nome: string, cor: Cores) {
            super(nome, new Motors3.Motor3(6, 300, new Motors3.Turbo(100)), cor);
        }
    }
}

namespace Motors3 {
    export class Turbo {
        private powerfull: number;

        constructor(powerfull: number) {
            this.powerfull = powerfull;
        }

        get potencia(): number {
            return this.powerfull;
        }
    }

    export class Motor3 {
        private ligado: boolean;
        private cilindros: number;
        private power: number;

        constructor(cilindros: number, power: number, turbo?: Turbo) {
            this.ligado = false;
            this.cilindros = cilindros;
            this.power = power + (turbo ? turbo.potencia : 0);
        }

        set liga(ligado: boolean) {
            this.ligado = ligado;
        }

        get liga(): boolean {
            return this.ligado;
        }

        get powerfull(): number {
            return this.power;
        }
    }
}

// Exemplo de uso:
const meuCarro = new Vehicles.CarroEsportivo('Fusca', Vehicles.Cores.Azul);
console.log(meuCarro.meuNome); // Fusca
console.log(meuCarro.minhaCor); // Azul
console.log(meuCarro.estouLigado); // Não
console.log(meuCarro.minhaPotencia); // 400