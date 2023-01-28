function Sports(input){

    let totalDays=Number(input[0]);
    let index=0
    let comand=input[index]
    let wins=0
    let loses=0
    let moneyDay=0
    let totalMOney=0
    let totalWins=0
    let totalLoses=0
    while(comand!=="Finish"){
        index++
        let currentSport=input[index]
        let result=input[index+1]
            while(currentSport!=="Finish"){
            
                switch(result){
                    case "win":wins++;moneyDay+=20;totalWins;break;
                    case "lose":loses++;totalLoses;break;
                }
                index++
                currentSport=input[index+1]
                index++
                result=input[index+1]
                if(wins>loses){
                    moneyDay=moneyDay+moneyDay*0.1
                }
                
            }
            totalMOney+=moneyDay
            moneyDay=0
            wins=0
            loses=0
    }



}
Sports(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"]
)