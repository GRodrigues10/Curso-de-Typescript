"use strict";
teste();
function teste() {
    console.log('Teste!');
}
const teste2 = () => {
    console.log('Teste com arrow function');
};
teste2();
const fsoma2 = (n1, n2) => {
    return n1 + n2;
};
console.log(fsoma2(3, 5));
const fsoma3 = (n) => {
    let s = 0;
    n.forEach((e) => {
        s += e;
    });
    return s;
};
console.log(fsoma3([7, 8, 9]));
