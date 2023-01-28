function Math(input){

let figure =input[0];

    if (figure=="square"){
        let a =Number(input[1]);
        let area = a*a;
        console.log(area);
    }else if(figure=="rectangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);
        let area = a*b; 
        console.log(area);
    }else if(figure=="circle"){
        let r = Number(input[1]);
        let area = 3.14159265359*(r*r);
        console.log(area);
    }else if (figure=="triangle"){
        let a =Number(input[1]);
        let ha=Number(input[2]);
        let area = (a*ha)/2;
        console.log(area);
    }  

}
Math(["circle","6"]);