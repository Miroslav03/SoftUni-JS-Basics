function Dishwasher(input){

    let index=1
    let preparad=Number(input[0])*750;//1500
    let comand=input[index]
    let totalDishesWashed=0
    let totalTenjeriWashed=0
    let LeftPreparad=0
    let Loading=1
    let prepardBreak=Number(input[0])*750;
    while(comand!=="End"){
        var CurrentDish=Number(input[index])
        var CurrentMlUsed=0

        if(Loading%3!=0){
            CurrentMlUsed=CurrentDish*5//265
            preparad-=CurrentMlUsed//1265
            Loading++
            totalDishesWashed+=CurrentDish
        }else if(Loading%3==0){
            CurrentMlUsed=CurrentDish*15
            preparad-=CurrentMlUsed
            Loading++
            totalTenjeriWashed+=CurrentDish
        }

        if(preparad<0){
            console.log("Not enough detergent, "+(CurrentMlUsed-prepardBreak)+" ml. more necessary!");
            break
        }
        prepardBreak-=CurrentMlUsed

        CurrentMlUsed*=0
        index++
        comand=input[index]
    }
    if(preparad>=0){
        console.log("Detergent was enough!");
        console.log(totalDishesWashed+" dishes and "+totalTenjeriWashed+" pots were washed.");
        console.log("Leftover detergent "+(preparad-CurrentMlUsed)+" ml.");
    }

}
Dishwasher(["1",
    "10",
    "15",
    "10",
    "12",
    "13",
    "30",
    ])
