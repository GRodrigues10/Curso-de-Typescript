"use strict";
class Conta3 {
    numero;
    titular;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }
    gerarNumeroConta() {
        return Math.floor((Math.random() * 100000)) + 1;
    }
    info() {
        console.log(`Titular:${this.titular}`);
        console.log(`Número:${this.numero}`);
    }
}
class ContaPF3 extends Conta3 {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
        console.log(`Conta PF Criada: ${titular}`);
    }
}
class ContaPJ3 extends Conta3 {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PJ Criada: ${titular}`);
    }
}
const _c5 = new ContaPF3(111, 'Gabriel');
const _c6 = new ContaPJ3(222, 'Nightfall Decay');
_c5.info();
_c6.info();
