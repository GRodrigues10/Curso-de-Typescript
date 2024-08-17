class Conta3{
    protected numero:number;
    protected titular:string;
    constructor(titular:string){
        this.numero = this.gerarNumeroConta();        
        this.titular = titular;
    }

    private gerarNumeroConta():number{
        return Math.floor((Math.random()*100000)) + 1;
    }
    info(){
        console.log(`Titular:${this.titular}`);
        console.log(`Número:${this.numero}`);

    }

}

class ContaPF3 extends Conta3{
    
    cpf:number;
    constructor(cpf:number, titular:string){
        super(titular);
        this.cpf = cpf;
        console.log(`Conta PF Criada: ${titular}`)
    }
}

class ContaPJ3 extends Conta3{
    cnpj:number;
    constructor(cnpj:number, titular:string){
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PJ Criada: ${titular}`)

    }
}

 const _c5 = new ContaPF3(111,  'Gabriel');
 const _c6 = new ContaPJ3(222, 'Nightfall Decay');

//  console.log(_c5);
//  console.log(_c6);
_c5.info();
_c6.info();



