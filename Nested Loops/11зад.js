function MagicNumber(input) {

    let Num=Number(input[0])
    let flag
    let Number1=''
    for(let i=1111;i<=9999;i++){
        let currentNum=""+i
        for(let j=0;j<currentNum.length;j++){
            let currentDigit=Number(currentNum.charAt(j))
            if(Num%currentDigit==0){
                flag=true
            }else{
                flag=false
                break
            }
        }
        if(flag){
            Number1=Number1+" "+i
        }
        
    }
console.log(Number1);
 
}
MagicNumber(["3"])

