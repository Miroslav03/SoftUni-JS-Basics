function Combination(input){

    let firstNum=Number(input[0]);
    let lastNum=Number(input[1]);
    let magicNum=Number(input[2]);
    let combination=0;
    let flag=false
    for(i=firstNum;i<=lastNum;i++){
        for(j=firstNum;j<=lastNum;j++){
            combination++
            if((i+j)==magicNum){
                flag=true
                break;
            }
        }
        if(flag==true){
            break;
        }

    }

    if((i+j)==magicNum){
        console.log("Combination N:"+combination+ " ("+i+ " + "+ j+ " = " +magicNum+")");
    }else{
        console.log(combination +" combinations - neither equals "+magicNum);
    }


}
Combination(["23",
"24",
"20"])
