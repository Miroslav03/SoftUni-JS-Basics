function Cinema(input){

    let Premiere=12.00;
    let Normal=7.50;
    let Discount=5.00;
    
    let type=input[0];
    let r=Number(input[1]);
    let c=Number(input[2]);

    if(type=="Premiere"){
        console.log((r*c*Premiere).toFixed(2)+" leva");
    }else if(type=="Normal"){
        console.log((r*c*Normal).toFixed(2)+" leva");
    }else if(type=="Discount"){
        console.log((r*c*Discount).toFixed(2)+" leva");
    }



}
Cinema(["Normal","21","13"])
