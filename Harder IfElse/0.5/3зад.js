function days(input){

    let Animal=input[0];
 
    switch(Animal){
     case "dog":console.log("mammal"); break;
     case "snake":console.log("reptile"); break;
     case "tortoise":console.log("reptile"); break;
     case "crocodile":console.log("reptile"); break;
    

     default: console.log("unknown");
    }
 
 }
 days(["dog"])