let números:number[] = [1, 4, 5, 67, 8]; //Opção mais simples.
// let números2:Array<number> = [1, 4, 5, 67, 8]; //Outra forma de fazer.
// let números3:(number)[] = [1, 4, 5, 67, 8]; //Outra forma de fazer.


números.pop();
números.unshift(10);
números.shift();


console.log(números);
console.log(números.length);





let números_ro:ReadonlyArray<number>=[3, 5, 4, 6];//Array só para leitura. Não é possível altera-lo!

console.log(números_ro);











