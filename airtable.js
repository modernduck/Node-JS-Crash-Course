const {getEmployees } = require("./util")

getEmployees.then(employees => {
    console.log(employees);
})
/*async function main(){
    var employees = await getEmployees();    
    console.log(employees)
}
main();*/