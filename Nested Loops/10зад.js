function Trainers(input){

    index=1
    let judges=Number(input[0]);
    let comand=input[index]
    let score=0;
    let sumScore=0;
    let total=0
    let flag
    let totalAssesment=0
    let totalSum=0
    while(comand!=="Finish"){
        let Movie=comand
        index++
        let score=Number(input[index]).toFixed(2)
        while(total<=judges){
            totalAssesment++
            total++
            score=Number(input[index])
            sumScore+=score
            totalSum+=score
            index++
            if(total==judges){
                flag=true
                console.log(Movie+" - "+((sumScore/judges).toFixed(2))+".");
                break
            }
        }
        comand=input[index]
        total=0
        flag=false
        sumScore=0
        if(comand=="Finish"){
            console.log("Student's final assessment is " +(totalSum/totalAssesment).toFixed(2)+".");
        }

    }
}
Trainers(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])

