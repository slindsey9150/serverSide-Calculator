let resultsArray = [];
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
];

function doMath() {
    console.log('do math function');
    for (let value of practiceArray) {
        console.log('this is a value:', value);
        if (value.operator === '+') {
            let finalResult = addFunction(value.numOne, value.numTwo);
            console.log("this is the finalResult", finalResult);
            resultsArray.push(value.numOne, value.operator, value.numTwo, finalResult);
            // Alternatively, you can push them as an array
            // resultsArray.push([value.numOne, value.operator, value.numTwo, result]);
            console.log('this is the results array', resultsArray);
        }
    }
}

function addFunction(firstNumber, secondNumber) {
    console.log('this is the add function');
    let result = firstNumber + secondNumber;
    console.log('this is the addFunction result', result);
    return result; // Add a return statement here
}

doMath();




    
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





