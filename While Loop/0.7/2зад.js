function Pass(input){

    let username=input[0];
    let pass=input[1];

    let index =2

    while (index<=input.length) {
        let words=input[index];
        if(words==input[1]){
            console.log("Welcome "+username+"!");
        }
        index++
    }


}
Pass(["Nakov","1234","Pass","1324","1234"])
