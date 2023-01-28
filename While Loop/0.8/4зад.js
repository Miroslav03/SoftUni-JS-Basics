function Steps(input){

    let totalSteeps=0;
    let index=0;
    let currentSteps=Number(input[index]);
    
    while(index<input.length){
        let home=input[index];
        index++
        
        if(home=="Going home"){
            currentSteps=Number(input[index]);
            totalSteeps+=currentSteps
            index++
            continue;
            
        }

        totalSteeps+=currentSteps
        currentSteps=Number(input[index]);
        
    
    }


    //console.log(totalSteeps);
if(totalSteeps>=10000){
    console.log("Goal reached! Good job!");
    console.log(totalSteeps-10000 +" steps over the goal!");
}else if(totalSteeps<10000){
    console.log(10000-totalSteeps+ " more steps to reach goal.");
}



}
Steps(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])
