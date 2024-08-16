 // Propriedades da classe

    // Public - Esta propriedade pode ser acessada e modificada de qualquer lugar, 
    // tanto dentro quanto fora da classe. É o padrão, então se você não especificar 
    // um modificador de acesso, ele será tratado como 'public'.
 
    // Private - Esta propriedade só pode ser acessada e modificada dentro da própria classe.
    // Ela não pode ser acessada diretamente de fora da classe ou em subclasses (classes que 
    // estendem essa classe). Isso é útil para encapsular e proteger dados internos da classe.

    // Protected - Esta propriedade pode ser acessada dentro da classe e em subclasses 
    // (classes que herdam essa classe), mas não pode ser acessada diretamente fora dessas classes.
    // É útil para quando você deseja que uma propriedade esteja disponível em subclasses, 
    // mas não para qualquer outro código fora da hierarquia de herança.

class Computador3 {
    private id: number;
    public nome: string;
    private ram: number; // Adicionando a propriedade ram
    private cpu: number;
    protected ligado: boolean;

    // Função construtora da classe Computador3:
    constructor(id: number, nome: string, ram: number, cpu: number) {
        this.id = id;
        this.nome = nome;
        this.ram = ram; // Inicializando a propriedade ram
        this.cpu = cpu;
        this.ligado = false;
        console.log('Novo computador criado!');
    }

    info(): void {
        console.log(`Nome: ${this.nome} RAM: ${this.ram} CPU: ${this.cpu} Ligado: ${this.ligado ? 'Sim' : 'Não'}`);
        console.log('---------------------------------------------');
    }

    ligar(): void {
        this.ligado = true;
    }

    desligar(): void {
        this.ligado = false;
    }

    upgradeRam(qtde: number): void {
        if (qtde > 0 && qtde <= 1000) {
            this.ram = qtde;
        } else {
            console.log(`Quantidade: ${qtde} não é permitida`);
        }
    }
}

// Instanciar = Criar o objeto da classe:
const c_7 = new Computador3(1, 'Pc Bão', 64, 10);
const c_8 = new Computador3(2, 'Pc Ruim', 2, 2);

c_7.nome = 'Mudei o nome';
c_7.upgradeRam(-100); // Tentando atualizar a RAM para um valor inválido
c_7.ligar();
c_8.desligar();

c_7.info();
c_8.info();