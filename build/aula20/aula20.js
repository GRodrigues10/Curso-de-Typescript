"use strict";
class Conta {
    numero;
    titular;
    constructor(numero, titular) {
        this.numero = numero;
        this.titular = titular;
    }
}
class ContaPF extends Conta {
}
class ContaPJ extends Conta {
}
const _c1 = new ContaPF(202312486, 'Gabriel');
const _c2 = new ContaPJ(302434463, 'Gabriel');
console.log(_c1);
console.log(_c2);
