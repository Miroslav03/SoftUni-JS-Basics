function Pyramid(input){

    let n=Number(input[0])
    let current=1
    let flag=false 
    let printcurentline=""
    
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            if(current>n){
               flag=true
               break
            }
            printcurentline+=current+" ";
            current++
        }
        console.log(printcurentline);
        printcurentline=""
        if(flag){
            break
        }
    }

}
Pyramid(["7"])