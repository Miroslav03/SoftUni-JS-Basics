function Harvesting(input){

    let Field=input[0];
    let GrapeFor1m=input[1];
    let NeededLiters=input[2];
    let Workers=input[3];

    let TotalGrape=Field*GrapeFor1m;//1300
    let Wine=0.4*TotalGrape/2.5;//208

    if(Wine>=NeededLiters){
        let LitersLeft=Wine-NeededLiters;//33
        let Spliting=LitersLeft/Workers;
        console.log("Good harvest this year! Total wine: "+ Math.floor(Wine)+ " liters.");
        console.log(Math.ceil(LitersLeft)+" liters left -> "+ Math.ceil(Spliting) +" liters per person.");
    }else if(Wine<NeededLiters){
        let neededliters=NeededLiters-Wine;
        console.log("It will be a tough winter! More "+ Math.floor(neededliters) +" liters wine needed.");
    }

}
Harvesting(["1020","1.5","425","4"])