function Exam(input){

    let examHour=Number(input[0])
    let examMinutes=Number(input[1])
    let arrivalHour=Number(input[2])
    let arrivalMinutes=Number(input[3])

    let examHourseconds=examHour*60;
    let arrivalHourseconds=arrivalHour*60;

    let sumExam=examHourseconds+examMinutes;
    let sumArr=arrivalHourseconds+arrivalMinutes;

    if (sumArr>sumExam) {
        if((((((sumArr-sumExam)%60)<10)&&((sumArr-sumExam)/60)>1))){
            console.log("Late")
            console.log((Math.floor((sumArr-sumExam)/60))+":0"+((sumArr-sumExam)%60)+" hours after the start")
        }
        if(sumExam%60==sumArr%60){
            console.log("Late")
            console.log(Math.floor((sumArr-sumExam)/60)+":"+((sumArr-sumExam)%60)+"0 hours after the start");
        }else if
        ((sumArr-sumExam)>60&&sumExam%60!=sumArr%60&&(((sumArr-sumExam)%60)>10)){
            console.log("Late");
            console.log(Math.floor((sumArr-sumExam)/60)+":"+((sumArr-sumExam)%60)+" hours after the start");
        }else if((((sumArr-sumExam)<60)&&sumExam%60!=sumArr%60)){
            console.log("Late");
            console.log((sumArr-sumExam)+ " minutes after the start");
        }
    }else if(sumExam==sumArr||(sumExam-30)<=sumArr){
        if((sumExam==sumArr)){
            console.log("On time");
        }else   {
            console.log("On time");
            console.log((sumExam-sumArr)+ " minutes before the start");
        }
    }else if((sumExam-30)>sumArr){
        if((((sumExam-sumArr)%60)<10)){
            console.log("Early")
            console.log((Math.floor((sumExam-sumArr)/60))+":0"+((sumExam-sumArr)%60)+" hours before the start")
        }
        if(sumExam%60==sumArr%60){
            console.log("Early")
            console.log((Math.floor((sumExam-sumArr)/60))+":"+((sumExam-sumArr)%60)+"0 hours before the start")
        }else if
        ((sumExam-sumArr)>60&&sumExam%60!=sumArr%60&&(((sumExam-sumArr)%60)>10)){
            console.log("Early")
            console.log((Math.floor((sumExam-sumArr)/60))+":"+((sumExam-sumArr)%60)+" hours before the start")
        }else if(((((sumExam-sumArr)<60)&&((sumExam-sumArr)>10))&&sumExam%60!=sumArr%60)){
            console.log("Early");
            console.log((sumExam-sumArr)+ " minutes before the start");
        }
    }    

}
Exam(["11","30","11","35"])