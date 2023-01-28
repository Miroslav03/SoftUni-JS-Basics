function demo(input){

    let index=1
    let location=input[index]

    let averageEpexted=Number(index+1)
    let TotalMinedToday=0
    let averageMinedToday=0

    let daysPerLocation=Number(input[index+2])

    let currentDay=Number(input[index+3])

    for(let i=index;index<input.length;i++){
        let averageEpexted=Number(input[index])
        index++
        let daysPerLocation=Number(input[index])
        index++
        let currentDay=Number(input[index])

        for(let j=1;j<=daysPerLocation;j++){
            TotalMinedToday+=currentDay
            index++
            currentDay=Number(input[index])
            averageMinedToday=(TotalMinedToday/daysPerLocation).toFixed(2);
            
        }
        if(averageMinedToday>=averageEpexted){
            console.log("Good job! Average gold per day: "+averageMinedToday+".");
        }else if(averageMinedToday<averageEpexted){
            console.log("You need "+(averageEpexted-averageMinedToday).toFixed(2)+" gold.");
        }
        TotalMinedToday=0
        averageMinedToday=0
    }



}
demo(["1",
"5",
"3",
"10",
"1",
"3"])
