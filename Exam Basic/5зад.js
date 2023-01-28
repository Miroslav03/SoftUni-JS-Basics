function demo(input){


    let index=0
    let age=Number(input[index])
    let command=input[index]

    let totalAdults=0
    let totalKids=0

    let PulloverPrice=15
    let ToyPrice=5

    let totalToys=0
    let totalPullovers=0

    let totalMoneyToys=0
    let totalMoneyPulovers=0



    while(command!=="Christmas"){
        age=Number(input[index])
        if(age<=16){
            totalKids++
            totalToys++

        }else if(age>16){
            totalAdults++
            totalPullovers++
        }
        index++
        age=Number(input[index])
        command=input[index]
    }

    console.log("Number of adults: "+totalAdults);
    console.log("Number of kids: "+totalKids);
    console.log("Money for toys: "+totalToys*ToyPrice);
    console.log("Money for sweaters: " +totalPullovers*PulloverPrice);

}
demo(["16","20","46","12","8","20","49","Christmas"])
