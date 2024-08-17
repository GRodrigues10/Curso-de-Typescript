"use strict";
class Conta5 {
    numero;
    titular;
    saldoConta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoConta = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número: ${this.numero}`);
    }
    saldo() {
        return this.saldoConta;
    }
    deposito(valor) {
        if (valor < 0) {
            console.log('Valor Invalido!');
            return;
        }
        this.saldoConta += valor;
    }
    saque(valor) {
        if (valor < 0) {
            console.log('Valor Invalido!');
            return;
        }
        if (valor <= this.saldoConta) {
            this.saldoConta -= valor;
        }
        else {
            console.log(`Saldo Insuficiente!`);
        }
    }
}
class ContaPF5 extends Conta5 {
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
        console.log(`CPF: ${this.cpf}`);
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
    saque(valor) {
        if (valor > 1000) {
            console.log('Valor de saque muito elevado!');
        }
        else {
            super.saque(valor);
        }
    }
}
class ContaPJ5 extends Conta5 {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PJ Criada: ${titular}`);
    }
    info() {
        console.log('Tipo: Pessoa Jurídica');
        super.info();
        console.log(`CNPJ: ${this.cnpj}`);
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
    saque(valor) {
        if (valor > 10000) {
            console.log('Valor de saque muito elevado!');
        }
        else {
            super.saque(valor);
        }
    }
}
const _c9 = new ContaPF5(111, 'Gabriel');
const _c10 = new ContaPJ5(222, 'Nightfall Decay');
_c9.deposito(100);
_c9.deposito(170);
_c9.deposito(300);
_c10.deposito(4500);
_c10.deposito(2000);
console.log(`Saldo ContaPF5: ${_c9.saldo()}`);
console.log(`Saldo ContaPJ5: ${_c10.saldo()}`);
_c9.saque(200);
_c10.saque(200);
console.log(`Saldo ContaPF5 após saque: ${_c9.saldo()}`);
console.log(`Saldo ContaPJ5 após saque: ${_c10.saldo()}`);
