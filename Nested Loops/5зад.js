
function traveling(input) {

    let index=0 
    let comand=input[index]
    index++

    while(comand!=="End"){
        let destiantion=comand
        let totalSum=Number(input[index])
        index++
        let sum=0    
        while(sum<totalSum){
            let money=Number(input[index])
            sum+=money
            index++
        }
        console.log('Going to '+destiantion+"!");
        comand=input[index]
        index++

    }
}
traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])
