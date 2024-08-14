"use strict";
function soma(n1 = 0, n2 = 0) {
    return n1 + n2;
}
console.log(soma());
function novoUser(user, password, nome) {
    let dados = { user, password, nome };
    console.log(`User:${user}`);
    console.log(`Password:${password}`);
    console.log(`nome:${nome}`);
    console.log(dados);
}
novoUser('gBZIN', 'SENHA');
