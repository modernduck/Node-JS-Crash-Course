//this is comment
/*
This is comment
*/
console.log("Hello World")
var a = 20;
var b = true;
console.log("User", a, b);
const API_ENDPOINT = "https://google.co.th/api";
//API_ENDPOINT = 5;// error because it's const

var numbers = [ 1,2,3,4,5,6 ];
console.log("Number arrays", numbers);
//console.log(numbers[0]);
//console.log(numbers.length);
//example of for loop
/*var sum = 0;
for(var i = 0; i < numbers.length ; i++){
    console.log(numbers[i]);
    //if(i == 3)
    //    break
    //sum = sum + numbers[i];
    sum += numbers[i];
}
console.log("SUM is ", sum)*/

/*var sum = 0;
var index = 0;
while(index < numbers.length){
    sum += numbers[index];
    index++;
}
console.log("Sum(While)", sum);*/
/*do{

}while();*/
/*function test(a, b){
    return a + b;
}
console.log("Test A B",  test(3, 5));*/
function test2(value, index, arr){
    console.log(value, index, arr);
};
//numbers.forEach(test2);
numbers.forEach(function(value){
    console.log(value);
})

var myFunctionA = function(a , b){
    return a * b;
}
var myFunctionB = (a, b) => a * b;
console.log("Compare", myFunctionA(5, 10), myFunctionB(5, 10) );

var people = {
    name : "Sompop",
    age : 30
}
console.log(people);
console.log(people.name, people.age);
var employees = [
    { name : "Sompop", age:30 },
    { name : "Sommhai", age:25 },
    { name : "Mark", age:50 },
    { name : "Billy", age:20 },
    { name : "Johnny", age:35 },
]
console.log("Employees", employees);

//find sum of emplyees Age
var sum = 0;
employees.forEach(item => {
    sum += item.age
})
console.log('Sum from forEach', sum);
var ages = employees.map(item => item.age);
console.log(ages);
var sum2 = ages.reduce((accum, item) => (item + accum), 0);
console.log(sum2);
var myMin = ages.reduce((min, item) => Math.min(item, min), ages[0]);
console.log("Min", myMin)
var myMax = ages.reduce((max, item) => Math.max(item, max), ages[0]);
console.log("Max", myMax)
var youngEmployees = employees.filter(item => item.age < 35);
console.log("Young employees", youngEmployees);

var arr2 = [];
employees.forEach(item => {
    if(item.age < 35)
        arr2.push(item)
})
console.log("Young2", arr2);






// find Min Max of employee 
//find Avg

































