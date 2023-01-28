function deno(input){

    let totalOreders=Number(input[0])
    let size=input[1]
    let deliveryType=input[2]
    let singlePrice=0
    let discount=0
    let bonusDelivery=0
    let delivery=0


    if(deliveryType==="With delivery"){
        delivery=60
    }else if(deliveryType==="Without delivery") {
        delivery=0
    }
    if(totalOreders>99){
        bonusDelivery=0.96
    }else if(totalOreders<=99) {
        bonusDelivery=1
    }

    switch(size){
        case "90X130":singlePrice=110;

            if(totalOreders>60){
            discount=0.92
            }else if(totalOreders>30&&totalOreders<= 60){
            discount=0.95
            };break;

        case "100X150":singlePrice=140;

            if(totalOreders>80){
                discount=0.90
            }else if(totalOreders>40&&totalOreders<= 80){
                discount=0.94
            }break;

        case "130X180":singlePrice=190; 

            if(totalOreders>50){
            discount=0.88
            }else if(totalOreders>20&&totalOreders<= 50){
            discount=0.93
            }break;

        case "200X300":singlePrice=250;

            if(totalOreders>50){
            discount=0.86
            }else if(totalOreders>25&&totalOreders<= 50){
            discount=0.91
            }break;
    }
    
    

   if(totalOreders>10) {
    console.log((((((totalOreders*singlePrice)*discount)+delivery)*bonusDelivery)).toFixed(2)+" BGN");
   }else if(totalOreders<=10){
        console.log("Invalid order");
   }



}
deno(["105",
"100X150",
"With delivery"])

