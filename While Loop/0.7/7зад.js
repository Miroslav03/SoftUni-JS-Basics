function MinNumber(input){

    let min=Number.MAX_SAFE_INTEGER
    let index=0
    
    while(input[index]!="Stop"){
        let number=Number(input[index])
        if(number<min){
            min=number
        }
        index++

} 
console.log(min);
}
MinNumber(["100","99","150","888","Stop"])

