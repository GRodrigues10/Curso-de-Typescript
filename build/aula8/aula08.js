"use strict";
let dados = {
    nome: 'Gabriel',
    idade: 22,
    trabalhando: false,
    ola: () => {
        console.log('Olá você!');
    },
    info: (p) => {
        console.log(p);
    }
};
dados.nome = 'Duke';
dados.ola();
dados.info('função com parâmetro');
console.log(dados.nome);
console.log(typeof (dados));
