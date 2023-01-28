function TennisRanklist(input){

    let totaltournament=Number(input[0])
    let startingpoints=Number(input[1])
    let totalPoints=startingpoints;
    let averagePoints=0;
    let wonTournaments=0;

    for(let i=2;i<=totaltournament+1;i++){
            Points=input[i]

        switch(Points){
            case "W":totalPoints+=2000;break;
            case "F":totalPoints+=1200;break;
            case "SF":totalPoints+=720;break;
        }

        if(Points=="W"){
            wonTournaments+=1
        }
    }
    averagePoints=(totalPoints-startingpoints)/totaltournament

    console.log("Final points: "+ Math.floor(totalPoints));
    console.log("Average points: "+Math.floor(averagePoints));
    console.log(((wonTournaments/totaltournament)*100).toFixed(2)+"%");
}
TennisRanklist(["5","1400","F","SF","W","W","SF"])
