function sumOfNumbers(input){

    let num=(input[0])
    let sum=0 

    for(let index=0;index<num.length;index++){
        let letter=Number(num[index])
        sum+=letter
        
    }
    console.log("The sum of the digits is:"+sum);
}sumOfNumbers(["12345"])