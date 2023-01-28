function Money(input){

    let money=Number(input[0])
    let totalcoins=Math.floor(money*100)
    let coins=0;

    while(totalcoins>0){
        if(totalcoins>=200){
            totalcoins=totalcoins-200;
            coins++
        }else if(totalcoins>=100){
            totalcoins=totalcoins-100
            coins++
        }else if(totalcoins>=50){
            totalcoins=totalcoins-50
            coins++
        }else if(totalcoins>=20){
            totalcoins=totalcoins-20
            coins++
        }else if(totalcoins>=10){
            totalcoins=totalcoins-10
            coins++
        }else if(totalcoins>=5){
            totalcoins=totalcoins-5
            coins++
        }else if(totalcoins>=2){
            totalcoins=totalcoins-2
            coins++
        }else if(totalcoins>=1){
            totalcoins=totalcoins-1
            coins++
        }


    }

    console.log(coins);
}
Money(["1.23"])