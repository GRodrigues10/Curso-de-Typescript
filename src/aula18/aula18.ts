class Computador2{
    nome:string;
    ram:string;
    cpu:number;
    ligado:boolean;

    // Função construtora da classe Computer2:
    constructor(nome:string, ram:string,cpu:number){
        this.nome=nome;
        this.ram=ram;
        this.cpu=cpu;
        this.ligado=false
        console.log('Novo computador criado!');
    }

    info():void{
        console.log(`Nome: ${this.nome} RAM: ${this.ram} CPU: ${this.cpu} Ligado: ${this.ligado?'Sim':'Não'}`);
        console.log('---------------------------------------------');

    }

    ligar():void{
        this.ligado = true;
    }

    desligar():void{
        this.ligado = false;
    }
}

// Instanciar = Criar o objeto da classe:
const c_5 = new Computador2('Pc Bão', '64gb', 10);
const c_6 = new Computador2('Pc Ruim', '2gb', 2);

c_5.ligar();
c_6.desligar();

c_5.info();
c_6.info();


// console.log(c_5.nome);
// console.log(c_6.nome);