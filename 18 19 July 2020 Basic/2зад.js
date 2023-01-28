function deno(input){

    let price=Number(input[0])
    let kg=Number(input[1])
    let days=Number(input[2])
    let numberOfPacages=Number(input[3])


    if(kg<10){
        price=price*0.2
    }else if(kg>=10&&kg<=20){
        price=price*0.5
    }

    if(days>30){
        price=price+price*0.1
    }else if(days<=30&&days>=7){
        price=price+price*0.15
    }else if(days<7){
        price=price+price*0.4
    }

    console.log("The total price of bags is: " +(price*numberOfPacages).toFixed(2)+" lv.");


}
deno(["25.50",
"5",
"36",
"6"])
