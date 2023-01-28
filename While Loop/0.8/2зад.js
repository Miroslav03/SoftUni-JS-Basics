function ExamPreparation(input){
    let numberOfNonLiked=Number(input[0])
    let index=1
    let Exam=input[index]
    let averagescore=0
    let total=0
    let totalbad=0
    while(Exam!="Enough"){
        index++
        if(Number(input[index])>4.00){
            total+=Number(input[index])
        }else if(Number(input[index])<=4.00){
            totalbad+=1
            total+=Number(input[index])
        }
        
        if(totalbad==numberOfNonLiked){
            break;
        }
        index++
        Exam=input[index]
    }

if(totalbad>=numberOfNonLiked){
    console.log("You need a break, "+totalbad+" poor grades.");
}else {
    console.log("Average score: "+(total/((index-1)/2)).toFixed(2) );
    console.log("Number of problems: "+ Math.floor(index/2));
    console.log("Last problem: "+ input[index-2]);
}

}
ExamPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])



