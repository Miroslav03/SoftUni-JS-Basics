function deno(input){

    let totalcolors=Number(input[0])
    let totalPoints=0
    let otherColors=0
    let dividedBlack=0
    let red=0
    let orange=0
    let yellow=0
    let white=0
    
    for(let index=1;index<=totalcolors;index++){
        let color=input[index]

        switch(color){
            case "red":totalPoints+=5;red++;break;
            case "orange":totalPoints+=10;orange++;break;
            case "yellow":totalPoints+=15;yellow++;break;
            case "white":totalPoints+=20;white++;break;
            case "black":Math.floor(totalPoints/=2);dividedBlack+=1;break;
            default:otherColors+=1
        }

    }
    console.log("Total points: "+ Math.floor(totalPoints));
    console.log("Red balls: "+ red);
    console.log("Orange balls: "+ orange);
    console.log("Yellow balls: "+yellow);
    console.log("White balls: "+ white);
    console.log("Other colors picked: " +otherColors);
    console.log("Divides from black balls: " +dividedBlack);
}
deno(["3",
"white",
"black",
"pink"])
