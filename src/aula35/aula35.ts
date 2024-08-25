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


