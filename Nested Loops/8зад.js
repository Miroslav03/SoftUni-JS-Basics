function Table(input){

   
  let firstNum=Number(input[0])
  let secondNum=Number(input[1])
  let Number1=''
  for(let i=firstNum;i<=secondNum;i++){
      let chetno=0
      let nechetno=0
      let currentNum=""+i
      for(let j=0;j<currentNum.length;j++){
          let currentDigit=Number(currentNum.charAt(j))
          if(j%2==0){
              chetno+=currentDigit
          }else {
              nechetno+=currentDigit
          }

          
  }
  if(chetno===nechetno){
      Number1=Number1+" "+i
  }
}
console.log(Number1);
}
Table(["299900","300000"])
