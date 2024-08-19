abstract class Conta7 {// Uma classe abstrata só serve de base para classes filhas.
    private readonly numero: number;// É privado e é apenas para leitura.
    protected titular: string;
    private saldoConta: number;

    constructor(titular: string) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoConta = 0;
    }

    private gerarNumeroConta(): number {
        return Math.floor(Math.random() * 100000) + 1;
    }

    protected info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número: ${this.numero}`);
    }

    get saldo(): number {// GETTER.
        return this.saldoConta;
    }

    set saldo(saldoConta:number){//SETTER NÃO RETORNA NADA.
        this.saldoConta = saldoConta;
        

    }

    protected deposito(valor: number) {
        if (valor < 0) {
            console.log('Valor Invalido!');
            return;
        }
        this.saldoConta += valor;
    }

    protected saque(valor: number) {
        if (valor < 0) {
            console.log('Valor Invalido!');
            return;
        }
        if (valor <= this.saldoConta) {
            this.saldoConta -= valor;
        } else {
            console.log(`Saldo Insuficiente!`);
        }
    }
}

class ContaPF7 extends Conta7 {
    cpf: number;

    constructor(cpf: number, titular: string) {
        super(titular);
        this.cpf = cpf;
        console.log(`Conta PF Criada: ${titular}`);
    }

    info() {
        console.log('\n');
        console.log('Tipo: Pessoa Física');
        super.info();
        console.log(`CPF: ${this.cpf}`);
        console.log('------------------------------------');
    }

    public deposito(valor: number) {
        if (valor > 1000) {
            console.log('Valor de depósito muito elevado!');
        } else {
            super.deposito(valor);
        }
    }

    public saque(valor: number) {
        if (valor > 1000) {
            console.log('Valor de saque muito elevado!');
        } else {
            super.saque(valor);
        }
    }
}

class ContaPJ7 extends Conta7 {
    cnpj: number;

    constructor(cnpj: number, titular: string) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PJ Criada: ${titular}`);
    }

    info() {
        console.log('Tipo: Pessoa Jurídica');
        super.info();
        console.log(`CNPJ: ${this.cnpj}`);
        console.log('------------------------------------');
    }

    public deposito(valor: number) {
        if (valor > 10000) {
            console.log('Valor de depósito muito elevado!');
        } else {
            super.deposito(valor);
        }
    }

    public saque(valor: number) {
        if (valor > 10000) {
            console.log('Valor de saque muito elevado!');
        } else {
            super.saque(valor);
        }
    }
}

const _c13 = new ContaPF7(111, 'Gabriel');
const _c14 = new ContaPJ7(222, 'Nightfall Decay');
// const _c15 = new Conta7('Duke')

_c13.deposito(100);
_c13.deposito(170);
_c13.deposito(300);

_c14.deposito(4500);
_c14.deposito(2000);

console.log(`Saldo ContaPF5: ${_c13.saldo}`);
console.log(`Saldo ContaPJ5: ${_c14.saldo}`);

_c14.saque(200);
_c14.saque(200);
_c14.saldo = 250;// Alterando o valor do saldo com o getter e o setter da conta PJ.

console.log(`Saldo ContaPF6 após saque: ${_c13.saldo}`);
console.log(`Saldo ContaPJ6 após saque: ${_c14.saldo}`);