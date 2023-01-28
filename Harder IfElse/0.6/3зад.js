function newHouse(input){

    let rose=5.00;
    let daliq=3.8;
    let lale=2.8
    let narcis=3;
    let gladiola=2.50;

    let flowerType=input[0];
    let flowerNumber=input[1];
    let budget=input[2];

    let finalPrice=0;


    if(flowerType=="Roses"||flowerType=="Dahlias"||flowerType=="Tulips"||flowerType=="Narcissus"||flowerType=="Gladiolus"){
        if(flowerNumber>80&&flowerType=="Roses"){
            let finalPrice=(flowerNumber*rose)-((flowerNumber*rose)*0.1);
            if(finalPrice>budget){
                console.log("Not enough money, you need "+((finalPrice-budget).toFixed(2)) +" leva more.");
            }else if(finalPrice<=budget){
                console.log("Hey, you have a great garden with "+ flowerNumber+" "+ flowerType+" and " +(budget-finalPrice).toFixed(2)+ " leva left.");
            }
        }else if(flowerNumber<=80&&flowerType=="Roses"){
            let finalPrice=(flowerNumber*rose)
            if(finalPrice>budget){
                console.log("Not enough money, you need "+((finalPrice-budget).toFixed(2)) +" leva more.");
            }else if(finalPrice<=budget){
                console.log("Hey, you have a great garden with "+ flowerNumber+" "+ flowerType+" and " +(budget-finalPrice).toFixed(2)+ " leva left.");
            }//rose
        }else if(flowerNumber>90&&flowerType=="Dahlias"){
            let finalPrice=(flowerNumber*daliq)-((flowerNumber*daliq)*0.15);
            if(finalPrice>budget){
                console.log("Not enough money, you need "+((finalPrice-budget).toFixed(2)) +" leva more.");
            }else if(finalPrice<=budget){
                console.log("Hey, you have a great garden with "+ flowerNumber+" "+ flowerType+" and " +(budget-finalPrice).toFixed(2)+ " leva left.");
            }
        }else if(flowerNumber<=90&&flowerType=="Dahlias"){
            let finalPrice=(flowerNumber*daliq)
            if(finalPrice>budget){
                console.log("Not enough money, you need "+((finalPrice-budget).toFixed(2)) +" leva more.");
            }else if(finalPrice<=budget){
                console.log("Hey, you have a great garden with "+ flowerNumber+" "+ flowerType+" and " +(budget-finalPrice).toFixed(2)+ " leva left.");
            }//dahlia
        }else if(flowerNumber>80&&flowerType=="Tulips"){
            let finalPrice=(flowerNumber*lale)-((flowerNumber*lale)*0.15);
            if(finalPrice>budget){
                console.log("Not enough money, you need "+((finalPrice-budget).toFixed(2)) +" leva more.");
            }else if(finalPrice<=budget){
                console.log("Hey, you have a great garden with "+ flowerNumber+" "+ flowerType+" and " +(budget-finalPrice).toFixed(2)+ " leva left.");
            }
        }else if(flowerNumber<=80&&flowerType=="Tulips"){
            let finalPrice=(flowerNumber*lale)
            if(finalPrice>budget){
                console.log("Not enough money, you need "+((finalPrice-budget).toFixed(2)) +" leva more.");
            }else if(finalPrice<=budget){
                console.log("Hey, you have a great garden with "+ flowerNumber+" "+ flowerType+" and " +(budget-finalPrice).toFixed(2)+ " leva left.");
            }//Tulips
        }else if(flowerNumber<120&&flowerType=="Narcissus"){
            let finalPrice=(flowerNumber*narcis)+((flowerNumber*narcis)*0.15);
            if(finalPrice>budget){
                console.log("Not enough money, you need "+((finalPrice-budget).toFixed(2)) +" leva more.");
            }else if(finalPrice<=budget){
                console.log("Hey, you have a great garden with "+ flowerNumber+" "+ flowerType+" and " +(budget-finalPrice).toFixed(2)+ " leva left.");
            }
        }else if(flowerNumber>=120&&flowerType=="Narcissus"){
            let finalPrice=(flowerNumber*narcis)
            if(finalPrice>budget){
                console.log("Not enough money, you need "+((finalPrice-budget).toFixed(2)) +" leva more.");
            }else if(finalPrice<=budget){
                console.log("Hey, you have a great garden with "+ flowerNumber+" "+ flowerType+" and " +(budget-finalPrice).toFixed(2)+ " leva left.");
            }//Narcis    
        }else if(flowerNumber<80&&flowerType=="Gladiolus"){
            let finalPrice=(flowerNumber*gladiola)+((flowerNumber*gladiola)*0.20);
            if(finalPrice>budget){
                console.log("Not enough money, you need "+((finalPrice-budget).toFixed(2)) +" leva more.");
            }else if(finalPrice<=budget){
                console.log("Hey, you have a great garden with "+ flowerNumber+" "+ flowerType+" and " +(budget-finalPrice).toFixed(2)+ " leva left.");
            }
        }else if(flowerNumber>=80&&flowerType=="Gladiolus"){
            let finalPrice=(flowerNumber*gladiola)
            if(finalPrice>budget){
                console.log("Not enough money, you need "+((finalPrice-budget).toFixed(2)) +" leva more.");
            }else if(finalPrice<=budget){
                console.log("Hey, you have a great garden with "+ flowerNumber+" "+ flowerType+" and " +(budget-finalPrice).toFixed(2)+ " leva left.");
            }//Gladiolus    

}
    }
}
newHouse(["Tulips","88","260"])
