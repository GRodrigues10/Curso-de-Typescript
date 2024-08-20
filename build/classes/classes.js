"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Objeto = exports.Pessoa = void 0;
const coisas = ['Corda', 'Pilha', 'Lâmpada', 'Chave'];
class Pessoa {
    nome;
    altura;
    constructor(nome, altura) {
        this.nome = nome;
        this.altura = altura;
    }
}
exports.Pessoa = Pessoa;
class Objeto {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
exports.Objeto = Objeto;
exports.default = coisas;
