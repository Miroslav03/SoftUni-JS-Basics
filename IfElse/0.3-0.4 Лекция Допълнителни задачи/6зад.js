function Shop(input){

    let Magnolii=Number(input[0]);
    let Zumbuli=Number(input[1]);
    let Rozi=Number(input[2]);
    let Cactusi=Number(input[3]);
    let Podaruk= Number(input[4]);  


    let MagnoliiPrice=3.25;
    let ZumbuliPrice=4;
    let RoziPrice=3.50;
    let CactusiPrice=8;

    let totalsum=(Magnolii*MagnoliiPrice)+(Zumbuli*ZumbuliPrice)+(Rozi*RoziPrice)+(Cactusi*CactusiPrice);//44
    
    let Profit=totalsum-(0.05*totalsum);//41.80

    if(Podaruk>Profit){
        console.log("She will have to borrow " +(Math.ceil(Podaruk-Profit))+ " leva.");
    }else if (Profit>=Podaruk){
        console.log("She is left with "+(Math.floor(Profit-Podaruk)) +" leva.");

    }

}
Shop(["15","7","5","10","100"])