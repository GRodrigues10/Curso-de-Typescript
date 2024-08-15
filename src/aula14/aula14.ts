teste();

// Functions podem ser chamadas depois ou antes
function teste():void{
    console.log('Teste!');
}


// Arrow Functions tem que ser chamadas depois
const teste2=():void=>{
    console.log('Teste com arrow function');
}

teste2();

const fsoma2 = (n1:number, n2:number):number=>{
    return n1 + n2;
}

console.log(fsoma2(3,5));


const fsoma3 = (n:number[]):number=>{
    let s:number=0;
    n.forEach((e)=>{
        s+=e;
    })

    return s;
}

console.log(fsoma3([7,8,9]));
