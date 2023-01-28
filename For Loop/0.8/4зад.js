function CleverLily(input){

    let age=Number(input[0]);//10
    let machine=Number(input[1]);//170.00
    let toyprice=Number(input[2]);//6
    let startingSum=0
    let toyCount=0
    let moneyStolen=0
    let savedMoney=0
    
    for(let i =1;i<=age;i++){
        if(i%2==0){
            startingSum +=10
            moneyStolen +=1
        }else if(i%2!=0){
            toyCount +=1
        }

        if(i%2==0){
            savedMoney +=startingSum      
        }
    }

    let moneyToys=toyCount*toyprice
    let totalMoney=(savedMoney+moneyToys)-moneyStolen

     if(totalMoney>=machine){
        console.log("Yes! "+(totalMoney-machine).toFixed(2));
     }else if(machine>totalMoney){
        console.log("No! "+(machine-totalMoney).toFixed(2));
     }   
        
}
CleverLily(["21","1570.98","3"])
