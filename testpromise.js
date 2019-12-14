const axios = require('axios');
var url = "https://dweet.io/get/latest/dweet/for/fwd";

console.log("Start Loading");


var promiseUser = new Promise((resolve, reject) => {
    axios.get(url)
    .then(response => {
        console.log('got data')
        return response.data.with[0].content
    })
    .then(data => {
        console.log('data', data);
        resolve(data);
    })
})

promiseUser.then(user => {
    console.log("User", user.name, " is age", user.age)
})

console.log('end of commands');