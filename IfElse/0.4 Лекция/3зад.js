function time(input){

    let hour=Number(input[0]);
    let minutes=Number(input[1]);
    let Minutes=minutes+15

    if (Minutes>=60&&hour<23){
        hour=hour+1;
    }else if(Minutes>=60&&hour>=23){
        hour=hour*0;
    } 
   
     if (Minutes%60==0){
        console.log(hour+":00")
     }else if (Minutes%60<10){
        console.log(hour+":0"+(Minutes%60))
     }else if(Minutes%60>=10){
        console.log(hour+":"+Minutes%60)
     }

}
time(["8","59"])