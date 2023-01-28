function SumNumbers(input){

    let Sum=0
    let index=1

    while (index<input.length) {
        let numbers=Number(input[index])
        Sum+=numbers
        index++
    }
    console.log(Sum);
}
SumNumbers(["100","10","20","30","40"])
