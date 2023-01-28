function fuel(input){

    let Fuel=(input[0]);
    let FuelLiters=Number(input[1]);

    if(Fuel=="Diesel"&&FuelLiters>=25){
        console.log("You have enough diesel.");
    }else if(Fuel=="Gasoline"&&FuelLiters>=25){
        console.log("You have enough gasoline.");
    }else if(Fuel=="Gas"&&FuelLiters>=25){
        console.log("You have enough gas.");
    }else if (Fuel!="Diesel"&&Fuel!="Gas"&&Fuel!="Gasoline"){
        console.log("Invalid fuel!");
   }else{
        console.log("Fill your tank with "+(Fuel.toLowerCase())+"!");
   }

}
fuel(["Gasoliness","5"])