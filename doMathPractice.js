let resultsArray = []
let practiceArray = [
    {
      numOne: 3,
      numTwo: 5,
      operator: '+',
    },
    {
      numOne: 11,
      numTwo: 7,
      operator: '-',
    }
  ]

function doMath(){
    console.log('do math function');
    for (value of practiceArray)
    console.log('this is a value:', value);
     if (value.operator = '+'){
        let result = addFunction(value.numOne,value.numTwo) 
     console.log("this is the result",result);
        resultsArray.push(value.numOne,value.numTwo,value.operator,result)
        console.log('this is the results array',resultsArray);
     }
}
    doMath()

    function addFunction(firstNumber, secondNumber)  {
        console.log('this is the add function');
        let result = firstNumber + secondNumber
        console.log('this is the addFunction result', result);
    }
    // function subtractFunction(firstNumber, secondNumber)  {
    //     console.log('this is the add function');
    //     let result = firstNumber - secondNumber 
    //     console.log('this is the result', result);
    // }
    // function multiplyFunction(firstNumber, secondNumber)  {
    //     console.log('this is the add function');
    //     let result = firstNumber * secondNumber 
    //     console.log('this is the result', result);
    // }
    // function divideFunction(firstNumber, secondNumber)  {
    //     console.log('this is the add function');
    //     let result = firstNumber / secondNumber 
    //     console.log('this is the result', result);
    // }





