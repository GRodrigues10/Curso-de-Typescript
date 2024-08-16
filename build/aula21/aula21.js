"use strict";
class Conta2 {
    numero;
    titular;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }
    gerarNumeroConta() {
        return Math.floor((Math.random() * 100000)) + 1;
    }
}
class ContaPF2 extends Conta2 {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
}
class ContaPJ2 extends Conta2 {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
}
const _c3 = new ContaPF2(111, 'Gabriel');
const _c4 = new ContaPJ2(222, 'Gabriel');
console.log(_c3);
console.log(_c4);
