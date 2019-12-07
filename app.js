const fs = require('fs');
var inputFileName = process.argv[2];
var outputFileName = process.argv[3];
console.log("Reading file from ", inputFileName)
var rawJson = fs.readFileSync(inputFileName)
var data = JSON.parse(rawJson);
var ages = data.map(item => item.age);
var sum = ages.reduce((accum, item) => (item + accum), 0)
var report = {
    min: ages.reduce((min, item) => Math.min(item, min), ages[0]),
    max: ages.reduce((max, item) => Math.max(item, max), ages[0]),
    avg: (sum/ages.length),
    count: ages.length
}
//console.log(report);
//going to write file
fs.writeFile(outputFileName, JSON.stringify(report), err =>{
    //will run when error  or finish
    if(err){
        throw error;
    }else{
        console.log('Done write file');
    }
});