function Table(input){

    let index=0       
    let Num=Number(input[index])
    let comand=input[index]
    let sumPrime=0
    let sumNonPrime=0
    let isPrime=true
    let PrimSum=0

    while(comand!=="stop"){
        if(Num<0){
            console.log("Number is negative.");
        }

        if(Num>1){
            for(let i=2;i<Num;i++){
                if(Num%i==0){
                    isPrime=false
                    sumNonPrime+=Num;
                    break;                
            }
        }
        
        if(isPrime){
            sumPrime+=Num
        }

        }
        index++
        comand=input[index]
        Num=Number(input[index])
        isPrime=true
    } 

    console.log("Sum of all prime numbers is: "+ sumPrime);
    console.log("Sum of all non prime numbers is: " +sumNonPrime);
}
Table(["0"])


