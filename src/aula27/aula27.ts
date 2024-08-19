interface curso{
    titulo:string;
    desc:string;
    aulas:number;
    alunos?:number;
}

let curso1:curso;
let curso2:curso;
let curso3:curso;
 

curso1 = {
    titulo:'Curso de Typescript',
    desc:'Um curso completo de Typescript.',
    aulas:37,
    alunos:50
}

curso2 = {
    titulo:'Curso de ReactJS',
    desc:'Um curso completo de ReactJS.',
    aulas:100,
    alunos:80
}

curso3 = {
    titulo:'Curso de Python',
    desc:'Um curso completo de Python.',
    aulas:70,
}


console.log(curso1)
console.log(curso2)
console.log(curso3)