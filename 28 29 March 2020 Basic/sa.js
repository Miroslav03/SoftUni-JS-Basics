function Sports(input){

    let index=0
    let wins=0
    let loses=0
    let moneyDay=0
    let totalMOney=0
    let totalWins=0
    let totalLoses=0

    for(let i=index;index<input.length-2;i++){
        index++
        let currentSport=input[index]
        let result=input[index+1]
            while(currentSport!=="Finish"){
            
                switch(result){
                    case "win":wins++;moneyDay+=20;totalWins++;break;
                    case "lose":loses++;totalLoses++;break;
                }
                index++
                currentSport=input[index+1]
                index++
                result=input[index+1]

                
            }
            if(wins>loses){
                moneyDay=moneyDay+moneyDay*0.1
            }
            totalMOney+=moneyDay
            moneyDay=0
            wins=0
            loses=0
        
    }

    if(totalWins>totalLoses){
        totalMOney=totalMOney+totalMOney*0.2
        console.log("You won the tournament! Total raised money: "+ totalMOney.toFixed(2));
    }else if(totalLoses>totalWins){
        console.log("You lost the tournament! Total raised money: " +totalMOney.toFixed(2));
    }


}
Sports(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"])
