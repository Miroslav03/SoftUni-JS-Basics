function Tom(input){

    let totalRestDays=Number(input[0]);

    let RestDays = totalRestDays*127;//2540 minuti igraa
    let WorkDays = (365-totalRestDays)*63;//21 735 minuti igra
    let totalMinutes=RestDays+WorkDays;

    if(30000>totalMinutes){
        let minutesleft=(30000-totalMinutes);
        let hourss=Math.trunc(minutesleft/60);//95
        let seconds=(minutesleft%60);
        console.log("Tom sleeps well ");
        console.log(hourss+ " hours and "+ seconds+ " minutes less for play");

    }else if(30000<totalMinutes){
        let minutesleft=(totalMinutes-30000);
        let hourss=Math.trunc(minutesleft/60);
        let seconds=(minutesleft%60);
        console.log("Tom will run away ");
        console.log(hourss+ " hours and "+ seconds+ " minutes more for play");

    }

}
Tom(["113"])