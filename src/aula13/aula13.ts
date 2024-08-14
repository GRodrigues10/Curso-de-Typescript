function soma(n1:number=0, n2:number=0):number{
    return n1 + n2;
}

console.log(soma());

function novoUser(user:string, password:string, nome?:string):void{
    let dados={user,password,nome};
    console.log(`User:${user}`);
    console.log(`Password:${password}`);
    console.log(`nome:${nome}`);
    console.log(dados);
}


novoUser('gBZIN', 'SENHA');