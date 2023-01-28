function Shop(input){

    let product=input[0];
    let City=input[1];
    let quanity=Number(input[2]);

    if (City=="Sofia"){
        let coffee=0.5;
        let water=0.8;
        let beer=1.2;
        let sweets=1.45;
        let peanuts=1.6;
                if(product=="coffee"){
                    console.log(quanity*coffee);
                }else if(product=="water"){
                    console.log(quanity*water);
                }else if(product=="beer"){
                    console.log(quanity*beer);
                }else if(product=="sweets"){
                    console.log(quanity*sweets);
                }else if (product=="peanuts"){
                    console.log(quanity*peanuts);}
    }else if(City=="Plovdiv"){
        let coffee=0.4;
        let water=0.7;
        let beer=1.15;
        let sweets=1.30;
        let peanuts=1.5;
                if(product=="coffee"){
                    console.log(quanity*coffee);
                }else if(product=="water"){
                    console.log(quanity*water);
                }else if(product=="beer"){
                    console.log(quanity*beer);
                }else if(product=="sweets"){
                    console.log(quanity*sweets);
                }else if (product=="peanuts"){
                    console.log(quanity*peanuts);}
    }else if(City=="Varna"){
        let coffee=0.45;
        let water=0.7;
        let beer=1.10;
        let sweets=1.35;
        let peanuts=1.55;
                if(product=="coffee"){
                    console.log(quanity*coffee);
                }else if(product=="water"){
                    console.log(quanity*water);
                }else if(product=="beer"){
                    console.log(quanity*beer);
                }else if(product=="sweets"){
                    console.log(quanity*sweets);
                }else if (product=="peanuts"){
                    console.log(quanity*peanuts);}
    }



}
Shop(["coffee","Varna","2"])
