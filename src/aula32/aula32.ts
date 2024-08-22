namespace Vehicles{
    export class Car{
        name:string;
        motor:Motors.Motor;
        constructor(name:string){
            this.name = name
            this.motor = new Motors.Motor(100);
        }
    }
}

namespace Motors{
    class Turbo{
        powerfull:number;
        constructor(powerfull:number){
            this.powerfull = powerfull;
        }
    }

    export class Motor{
        power:number;
        constructor(power:number){
            this.power = power;
        }
    }
}


const car1 = new Vehicles.Car('Uno');
const motor1 = new Motors.Motor(2.3);

console.log(car1, motor1);
console.log(car1.motor);
