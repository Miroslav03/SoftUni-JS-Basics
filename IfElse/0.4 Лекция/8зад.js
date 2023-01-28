function Break(input){

    let Name=input[0];
    let MovieTime=Number(input[1]);
    let BreakTime=Number(input[2]);

    let LunchTime=BreakTime/8;
    let RestTIme=BreakTime/4;
    let LeftTime=BreakTime-RestTIme-LunchTime;

    if(LeftTime>=MovieTime){
        console.log("You have enough time to watch "+Name+" and left with "+ (Math.ceil(LeftTime-MovieTime)) +" minutes free time.");
    }else if (LeftTime<MovieTime){
        console.log("You don't have enough time to watch "+Name+", you need "+ (Math.ceil(MovieTime-LeftTime)) +" more minutes.");
    }


}
Break(["Teen Wolf","48","60"])
