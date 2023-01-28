function MaxNumber(input){

    let min=Number.MIN_SAFE_INTEGER
    let index=0
    
    while(input[index]!="Stop"){
        let number=Number(input[index])
        if(number>min){
            min=number
        }
        index++

} 
console.log(min);
}
MaxNumber(["100","99","150","888","Stop"])

