function Shop(input){

    let fruit=input[0];
    let dayOfWeek=input[1];
    let fruitNumber=Number(input[2]);

    if(dayOfWeek=="Monday"||dayOfWeek=="Tuesday"||dayOfWeek=="Wednesday"||dayOfWeek=="Thursday"||dayOfWeek=="Friday"){
        let banana=2.50;
        let apple=1.20;
        let orange=0.85;
        let grapefruit=1.45;
        let kiwi=2.70;
        let pineapple=5.50;
        let grapes=3.85;
        if (fruit=="apple"){
            console.log((apple*fruitNumber).toFixed(2));
        }else if(fruit=="banana"){
            console.log((banana*fruitNumber).toFixed(2));
        }else if(fruit=="orange"){
            console.log((orange*fruitNumber).toFixed(2));
        }else if(fruit=="grapefruit"){
            console.log((grapefruit*fruitNumber).toFixed(2));
        }else if(fruit=="kiwi"){
            console.log((kiwi*fruitNumber).toFixed(2));
        }else if(fruit=="pineapple"){
            console.log((pineapple*fruitNumber).toFixed(2));
        }else if(fruit=="grapes"){
            console.log((grapes*fruitNumber).toFixed(2));
        }else{
            console.log("error");
        }
    }else if(dayOfWeek=="Saturday"||dayOfWeek=="Sunday"){
        let banana=2.70;
        let apple=1.25;
        let orange=0.90;
        let grapefruit=1.60;
        let kiwi=3;
        let pineapple=5.60;
        let grapes=4.20;
        if (fruit=="apple"){
            console.log((apple*fruitNumber).toFixed(2));
        }else if(fruit=="banana"){
            console.log((banana*fruitNumber).toFixed(2));
        }else if(fruit=="orange"){
            console.log((orange*fruitNumber).toFixed(2));
        }else if(fruit=="grapefruit"){
            console.log((grapefruit*fruitNumber).toFixed(2));
        }else if(fruit=="kiwi"){
            console.log((kiwi*fruitNumber).toFixed(2));
        }else if(fruit=="pineapple"){
            console.log((pineapple*fruitNumber).toFixed(2));
        }else if(fruit=="grapes"){
            console.log((grapes*fruitNumber).toFixed(2));
        }else{
            console.log("error");
        }
    }else {
        console.log("error");
    }


}
Shop(["apple","Tuesday","2"])