"use strict";
class Computador2 {
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
    info() {
        console.log(`Nome: ${this.nome} RAM: ${this.ram} CPU: ${this.cpu} Ligado: ${this.ligado ? 'Sim' : 'Não'}`);
        console.log('---------------------------------------------');
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
}
const c_5 = new Computador2('Pc Bão', '64gb', 10);
const c_6 = new Computador2('Pc Ruim', '2gb', 2);
c_5.ligar();
c_6.desligar();
c_5.info();
c_6.info();
