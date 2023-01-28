function demo(input){

    let NumberProcesors= Number(input[0])
    let NumberWorkers= Number(input[1])
    let days= Number(input[2])

    let procesorsMOre=0
    let prosescorsLess=0

    let totalHours=days*NumberWorkers*8//1280
    let totalProcesorsMade=Math.floor(totalHours/3)//426


    if(totalProcesorsMade<NumberProcesors){
        prosescorsLess=NumberProcesors-totalProcesorsMade
        console.log("Losses: -> "+(prosescorsLess*110.10).toFixed(2)+" BGN");
    }else if(totalProcesorsMade>=NumberProcesors){
        procesorsMOre=totalProcesorsMade-NumberProcesors
        console.log("Profit: -> "+(procesorsMOre*110.10).toFixed(2)+" BGN");
    }

}
demo(["150",
"7",
"18"])
