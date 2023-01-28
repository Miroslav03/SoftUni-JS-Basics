function SummerOutfit(input){

    let degrees=Number(input[0]);
    let dayTime=input[1];

    
 
    if(degrees>=10&&degrees<=18){
        if(dayTime=="Morning"){
            console.log("It's "+ degrees+ " degrees, get your Sweatshirt and Sneakers.");
        }else if(dayTime=="Afternoon"){
            console.log("It's "+ degrees+ " degrees, get your Shirt and Moccasins.");
        }else if(dayTime=="Evening"){
            console.log("It's "+ degrees+ " degrees, get your Shirt and Moccasins.");
        }
    }else if(degrees>18&&degrees<=24){
        if(dayTime=="Morning"){
            console.log("It's "+ degrees+ " degrees, get your Shirt and Moccasins.");
        }else if(dayTime=="Afternoon"){
            console.log("It's "+ degrees+ " degrees, get your T-Shirt and Sandals.");
        }else if(dayTime=="Evening"){
            console.log("It's "+ degrees+ " degrees, get your Shirt and Moccasins.");
        }
    }else if (degrees>=25){
        if(dayTime=="Morning"){
            console.log("It's "+ degrees+ " degrees, get your T-Shirt and Sandals.");
        }else if(dayTime=="Afternoon"){
            console.log("It's "+ degrees+ " degrees, get your Swim Suit and Barefoot.");
        }else if(dayTime=="Evening"){
            console.log("It's "+ degrees+ " degrees, get your Shirt and Moccasins.");
        }

    }
}
SummerOutfit(["16","Morning"])
