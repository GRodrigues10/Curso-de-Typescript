"use strict";
function f_teste(v, r) {
    return r;
}
console.log(f_teste('3', 4));
console.log(f_teste(3, '5'));
class C_teste {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
}
const ct1 = new C_teste('Testando Generics em classes');
console.log(ct1);
