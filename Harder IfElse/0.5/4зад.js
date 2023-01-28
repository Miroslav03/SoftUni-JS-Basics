function demo(input){

    let age=Number(input[0]);
    let Gender=input[1];

    if(Gender=="f"){
        if(age>=16){
            console.log("Ms.");
        }else if (age<16){
            console.log("Miss");
        }

    }else if (Gender=="m"){
        if(age>=16){
            console.log("Mr.");
        }else if (age<16){
            console.log("Master");
        }
    }






}
demo(["12","f"])