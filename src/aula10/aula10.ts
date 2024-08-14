// NULL:NULO - UNDEFINED:INDEFINIDO - UNKNOWN:DESCONHECIDO.

// Null - É inicianalizada e possui valor null. Tipo Nulo.
let vnome:string|null;
vnome = 'Gabriel';
console.log(vnome);

// Undefined - Não é inicianalizada. Tipo Indefinido.
let vnome2:any;
console.log(vnome2);

// Unknown - Pode ou não ser inicianalizada. Só pode ser atribúido em tipo unknown ou any

let vnome3:unknown=10;
console.log(vnome3);