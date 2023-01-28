function Combination(input){
    
    let floorCount=Number(input[0]);
    let placeCount=Number(input[1]);

    for(let floorNumber=floorCount;floorNumber>=1;floorNumber--){
        let type=""
        if(floorNumber===floorCount){
            type="L"
            //console.log("L");
        }else if(floorNumber%2==0){
            type="O"
            //console.log("O");
        }else{
        type="A"
    }
        //console.log("A");

        let Rooms=""
        for(let apart=0;apart<placeCount;apart++){
            Rooms=Rooms +" "+(type+floorNumber+apart)

        }
        console.log(Rooms);
    }



}
Combination(["6", "4"])