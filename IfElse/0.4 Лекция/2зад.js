function Bonus(input){

    let number=Number(input[0]);
    let BonusPoints=0.00;
    let PlusBonus=0.00;
    let PlussBonus=0.00;
    

    if (number<=100){
         BonusPoints =+5;
    }else if (number>100&&number<1000){
         BonusPoints= (0.2*number);

    }else if (number>1000){
         BonusPoints=(0.1*number);
    }

    if (number%2==0){
        PlusBonus=+1;
    }

    if (number%10==5){
        PlussBonus=+2;
    }
    
    let FinalBonus= PlussBonus+PlusBonus+BonusPoints;
    
    console.log(FinalBonus);
    console.log(number+FinalBonus);

}
Bonus(["2703"])
