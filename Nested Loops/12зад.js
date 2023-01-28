function Movies(input) {

    let index=0 
    let comand=input[index]
    index++
    let percent=0
    let total=0
    let student=0
    let standart=0
    let kid=0
    let totalStundets=0
    let totalKids=0
    let totalStandarts=0
    let flag=false 
    while(comand!=="Finish"){       
        let Movie=comand
        let totalSeats=Number(input[index])
        index++
        let passengers=input[index]   
        while(passengers!=="End"){
            index++
            if(passengers=="student"){
                student+=1
            }else if(passengers=="kid"){
                kid+=1
            }else if(passengers=="standard")
                standart+=1
            total=standart+kid+student;
            passengers=input[index] 
            if(passengers=="Finish"){
                flag=true
                break;
            }
            if(total>=totalSeats){
                index--
                break;
            }
        
            }
    
        percent=(total/totalSeats)*100

    console.log(Movie+" - "+ percent.toFixed(2)+ "% full.");

    

    totalStundets+=student
    totalKids+=kid
    totalStandarts+=standart

    total=total*0
    percent= percent*0
    student=student*0
    kid=kid*0
    standart=standart*0
    if(flag){
        console.log("Total tickets: "+(totalKids+totalStandarts+totalStundets));
        console.log((totalStundets/(totalKids+totalStandarts+totalStundets)*100).toFixed(2)+"% student tickets.");
        console.log((totalStandarts/(totalKids+totalStandarts+totalStundets)*100).toFixed(2)+"% standard tickets.");
        console.log((totalKids/(totalKids+totalStandarts+totalStundets)*100).toFixed(2)+"% kids tickets.");
        flag=true
        break;
    }
    index++
    comand=input[index]
    index++
    

}
}
Movies(["The Matrix",
"2",
"student",
"standard",
"The Green Mile",
"1",
"student",
"Finish"])

