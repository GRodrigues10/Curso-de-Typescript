let nvalor:number;
let svalor:string;
let uvalor:unknown;

uvalor = 10;
svalor = '20';

// Convertendo string para number
nvalor = Number.parseInt(svalor);
console.log(typeof(nvalor))

// Convertendo number para string
svalor = nvalor.toString();
console.log(typeof(svalor))
// nvalor = <number><unknown>svalor

// // nvalor =<number>uvalor;
// svalor = <string>uvalor;

// console.log(typeof(uvalor));
// console.log(uvalor);
// console.log(typeof(nvalor));
// console.log(svalor);
// console.log(typeof(svalor));
// console.log(nvalor);
