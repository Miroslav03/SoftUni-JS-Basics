function WorkingHours(input){

    let Hour=Number(input[0])
    let DayOfWeek=input[1]

    if((Hour>=10&&Hour<=18)&&(DayOfWeek=="Monday"||DayOfWeek=="Tuesday"||DayOfWeek=="Wednesday"||DayOfWeek=="Thursday"||DayOfWeek=="Friday"||DayOfWeek=="Saturday")){

        console.log("open");
    }else if(DayOfWeek=="Sunday"){
        console.log("closed");
    }else if(Hour<10||Hour>18){
        console.log("closed");
    }
}
WorkingHours(["19","Tuesday"])