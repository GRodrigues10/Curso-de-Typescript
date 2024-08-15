function fsoma(...n:number[]):number{

    let s:number=0;

    // n.forEach((e)=>{
    //     s+=e;
    // })
    for(let en of n){
        s+=en
    }
    return s
}

console.log(fsoma(3,4,7,10,3,100))