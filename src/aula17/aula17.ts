class Computador{
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
}

// Instanciar = Criar o objeto da classe:
const c_3 = new Computador('Pc Bão', '64gb', 10);
const c_4 = new Computador('Pc Ruim', '2gb', 2);


console.log(c_3.nome);
console.log(c_4.nome);