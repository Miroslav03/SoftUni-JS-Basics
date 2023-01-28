function Operations(input){

    let N1=Number(input[0]);
    let N2=Number(input[1]);
    let symbol=input[2];

    let result=0;

    if(symbol=="+"){
        let result=N1+N2;
        if(result%2==0){
            console.log(N1 +" + "+N2+" = "+(result)+" - even");
        }else if(result%2!=0){
            console.log(N1 +" + "+N2+" = "+(result)+" - odd");
        }
    }else if(symbol=="-"){
        let result=N1-N2;
        if(result%2==0){
            console.log(N1 +" - "+N2+" = "+(result)+" - even");
        }else if(result%2!=0){
            console.log(N1 +" - "+N2+" = "+(result)+" - odd");
        }

    }else if(symbol=="*"){
        let result=N1*N2;
        if(result%2==0){
            console.log(N1 +" * "+N2+" = "+(result)+" - even");
        }else if(result%2!=0){
            console.log(N1 +" * "+N2+" = "+(result)+" - odd");
        }
    }else if(symbol=="/"){
        let result=N1/N2
        if(N2==0){
            console.log("Cannot divide "+N1+ " by zero");
        }else if(N2!=0){
            console.log(N1 +" / "+N2+" = "+(result.toFixed(2)))
        }
    }else if(symbol=="%"){
        let result=N1%N2
        if(N2==0){
            console.log("Cannot divide "+N1+ " by zero");
        }else if(N2!=0){
            console.log(N1 +" % "+N2+" = "+(result))
        }
    }



}
Operations(["10","7","%"])