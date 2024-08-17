class Conta4{
    // Public - Acessado de qualquer lugar.
    // Private - Acessado somente na sua própria classe.
    // Protected - Acessado somente na sua própria classe e nas classes filhas.

    protected numero:number;
    protected titular:string;
    private saldoConta:number;
    constructor(titular:string){
        this.numero = this.gerarNumeroConta();        
        this.titular = titular;
        this.saldoConta = 0;
    }

    private gerarNumeroConta():number{
        return Math.floor((Math.random()*100000)) + 1;
    }
    protected info(){
        console.log(`Titular:${this.titular}`);
        console.log(`Número:${this.numero}`);

    }

    public saldo():number{
        return this.saldoConta;
    }
    protected deposito(valor:number){
        this.saldoConta+=valor;
    }
    protected saque(valor:number){
        if(valor>=this.saldoConta){
            this.saldoConta-=valor;
        }else{
            console.log(`Saldo Insuficiente!`);
        }
        
    }

   

}

class ContaPF4 extends Conta4{
    
    cpf:number;
    constructor(cpf:number, titular:string){
        super(titular);
        this.cpf = cpf;
        console.log(`Conta PF Criada: ${titular}`)
    }
    info(){
        console.log('\n')
        console.log('Tipo: Pessoa Física');
        super.info();
        console.log(`CPF...:${this.cpf}`);
        console.log('------------------------------------');
    }
    public deposito(valor:number){
        if(valor > 1000){
            console.log('Valor de depósito muito elevado!')
        }else{
            super.deposito(valor)
        }
    }
     
}

class ContaPJ4 extends Conta4{
    cnpj:number;
    constructor(cnpj:number, titular:string){
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PJ Criada: ${titular}`)

    }
    info(){
        console.log('Tipo: Pessoa Jurídica');
        super.info();
        console.log(`CNPJ...:${this.cnpj}`);
        console.log('------------------------------------')
       
    }
    public deposito(valor:number){
        if(valor > 10000){
            console.log('Valor de depósito muito elevado!')
        }else{
            super.deposito(valor)
        }
    }
}

 const _c7 = new ContaPF4(111,  'Gabriel');
 const _c8 = new ContaPJ4(222, 'Nightfall Decay');

 _c7.deposito(100)
 _c7.deposito(170)
 _c7.deposito(300)

 _c8.deposito(4500)
 _c8.deposito(2000)

console.log(_c7.saldo());
console.log(_c8.saldo());

 
// _c7.info();
// _c8.info();




