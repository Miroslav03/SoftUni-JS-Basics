function Balance(input){

    let Total=0
    let index=0

    while(input[index]!="NoMoreMoney"){
        increse=Number(input[index])
        if(increse<=0){
            console.log("Invalid operation!");
            break;
        }
        console.log("Increase: "+ (increse).toFixed(2));
        index++
    
        Total+=increse
    }
    console.log("Total: "+Total.toFixed(2));
} 
Balance(["120",
"45.55",
"-150"])

 