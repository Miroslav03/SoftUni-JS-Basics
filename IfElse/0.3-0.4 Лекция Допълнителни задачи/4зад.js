function transport(input){

    let km=Number(input[0]);
    let dayTime=input[1];

    if (km<20&&dayTime=="day"){
        console.log((0.70+km*0.79).toFixed(2));
    }else if(km<20&&dayTime=="night"){
        console.log((0.70+km*0.90).toFixed(2));
    }else if(km>=20&&km<100){
        console.log((km*0.09).toFixed(2));
    }else if(km>=100){
        console.log((km*0.06).toFixed(2));
    }


}
transport(["25","day"])