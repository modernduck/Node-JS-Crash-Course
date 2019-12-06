//this is how we use comment
console.log("Hello World") //no need to put semi colon and code still work this is javascript
console.log("A", (3 + 5 )); // another way to use console.log

var a = 5;//this is how vairable is declare
a = "sompop" // it could change to any type 

var b = [1,2, 3, 4, 5, 6] // this is how array is declare

//how to create object data structure
var c = {
    name : "Sompop",
    age : 25,

}

var members = [
    { name : "Sompop", age:25 },
    { name : "Milk", age:30 },
    { name : "Johny", age:35 },
    { name : "Lovely", age:15 },
]

//example of using for
for(var i = 0; i < members.length ; i++){
    console.log(members[i]);
}

//which if using with array we could use
members.forEach(function(member, index){
    console.log(index, member);
})

//which if we want to display member who age > 30
console.log("-----");
members.forEach(function(member, index){
    if(member.age > 30)
        console.log(member);
})
//if want to add array it could be like
members[members.length ] = { name:"New guy", age: 30 }
console.log(members)
//or use function that come with array
members.push({ name:"New girl", age: 32 })
console.log(members)