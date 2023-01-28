function ToyShop(input){

    let TripPrice=Number(input[0]);

    let discount=0.00;

    let PuzzelPrice=2.60;
    let DollPrice=3;
    let BearPrice=4.10;
    let MinionPrice=8.20;
    let TruckPrice=2;

    let Puzzel=Number(input[1]);
    let Doll=Number(input[2]);
    let Bear=Number(input[3]);
    let Minion=Number(input[4]);
    let Truck=Number(input[5]);

    let totalPrice=(Puzzel*PuzzelPrice)+(Doll*DollPrice)+(Bear*BearPrice)+(Minion*MinionPrice)+(Truck*TruckPrice)
       
    let toyCount=Puzzel+Doll+Bear+Minion+Truck;
        
        if (toyCount>=50){
        discount=0.25*totalPrice;
        }    

    let finalPrice=totalPrice-discount;
          

    let rent=0.1*finalPrice;
        
    let profit=finalPrice-rent;
           
        if (profit>=TripPrice){
            console.log("Yes! "+((profit-TripPrice).toFixed(2)) +" lv left.");
        }
        else{
            console.log("Not enough money! " +((TripPrice-profit).toFixed(2)) +" lv needed.")
        }

}
ToyShop(["40.8","20","25","30","50","10"])
