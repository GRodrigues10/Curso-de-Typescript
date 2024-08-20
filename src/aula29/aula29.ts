// Generics - Permiti criar uma variável que pode ser utilizada com vários tipos de valor.
function f_teste<T,U>(v:T, r:U):U{
    return r
}

console.log(f_teste<string, number>('3', 4))
console.log(f_teste<number, string>(3, '5'))

class C_teste<C>{

    public valor:C;
    constructor(valor:C){
        this.valor = valor;
    }

}

const ct1 = new C_teste('Testando Generics em classes');
console.log(ct1)