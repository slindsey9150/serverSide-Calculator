console.log('client.js is sourced!');

function handleGETEquation() {
axios({
    method: 'GET',
    url:'/calculations'
}).then((response) => {
    console.log('success', response.data);
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
            numOne: firstInput.value,
            numTwo: secondInput.value,
            operator: addOperator.value || subtractOperator.value || multiplyOperator.value || divideOperator.value,
            result: 8
          }
    }).then((response) => {
        console.log('successfully added');
    }).catch((error) => {
        console.log('server error', error);
    })
    handleGETEquation()
}

function hereAValue(event){
  event.preventDefault()
  console.log('I was Clicked');
  console.log('this is the type of operator i am',  event.target.closest('button').textContent);
  }