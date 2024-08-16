"use strict";
class Computador {
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
        console.log('Novo computador criado!');
    }
}
const c_3 = new Computador('Pc Bão', '64gb', 10);
const c_4 = new Computador('Pc Ruim', '2gb', 2);
console.log(c_3.nome);
console.log(c_4.nome);
