function Pipes(input){

    let V=input[0];
    let P1=input[1];
    let P2=input[2];
    let H=input[3];

    let FirstPipe=H*P1;//300
    let SecondPipe=H*P2;//360
    let TotalPipes=FirstPipe+SecondPipe;//660

    if(TotalPipes<=V){
        console.log("The pool is "+(((TotalPipes/V)*100).toFixed(2)) +"% full. "+"Pipe 1: "+(((FirstPipe/TotalPipes)*100).toFixed(2))+"%. "+ "Pipe 2: "+(((SecondPipe/TotalPipes)*100).toFixed(2))+"%.");

    }else if (TotalPipes>V){
        console.log("For "+H+" hours the pool overflows with "+((TotalPipes-V).toFixed(2))+" liters");
    }

}

Pipes([100, 100,100,2.5]); 
