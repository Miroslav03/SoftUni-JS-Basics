function Moving(input){

    let length=Number(input[0]);
    let width=Number(input[1]);
    let higth=Number(input[2]);
    let index=3
    let totalSpace=length*width*higth;//100

    let parts=input[index]
    let part=Number(input[index])

    while(parts!="Done"){

        totalSpace=totalSpace-part
        index++
        part=Number(input[index])
        parts=input[index]
        if(totalSpace<0){
            break;
        }
    }

    
    if(totalSpace<=0){
        console.log("No more free space! You need " +totalSpace*(-1) +" Cubic meters more.");
    }else if(totalSpace>0){
        console.log(totalSpace+ " Cubic meters left.");
    }
}
Moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])
