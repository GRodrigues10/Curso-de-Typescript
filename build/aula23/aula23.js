"use strict";
class Conta4 {
    numero;
    titular;
    saldoConta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoConta = 0;
    }
    gerarNumeroConta() {
        return Math.floor((Math.random() * 100000)) + 1;
    }
    info() {
        console.log(`Titular:${this.titular}`);
        console.log(`Número:${this.numero}`);
    }
    saldo() {
        return this.saldoConta;
    }
    deposito(valor) {
        this.saldoConta += valor;
    }
    saque(valor) {
        if (valor >= this.saldoConta) {
            this.saldoConta -= valor;
        }
        else {
            console.log(`Saldo Insuficiente!`);
        }
    }
}
class ContaPF4 extends Conta4 {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
        console.log(`Conta PF Criada: ${titular}`);
    }
    info() {
        console.log('\n');
        console.log('Tipo: Pessoa Física');
        super.info();
        console.log(`CPF...:${this.cpf}`);
        console.log('------------------------------------');
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log('Valor de depósito muito elevado!');
        }
        else {
            super.deposito(valor);
        }
    }
}
class ContaPJ4 extends Conta4 {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PJ Criada: ${titular}`);
    }
    info() {
        console.log('Tipo: Pessoa Jurídica');
        super.info();
        console.log(`CNPJ...:${this.cnpj}`);
        console.log('------------------------------------');
    }
    deposito(valor) {
        if (valor > 10000) {
            console.log('Valor de depósito muito elevado!');
        }
        else {
            super.deposito(valor);
        }
    }
}
const _c7 = new ContaPF4(111, 'Gabriel');
const _c8 = new ContaPJ4(222, 'Nightfall Decay');
_c7.deposito(100);
_c7.deposito(170);
_c7.deposito(300);
_c8.deposito(4500);
_c8.deposito(2000);
console.log(_c7.saldo());
console.log(_c8.saldo());
