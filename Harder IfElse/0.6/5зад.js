function Journey(input){

    let budget=Number(input[0]);
    let season=input[1];

    if(budget<=100){
        if(season=="summer"){
            console.log("Somewhere in Bulgaria ");
            console.log("Camp - "+((budget*0.3)).toFixed(2));
        }else if(season=="winter"){
            console.log("Somewhere in Bulgaria ");
            console.log("Hotel - "+((budget*0.7)).toFixed(2));
        }
    }else if(budget<=1000){
        if(season=="summer"){
            console.log("Somewhere in Balkans ");
            console.log("Camp - "+((budget*0.4)).toFixed(2));
        }else if(season=="winter"){
            console.log("Somewhere in Balkans ");
            console.log("Hotel - "+((budget*0.8)).toFixed(2));
        }
    }else if(budget>1000){
            console.log("Somewhere in Europe ");
            console.log("Hotel - "+((budget*0.9)).toFixed(2));
    }


}
Journey(["1500", "winter"])