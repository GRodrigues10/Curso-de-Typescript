interface _curso{
    titulo:string;
    desc:string;
    iniciarCurso?(teste:string):void;
}

interface cursoProg extends _curso{
    aulas:number;
    alunos?:number;
    requisito?:string;
}

interface cursoIngles extends _curso{
    aulas:number;
    alunos?:number;
}


let _curso1:cursoProg;
let _curso2:cursoIngles;
let _curso3:cursoProg;


_curso1 = {
    titulo:'Curso de Typescript',
    desc:'Um curso completo de Typescript.',
    aulas:37,
    alunos:50,
        
    
}

_curso2 = {
    titulo:'Curso de ReactJS',
    desc:'Um curso completo de ReactJS.',
    aulas:100,
    alunos:80
}

_curso3 = {
    titulo:'Curso de Python',
    desc:'Um curso completo de Python.',
    aulas:70,
}


console.log(_curso1)
console.log(_curso2)
console.log(_curso3)