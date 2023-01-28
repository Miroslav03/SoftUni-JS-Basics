function demo(input){

    let paintPrice=21.50;
    let rolesPrice=5.20;
    let NumberBucketsPaint=Number(input[0])
    let NumberRole=Number(input[1])
    let glovesPrice=Number(input[2])
    let brushPrice=Number(input[3])



    let NumberGloves=Math.ceil(NumberRole*0.35)//3
    let NumberBrushes=Math.floor(NumberBucketsPaint*0.48)//4

    let totalPaintPrice=NumberBucketsPaint*paintPrice;
    let totalRolePRice=NumberRole*rolesPrice;
    let totalGlovePrice=NumberGloves*glovesPrice
    let totalBruseshPrice=NumberBrushes*brushPrice


    let TotalPRice=(totalBruseshPrice+totalGlovePrice+totalRolePRice+totalPaintPrice)*(1/15)
   
    console.log("This delivery will cost " +(TotalPRice).toFixed(2)+ " lv.");
}
demo(["1","3","10.9","1",])