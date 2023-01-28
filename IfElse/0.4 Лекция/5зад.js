function Movie(input){

    let Budget=Number(input[0]);
    let Statist=Number(input[1]);
    let ClothesPrice=Number(input[2]);

    let dekor=0.10*Budget;
    let ClothesSum =ClothesPrice*Statist;

    if(Statist>=150){
        ClothesSum=ClothesSum-(0.1*ClothesSum).toFixed(2);
    }

    let totalMovieSum=dekor+ClothesSum;
    let moneyLeft=Budget-totalMovieSum;

    if(Budget>=totalMovieSum){
        console.log("Action!")
        console.log("Wingard starts filming with " +moneyLeft.toFixed(2)+ " leva left.")

    }else if(Budget<totalMovieSum){

        console.log("Not enough money!")
        console.log("Wingard needs "+ (totalMovieSum-Budget).toFixed(2)+ " leva more.")          
    }
}
Movie(["20000","120","55.5"])