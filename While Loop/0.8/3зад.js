function OldBooks(input){

    let MoneyNeeded=Number(input[0]);
    let Money=Number(input[1]);
    let totalDays=0;
    let consistantDays=0;
    let index=2;
    let currentInput=input[index];
    
    while(Money<MoneyNeeded){
        totalDays++
        index++
        if(currentInput=="spend"){
            Money=Money-Number(input[index])//
            consistantDays++
            if(consistantDays==5){
                console.log("You can't save the money.");
                console.log(totalDays);
                break;
            }
            if(Money<0){
                Money=0
            }
        }else if(currentInput=="save"){
            Money=Money+Number(input[index])
            consistantDays=0
            
        }
       index++
       currentInput=input[index];
    }


 if(consistantDays<5){
    console.log("You saved the money for " +totalDays+ " days.");
}


}
OldBooks(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
])



