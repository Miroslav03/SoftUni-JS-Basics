function Salary(input){

    let tabs=Number(input[0]);
    let salary=Number(input[1]);
    let fine=0

    for(let i=1;i<=tabs+1;i++){
        let currentTab=input[i]
        switch(currentTab){
            case "Facebook":fine +=150;break;
            case "Instagram":fine +=100;break;
            case "Reddit":fine +=50;break;
        }
    }
    

    if(salary>fine){
        console.log(salary-fine);
    }else if(fine>=salary){
        console.log("You have lost your salary.");
    }
}

Salary(["7","750","Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook"])

