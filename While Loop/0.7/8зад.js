function Graduation(input){

    let name=input[0]
    let index=1
    let clas=0
    let total=0
   
    while(index<input.length){
        let grade=Number(input[index])
        clas++
        
        if(grade<4.00){
            index++
        
            if(input[index]<4.00){ 
                console.log(name+" has been excluded at "+clas +" grade");
            
                break;
            }
            
        }
        total+=grade
        

        index++
} 

    if(index>=13){
        
        console.log(name +" graduated. Average grade: "+ (total/[index-1]).toFixed(2));
}

}
Graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])










