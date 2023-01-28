function pets(input){
    
    let days=Number(input[0]);
    let FoodKg=Number(input[1]);
    let DogFood=Number(input[2]);
    let CatFood=Number(input[3]);
    let TurtleFood=Number(input[4]);

    let NeededFoodDog=days*DogFood;//2
    let NeededFoodCat=days*CatFood;//2
    let NeededFoodTurtle=(days*TurtleFood)/1000;//2.4

    let totalfood=NeededFoodCat+NeededFoodDog+NeededFoodTurtle;//6.4

    if(totalfood<=FoodKg){
        console.log((Math.floor(FoodKg-totalfood))+" kilos of food left.");
        
    }else if (totalfood>FoodKg){
        console.log((Math.ceil(totalfood-FoodKg))+" more kilos of food are needed.");
    }



}
pets(["5","10","2.1","0.8","321"])