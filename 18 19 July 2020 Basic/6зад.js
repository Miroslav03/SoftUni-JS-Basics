function deno(input){

    let firstNum=Number(input[0])
    let secondNum=Number(input[1])
    let Number1=''
    let flag
    for(let i =firstNum;i<=secondNum;i++){
        let currentNum=""+i
        for(let j=0;j<currentNum.length;j++){
            let currentDigit=Number(currentNum.charAt(j))
            if(currentDigit%2==0){
                flag=false
                break;
            }else{
                flag=true
            }
        }
        if(flag){
            Number1=Number1+" "+i
        }
    }
    console.log(Number1);




}
deno(["3256","6579"])

