namespace Vehicles{
    export class Car2{
        name:string;
        motor:Motors2.Motor2;
        constructor(name:string){
            this.name = name
            this.motor = new Motors2.Motor2(3, 100);
        }
    }
}

namespace Motors2{
    class Turbo{
        private powerfull:number;
        constructor(powerfull:number){
            this.powerfull = powerfull;
        }
        get potencia(){
            return this.powerfull
        }
    }

    export class Motor2{
        private ligado:boolean;
        private cilindros:number;
        private power:number;
        constructor(cilindros:number, power:number, turbo?:Turbo){
            this.ligado = false;
            this.cilindros = cilindros;
            this.power = power + (turbo?turbo.potencia:0);
        }
        set liga(ligado:boolean){
            this.ligado = ligado;
        }

        get liga(){
            return this.ligado
        }

        get powerfull(){
            return this.power;
        }

    
    }
}


