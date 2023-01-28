function Shoping(input){

    let Budget=Number(input[0]);
    let GPU=Number(input[1]);
    let CPU=Number(input[2]);
    let RAM=Number(input[3]);
    
    let GPUPrice=250;
    let GPUSum=GPU*GPUPrice;

    let CPUPPrice=0.35*GPUSum;
    let CPUSum=CPUPPrice*CPU;

    let RAMPrice=0.10*GPUSum;
    let RAMSum=RAM*RAMPrice;

    let totalSum=GPUSum+CPUSum+RAMSum;
    //console.log(totalSsum);

    if(GPU>CPU){
        totalSum=totalSum-(0.15*totalSum);

    }

    if(totalSum<=Budget){
        console.log("You have " +((Budget-totalSum).toFixed(2))+ " leva left!");

    }else if(totalSum>Budget){
        console.log("Not enough money! You need "+ ((totalSum-Budget).toFixed(2)) +" leva more!");
    }




}
Shoping(["920.45","3","1","1"])
