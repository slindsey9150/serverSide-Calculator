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