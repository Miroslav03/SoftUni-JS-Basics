function deno(input){

    let index=0
    let name=input[index]
    let goals
    let bestScore=Number(input[index+1])
    let flag=false
    let bestScorer=name
    while(name!=="END"){
        index++
        goals=Number(input[index])
        if(goals>bestScore){
            bestScorer=name
            bestScore=goals
        }
        if(goals>=10){
            flag=true
            break
        }
        if(goals>=3){
            flag=true
        }
        index++
        name=input[index]

    }
    console.log(bestScorer +" is the best player!");  
    if (flag) {
        console.log("He has scored "+bestScore+" goals and made a hat-trick !!!");
    }else{
        console.log("He has scored "+bestScore+" goals.");
    }
}
deno(["Zidane",
"1",
"Felipe",
"10",
"Johnson",
"4",
"END"])







