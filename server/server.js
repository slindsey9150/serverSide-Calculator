const express = require('express');
const bodyParser =require('body-parser')
const app = express();
let PORT = process.env.PORT || 5001;
// const doMath = require('./doMathPractice')
let calculations = []
let practiceArray = calculations




app.use(express.json());
app.use(express.static('server/public'));
app.use(bodyParser.json())

// Global variable that will contain all of the
// calculation objects:


// Here's a wonderful place to make some routes:

// GET /calculations
let resultHistoryHTML = ''
function resultHistoryCalculator() {
for (let i = 0; i < calculations.length; i++) {
  let object = calculations[i];
  resultHistoryHTML += `${object.numOne} ${object.operator} ${object.numTwo} = ${object.result}`
  // console.log('this is the result history', resultHistoryHTML);
}
}

app.get('/calculations', (req,res) => {
console.log('request for /calculations was made')
doMath();
console.log('calculations', calculations);
res.send(calculations)
})
// POST /calculations
app.post('/calculations', (req,res) => {
console.log('POST on /calculations', req.body);

calculations.push(req.body)
res.sendStatus(201)
})

app.get('', (req,res) => {
  console.log('request for /resultHistoryHTML was made')
  resultHistoryCalculator()
  console.log('resultHistoryHTML', resultHistoryHTML);
  res.send(resultHistoryHTML)
  })
  // POST /calculations
  app.post('', (req,res) => {
  console.log('POST on /calculations', req.body);
  
  calculations.push(req.body)
  res.sendStatus(201)
  })


// math
// doMath();
function doMath() {
  // event.preventDefault()
  // console.log('do math function');
  for (let value of practiceArray) {
  //   let  practiceArray = collections
      // console.log('this is a value:', value);
      if (value.operator === '+') {
          let result = addFunction(value.numOne, value.numTwo);
          // console.log("this is the additionfinalResult", finalResult);
          // resultsArray.push(value, finalResult);
          let updatedValue = {...value, result}
          let index=practiceArray.indexOf(value);
          practiceArray[index] = updatedValue
          // console.log('this is the results array', resultsArray);
          // console.log("this is the modified practice array", practiceArray);
      }
      if (value.operator === '-') {
          let result = subtractFunction(value.numOne, value.numTwo);
          // console.log("this is the subtractionfinalResult", finalResult);
          // resultsArray.push(value, finalResult);
          let updatedValue = {...value, result}
          console.log(result);
          let index=practiceArray.indexOf(value);
          practiceArray[index] = updatedValue
          // console.log('this is the results array', resultsArray);
          // console.log("this is the modified practice array", practiceArray);

      }
      if (value.operator === '*') {
          let result = multiplyFunction(value.numOne, value.numTwo);
          // console.log("this is the multiplicationfinalResult", finalResult);
          // resultsArray.push(value,finalResult);
          let updatedValue = {...value, result}
          console.log(result);
          let index=practiceArray.indexOf(value);
          practiceArray[index] = updatedValue
          // console.log('this is the results array', resultsArray);
          // console.log("this is the modified practice array", practiceArray);

      }
      if (value.operator === '/') {
          let result = divideFunction(value.numOne, value.numTwo);
          // console.log("this is the multiplicationfinalResult", finalResult);
          // Alternatively, you can push them as an array
          // resultsArray.push(value, finalResult);
          let updatedValue = {...value, result}
          console.log(result);
          let index=practiceArray.indexOf(value);
          practiceArray[index] = updatedValue
          // console.log('this is the results array', resultsArray);
          console.log("this is the modified practice array", practiceArray);

      }
  }
  // console.log("this is the practice array", practiceArray);
  // console.log('this is the results array', resultsArray);
 resultHistoryCalculator()

}
function addFunction(firstNumber, secondNumber) {
  // console.log('this is the add function');
  let result = firstNumber + secondNumber;
  // console.log('this is the addFunction result', result);
  return result; // Add a return statement here
}
function subtractFunction(firstNumber, secondNumber)  {
      // console.log('this is the subtract function');
      let result = firstNumber - secondNumber 
      // console.log('this is the subtractFunction result', result);
      return result;
  }
  function multiplyFunction(firstNumber, secondNumber)  {
      // console.log('this is the multiply function');
      let result = firstNumber * secondNumber 
      // console.log('this is the multiplyFunction result', result);
      return result;
  }
  function divideFunction(firstNumber, secondNumber)  {
      // console.log('this is the divide function');
      let result = firstNumber / secondNumber 
      // console.log('this is the divideFUnction result', result);
      return result;
  }

  










// PLEASE DO NOT MODIFY ANY CODE BELOW THESE BEARS:
// 🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸

// Makes it so you don't have to kill the server
// on 5000 in order to run the tests:
if (process.env.NODE_ENV === 'test') {
  PORT = 5001;
}

// This starts the server...but also stores it in a variable.
// This is weird. We have to do it for testing reasons. There
// is absolutely no need for you to reason about this.
const server = app.listen(PORT, () => {
  console.log('server running on: ', PORT);
});

// server.setTimeout(500)

// This is more weird "for testing reasons" code. There is
// absolutely no need for you to reason about this.
app.closeServer = () => {
  server.close();
}

app.setCalculations = (calculationsToSet) => {
  calculations = calculationsToSet;
}

module.exports = app;
