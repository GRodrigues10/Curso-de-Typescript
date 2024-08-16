class Conta2{
    public numero:number;
    public titular:string;
    constructor(titular:string){
        this.numero = this.gerarNumeroConta();        
        this.titular = titular;
    }

    gerarNumeroConta():number{
        return Math.floor((Math.random()*100000)) + 1;
    }

}

class ContaPF2 extends Conta2{
    
    cpf:number;
    constructor(cpf:number, titular:string){
        super(titular);
        this.cpf = cpf
    }
}

class ContaPJ2 extends Conta2{
    cnpj:number;
    constructor(cnpj:number, titular:string){
        super(titular);
        this.cnpj = cnpj;

    }
}

 const _c3 = new ContaPF2(111,  'Gabriel');
 const _c4 = new ContaPJ2(222, 'Gabriel');

 console.log(_c3);
 console.log(_c4);


