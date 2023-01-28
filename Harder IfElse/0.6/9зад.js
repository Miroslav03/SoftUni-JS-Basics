function Ski(input){

    let days=Number(input[0]);
    let room=input[1];
    let rating=input[2];


    let nights=days-1;
    let price=0
    
    switch(room){
        case "room for one person":price=18;break;
        case "apartment":price=25;break;
        case "president apartment":price=35;break;
    }
    let totalPrice=price*nights;
    
    if(room=="apartment"){
        if(days<10){
            totalPrice=totalPrice*0.70;
        }else if(days>=10&&days<=15){
            totalPrice=totalPrice*0.65;
        }else if(days>15){
            (totalPrice=totalPrice*0.50).toFixed(2)
        }
    }else if(room=="president apartment"){
        if(days<10){
            totalPrice=totalPrice*0.90;
        }else if(days>=10&&days<15){
            totalPrice=totalPrice*0.85;
        }else if(days>15){
            totalPrice=totalPrice*0.8;
        }
    }

        if(rating=="positive"){
            console.log((totalPrice=totalPrice+(0.25*totalPrice)).toFixed(2));
        }else if(rating=="negative"){
            console.log((totalPrice=totalPrice-(0.10*totalPrice)).toFixed(2));
        }

        
}
Ski(["30","president apartment","negative"])