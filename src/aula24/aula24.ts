class Conta5 {
    protected numero: number;
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

    public saldo(): number {
        return this.saldoConta;
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

class ContaPF5 extends Conta5 {
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

class ContaPJ5 extends Conta5 {
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

const _c9 = new ContaPF5(111, 'Gabriel');
const _c10 = new ContaPJ5(222, 'Nightfall Decay');

_c9.deposito(100);
_c9.deposito(170);
_c9.deposito(300);

_c10.deposito(4500);
_c10.deposito(2000);

console.log(`Saldo ContaPF5: ${_c9.saldo()}`);
console.log(`Saldo ContaPJ5: ${_c10.saldo()}`);

_c9.saque(200);
_c10.saque(200);

console.log(`Saldo ContaPF5 após saque: ${_c9.saldo()}`);
console.log(`Saldo ContaPJ5 após saque: ${_c10.saldo()}`);