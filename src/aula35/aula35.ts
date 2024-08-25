// Desestruturação:

// let array = [10, 20, 30, 40];

// let [aa, bb, cc, dd]=array;

// console.log(aa);
// console.log(bb);
// console.log(cc);
// console.log(dd);

const obj = {
    cor1: 'Verde',
    cor2: 'Amarelo',
    cor3: 'Azul',
    cor4: 'Vermelho'
}

let {cor1, cor2, cor3, cor4} = obj;

let [nu1, nu2=0,...nu3] = [10, 20, 30, 40, 50, 60];

const _cores = () => {
    return ['Verde', 'Amarelo', 'Azul', 'Vermelho'];
}

let [c01, c02, c03, c04] = _cores();

let texto = 'Curso de Typescript';

let [...t] = texto.split(' ');
let [p1, p2, p3] = texto.split(' ');

console.log(nu1, nu2, nu3);
console.log(c01, c02, c03, c04);
console.log(t)

console.log(p1);
console.log(p2);
console.log(p3);


