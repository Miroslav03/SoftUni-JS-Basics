function Fuel2(input){

    let Petrol=2.22;
    let Diesel=2.33;
    let Gas=0.93;

    let UsedFuel=input[0];
    let UsedLiters=input[1];
    let Clubcard=input[2];

    if(UsedFuel=="Gas"&&Clubcard=="Yes"){
        let Discount=Gas-0.08;
        if(UsedLiters>20&&UsedLiters<=25){
            console.log((UsedLiters*Discount)-(0.08*(UsedLiters*Discount)).toFixed(2)+" lv.");
        }else if(UsedLiters>25){
            console.log(((UsedLiters*Discount)-(0.1*(UsedLiters*Discount))).toFixed(2)+" lv.");
        }else if(UsedLiters<20){
            console.log((UsedLiters*Discount).toFixed(2)+" lv.");
        }

    }else if(UsedFuel=="Gas"&&Clubcard=="No"){
        if(UsedLiters>20&&UsedLiters<=25){
            console.log(((UsedLiters*Gas)-(0.08*(UsedLiters*Gas))).toFixed(2)+" lv.");
        }else if(UsedLiters>25){
            console.log(((UsedLiters*Gas)-(0.1*(UsedLiters*Gas))).toFixed(2)+" lv.");
        }else if(UsedLiters<20){
            console.log(((UsedLiters*Gas)).toFixed(2)+" lv.")
        }
    }
    
    if(UsedFuel=="Gasoline"&&Clubcard=="Yes"){
        let Discount=Petrol-0.18;
        if(UsedLiters>20&&UsedLiters<=25){
            console.log((UsedLiters*Discount)-(0.08*(UsedLiters*Discount)).toFixed(2)+" lv.");
        }else if(UsedLiters>25){
            console.log(((UsedLiters*Discount)-(0.1*(UsedLiters*Discount))).toFixed(2)+" lv.");
        }else if(UsedLiters<20){
            console.log((UsedLiters*Discount).toFixed(2)+" lv.");
        }
    }else if(UsedFuel=="Gasoline"&&Clubcard=="No"){
        if(UsedLiters>20&&UsedLiters<=25){
            console.log(((UsedLiters*Petrol)-(0.08*(UsedLiters*Petrol))).toFixed(2)+" lv.");
        }else if(UsedLiters>25){
            console.log(((UsedLiters*Petrol)-(0.1*(UsedLiters*Petrol))).toFixed(2)+" lv.");
        }else if(UsedLiters<20){
            console.log(((UsedLiters*Petrol)).toFixed(2)+" lv.")
        }
    }

    if(UsedFuel=="Diesel"&&Clubcard=="Yes"){
        let Discount=Diesel-0.12;
        if(UsedLiters>20&&UsedLiters<=25){
            console.log((UsedLiters*Discount)-(0.08*(UsedLiters*Discount)).toFixed(2)+" lv.");
        }else if(UsedLiters>25){
            console.log(((UsedLiters*Discount)-(0.1*(UsedLiters*Discount))).toFixed(2)+" lv.");
        }else if(UsedLiters<20){
            console.log((UsedLiters*Discount).toFixed(2)+" lv.");
        }
    }else if(UsedFuel=="Diesel"&&Clubcard=="No"){
        if(UsedLiters>20&&UsedLiters<=25){
            console.log(((UsedLiters*Diesel)-(0.08*(UsedLiters*Diesel))).toFixed(2)+" lv.");
        }else if(UsedLiters>25){
            console.log(((UsedLiters*Diesel)-(0.1*(UsedLiters*Diesel))).toFixed(2)+" lv.");
        }else if(UsedLiters<20){
            console.log(((UsedLiters*Diesel).toFixed(2))+" lv.")
        }
    }

}
Fuel2(["Diesel","19","No"])