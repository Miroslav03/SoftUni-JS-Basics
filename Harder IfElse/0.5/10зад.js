function InValid(input){


    let Num=Number(input[0]);
    let isValid=((Num>=100&&Num<=200)||Num==0);

    if(!isValid){
        console.log("invalid");
    }


 }
InValid(["0"])