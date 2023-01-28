function WorldRecord(input){

    let record=Number(input[0]);
    let meters=Number(input[1]);
    let secondsFor1meter=Number(input[2]);

    let seconds=meters*secondsFor1meter;
    //console.log(seconds)
    let adedSeconds=(Math.trunc(meters/15))*12.5;
    //console.log(adedSeconds)
    let totalTime=seconds+adedSeconds;
    //console.log(totalTime)
    
    if(record<=totalTime){
       console.log("No, he failed! He was " +((totalTime-record).toFixed(2))+ " seconds slower.");

    }else if (record>totalTime){
        console.log("Yes, he succeeded! The new world record is "+ (totalTime.toFixed(2)) +" seconds.")

    }

}
WorldRecord(["55555.67","3017","5.03"])
