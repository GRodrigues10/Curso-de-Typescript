class Computer{
    nome:string='';
    ram:string='';
    cpu:number=0;
    ligado:boolean=true;
}

const c_1 = new Computer();
const c_2 = new Computer();

c_1.nome = 'PC Bão'
c_2.nome = 'PC Ruim'


console.log(c_1.nome);
console.log(c_2.nome);