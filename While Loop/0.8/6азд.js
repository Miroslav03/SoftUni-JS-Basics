function cake(input){

    let length=Number(input[0]);
    let width=Number(input[1]);
    let index=2
    let totalParts=length*width;//100

    let parts=input[index]
    let part=Number(input[index])

    while(parts!="STOP"){

        totalParts=totalParts-part
        index++
        part=Number(input[index])
        parts=input[index]
        if(totalParts<0){
            break;
        }
    }

    
    if(totalParts<=0){
        console.log("No more cake left! You need " +totalParts*(-1) +" pieces more.");
    }else if(totalParts>0){
        console.log(totalParts+ " pieces are left.");
    }
}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])
