function Oscars(input){

    let name=input[0]
    let startingPoints=Number(input[1])
    let peopleRating=input[2]
    
    let total=startingPoints;
    
   for(let i=3;i<peopleRating*2+2; i+=2){
        let names=input[i]
        let  nameslenght=names.length
        let points=Number(input[i+1])
        
        let totalPoints=((points*nameslenght)/2)
        total = total+totalPoints     
        if(total>1250.5){
            break;
        }        
}
    if(total<1250.5){
        console.log("Sorry, "+name+ " you need "+ (1250.5-total).toFixed(1)+" more!");
    }else if(total>1250.5){
        console.log("Congratulations, "+ name +" got a nominee for leading role with "+ (total.toFixed(1))+"!");
    }

}
Oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])



