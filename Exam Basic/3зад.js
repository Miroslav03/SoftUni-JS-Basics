function demo(input){

    let Country=input[0];//Brazil
    let typeSouvenir=input[1];//stickers
    let numberSouvenir=Number(input[2])//5

    let price=0
    

    switch(typeSouvenir){
        case "flags":
            if(Country=="Argentina"){
                price=3.25
            }else if(Country=="Brazil"){
                price=4.20
            }else if(Country=="Croatia"){
                price=2.75
            }else if(Country=="Denmark"){
                price=3.10
            };break;
        case "caps":
            if(Country=="Argentina"){
                price=7.2
            }else if(Country=="Brazil"){
                price=8.5
            }else if(Country=="Croatia"){
                price=6.9
            }else if(Country=="Denmark"){
                price=6.5
            };break;  
        case "posters":
                if(Country=="Argentina"){
                    price=5.1
                }else if(Country=="Brazil"){
                    price=5.35
                }else if(Country=="Croatia"){
                    price=4.95
                }else if(Country=="Denmark"){
                    price=4.8
                };break;     
        case "stickers":
                if(Country=="Argentina"){
                    price=1.25
                }else if(Country=="Brazil"){
                    price=1.2
                }else if(Country=="Croatia"){
                    price=1.1
                }else if(Country=="Denmark"){
                    price=0.9
                };break;  
    }

    let TotalPrice=price*numberSouvenir

    if(Country!=="Argentina"&&Country!=="Brazil"&&Country!=="Croatia"&&Country!=="Denmark"){
        console.log("Invalid country!");
    }else if(typeSouvenir!=="flags"&&typeSouvenir!=="caps"&&typeSouvenir!=="posters"&&typeSouvenir!=="stickers"){
        console.log("Invalid stock!");
    }else {
        console.log("Pepi bought "+numberSouvenir+" "+typeSouvenir+" of "+Country+" for "+TotalPrice.toFixed(2)+" lv.");
    }

}
demo(["Brazil", 
"stickers",
"5"])
