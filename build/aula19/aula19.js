"use strict";
class Computador3 {
    id;
    nome;
    ram;
    cpu;
    ligado;
    constructor(id, nome, ram, cpu) {
        this.id = id;
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
    upgradeRam(qtde) {
        if (qtde > 0 && qtde <= 1000) {
            this.ram = qtde;
        }
        else {
            console.log(`Quantidade: ${qtde} não é permitida`);
        }
    }
}
const c_7 = new Computador3(1, 'Pc Bão', 64, 10);
const c_8 = new Computador3(2, 'Pc Ruim', 2, 2);
c_7.nome = 'Mudei o nome';
c_7.upgradeRam(-100);
c_7.ligar();
c_8.desligar();
c_7.info();
c_8.info();
