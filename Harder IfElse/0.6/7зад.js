function Hotel(input){

    let month=input[0];
    let day=Number(input[1]);
    let studio=0;
    let apart=0;
    switch(month){
        case "May":     studio=50 ,apart=65 
        case "October": studio=50 ,apart=65 ;break;
        case "June":    studio=75.20,apart=68.70;
        case "September": studio=75.20,apart=68.70;break;
        case "July":    studio=76,apart=77;
        case "August":  studio=76,apart=77;break;

    }

    if((day>7&&day<=14)&&(month=="May"||month=="October")){
        studio=studio*0.95;
    }else if(day>14&&(month=="May"||month=="October")){
        studio=studio*0.70;
    }else if(day>14&&(month=="June"||month=="September")){
        studio=studio*0.80;
    }

    if(day>14){
        apart=apart*0.90;

    }

    console.log("Apartment: "+(((apart*day).toFixed(2)))+" lv.");
    console.log("Studio: "+((studio*day).toFixed(2))+" lv.");
}


Hotel(["May","15"])