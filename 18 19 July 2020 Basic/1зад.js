function deno(input){

    let Name=(input[0])
    let adultTicets=Number(input[1])
    let childTicets=Number(input[2])
    let TicketAudltPrice=Number(input[3])
    let taxes=Number(input[4])
    let TicketChildPRice=TicketAudltPrice*0.3;

    let netTaxAdult=TicketAudltPrice+taxes;
    let netTaxChild=TicketChildPRice+taxes;

    let totalPRice=(childTicets*netTaxChild)+(adultTicets*netTaxAdult)

    console.log("The profit of your agency from "+Name+" tickets is "+ (totalPRice*0.2).toFixed(2)+ " lv.");

}
deno(["WizzAir",
"15",
"5",
"120",
"40"])
