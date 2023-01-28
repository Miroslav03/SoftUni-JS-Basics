function FishingBoat(input){


    let budget=Number(input[0]);
    let season=input[1];
    let numberFisher=Number(input[2]);

    let boatPrice=0;


    switch(season){
        case "Spring": boatPrice=3000; break;
        case "Summer": boatPrice=4200;
        case "Autumn": boatPrice=4200;break;
        case "Winter": boatPrice=2600;break;

    }

        if(numberFisher<=6){
            boatPrice=boatPrice*0.90;
        }else if(numberFisher>=7&&numberFisher<=11){
            boatPrice=boatPrice*0.85;
        }else if(numberFisher>=12){
            boatPrice=boatPrice*0.75;
        }

        if(numberFisher%2==0&&season!="Autumn"){
            boatPrice=boatPrice*0.95;
        }


        if(budget>=boatPrice){
            console.log("Yes! You have "+ ((budget-boatPrice).toFixed(2)) +" leva left.");
        }else if(boatPrice>budget){
            console.log("Not enough money! You need "+((boatPrice-budget).toFixed(2))+" leva.");
        }

        
}
FishingBoat(["3000","Summer","2"]) 