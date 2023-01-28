function OldBooks(input){

    let Searchedbook=input[0]
    let index=1
    let found=0
    let book=input[index]
    while(book!=="No More Books"){
        if(book ==Searchedbook){
            found=true;
            break;
        }
        index++
        book=input[index]
       
      
    }
  
    if(found==true){
        console.log("You checked "+(index-1)+" books and found it.");
    }else if(found<=0) {
        console.log("The book you search is not here!");
        console.log("You checked "+(index-1)+" books.");
    }
}
OldBooks(["Troy",
"Stronger",
"Life Style",
"Troy"])


