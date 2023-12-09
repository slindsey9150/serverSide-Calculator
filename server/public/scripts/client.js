console.log('client.js is sourced!');
let theOperator = ''


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
            operator: theOperator,
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
  let anOperator = event.target.closest('button').textContent;
  theOperator = anOperator
  }