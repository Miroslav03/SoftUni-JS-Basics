function demo(input){

    
    let M=Number(input[1])//30
    let N=Number(input[0])//1
    let MagicS=Number(input[2])
    let flag
    Num=""
    for(let i=M;i>=N;i--){
        if((i%2==0)&&(i%3==0)){
        if(i==MagicS){
            break;
        }
            flag=true       
        }else{
            flag=false
        }


        if(flag){
            Num=Num+" "+i
        }
    }
console.log(Num);


}
demo(["1","36","12"])
