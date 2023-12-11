//variable to add math operator to calculations array
let theOperator = ''
function handleGETEquation() {
    let resultHistoryHTML = ''

axios({
    method: 'GET',
    url:'/calculations'
}).then((response) => {
    // console.log('success', response.data);
       //display most recent result
   document.getElementById("recentResult").innerHTML = JSON.stringify(response.data[response.data.length-1].result);
     //display list of previous calculations
    //  for (let i=0; i < response.data.length; i++){
    //     let object =response.data[i]
    //     console.log('response data', object);
    //     resultHistoryHTML += `${object.numOne} ${object.operator} ${object.numTwo} = ${object.result}<br>`;

    //  document.getElementById("resultHistory").innerHTML += resultHistoryHTML;
    // //  }`${object.numOne} ${object.operator} ${object.numTwo}= ${object.result}`
    // }
for (let i = 0; i < response.data.length; i++) {
    let object = response.data[i];
    console.log('response data', object);
    console.log('in for loop',object);

    // Append the result to the HTML string
    resultHistoryHTML += `${object.numOne} ${object.operator} ${object.numTwo} = ${object.result}<br>`;
}

// Set the accumulated HTML to the element's innerHTML once after the loop
document.getElementById("resultHistory").innerHTML = resultHistoryHTML;

}).catch((error) => {
    console.log('server error', error);
})

}
handleGETEquation()


function handlePOSTEquation(event) {
    event.preventDefault()

    axios({
        method:'POST',
        url:'/calculations',
        data:       {
            numOne: Number(firstInput.value),
            numTwo: Number(secondInput.value),
            operator: theOperator,
          }
    }).then((response) => {
        console.log('successfully added');
    }).catch((error) => {
        console.log('server error', error);
    })
    handleGETEquation()
    //resets the input sections in form
    document.getElementById("calculator").reset();
  
 

    //
}
//function to add math operator to calculations array
function hereAValue(event){
  event.preventDefault()
//   console.log('I was Clicked');
//   console.log('this is the type of operator i am',  event.target.closest('button').textContent);
  let anOperator = event.target.closest('button').textContent;
  theOperator = anOperator
  }


  function clearInputs(event){
    event.preventDefault()
    document.getElementById("firstInput").value = " ";
    document.getElementById("secondInput").value = " ";
  }

