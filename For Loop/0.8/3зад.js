function Histograam(input){

    let n=Number(input[0]);

     let p1=0;
     let p2=0;
     let p3=0;
     let p4=0;
     let p5=0;

    for(let i=1;i<=n;i++){
        let currentnumber=Number(input[i])
        if(currentnumber<200){
            p1++
        }else if(currentnumber>=200&&currentnumber<=399){
            p2++
        }else if(currentnumber>=400&&currentnumber<=599){
            p3++
        }else if(currentnumber>=600&&currentnumber<=799){
            p4++ 
        }else if(currentnumber>=800){
            p5++
        }
    }
        console.log((p1/n*100).toFixed(2)+"%");
        console.log((p2/n*100).toFixed(2)+"%");
        console.log((p3/n*100).toFixed(2)+"%");
        console.log((p4/n*100).toFixed(2)+"%");
        console.log((p5/n*100).toFixed(2)+"%");

}
Histograam(["3","1","2","999"])