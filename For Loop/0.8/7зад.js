function TrekkingMania(input){

    let totalGrups=Number(input[0])
    let people=0

    let MusalaGroup=0
    let MonblanGruop=0
    let KilimandjaroGroup=0
    let K2Group=0
    let EverestGroup=0

    let MusalaPercent=0
    let MonblanPercent=0
    let KilimandjaroPercent=0
    let K2Percent=0
    let EverestPercent=0


    for(let i=1;i<=totalGrups;i++){
        let totalPeople=Number(input[i])
        people+=totalPeople
        
        if(totalPeople<=5){
            MusalaGroup+=totalPeople;          
        }else if(totalPeople>=6&&totalPeople<=12){
            MonblanGruop+=totalPeople       
        }else if(totalPeople>=13&&totalPeople<=25){
            KilimandjaroGroup+=totalPeople
        }else if(totalPeople>=26&&totalPeople<=40){
            K2Group+=totalPeople
        }else if(totalPeople>=40){
            EverestGroup+=totalPeople
        }
    
    }
    MusalaPercent=((MusalaGroup/people)*100).toFixed(2)
    console.log(MusalaPercent+"%");

    MonblanPercent=((MonblanGruop/people)*100).toFixed(2)
    console.log(MonblanPercent+"%");

    KilimandjaroPercent=((KilimandjaroGroup/people)*100).toFixed(2)
    console.log(KilimandjaroPercent+"%");

    K2Percent=((K2Group/people)*100).toFixed(2)
    console.log(K2Percent+"%");

    EverestPercent=((EverestGroup/people)*100).toFixed(2)
    console.log(EverestPercent+"%");
}
TrekkingMania(["5","25","41","31","250","6"])

