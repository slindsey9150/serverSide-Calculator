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
    },
    {
        numOne: 3,
        numTwo: 5,
        operator: '*',
      },
      {
        numOne: 12,
        numTwo: 6,
        operator: '/',
      }
];
function doMath() {
    console.log('do math function');
    for (let value of practiceArray) {
        console.log('this is a value:', value);
        if (value.operator === '+') {
            let finalResult = addFunction(value.numOne, value.numTwo);
            console.log("this is the additionfinalResult", finalResult);
            resultsArray.push(value, finalResult);
            // Alternatively, you can push them as an array
            // resultsArray.push([value.numOne, value.operator, value.numTwo, result]);
            console.log('this is the results array', resultsArray);
        }
        if (value.operator === '-') {
            let finalResult = subtractFunction(value.numOne, value.numTwo);
            console.log("this is the subtractionfinalResult", finalResult);
            resultsArray.push(value, finalResult);
            // Alternatively, you can push them as an array
            // resultsArray.push([value.numOne, value.operator, value.numTwo, result]);
            console.log('this is the results array', resultsArray);
        }
        if (value.operator === '*') {
            let finalResult = multiplyFunction(value.numOne, value.numTwo);
            console.log("this is the multiplicationfinalResult", finalResult);
            resultsArray.push(value,finalResult);
            // Alternatively, you can push them as an array
            // resultsArray.push([value.numOne, value.operator, value.numTwo, result]);
            console.log('this is the results array', resultsArray);
        }
        if (value.operator === '/') {
            let finalResult = divideFunction(value.numOne, value.numTwo);
            console.log("this is the multiplicationfinalResult", finalResult);
            resultsArray.push(value,finalResult);
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
function subtractFunction(firstNumber, secondNumber)  {
        console.log('this is the add function');
        let result = firstNumber - secondNumber 
        console.log('this is the subtractFunction result', result);
        return result;
    }
    function multiplyFunction(firstNumber, secondNumber)  {
        console.log('this is the add function');
        let result = firstNumber * secondNumber 
        console.log('this is the multiplyFunction result', result);
        return result;
    }
    function divideFunction(firstNumber, secondNumber)  {
        console.log('this is the divide function');
        let result = firstNumber / secondNumber 
        console.log('this is the result', result);
        return result;
    }



    doMath();

