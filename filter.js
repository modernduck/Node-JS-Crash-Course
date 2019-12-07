const fs = require('fs');
const { parse} = require('json2csv')
var inputFileName = process.argv[2];
var outputFileName = process.argv[3];
var rawJson = fs.readFileSync(inputFileName)
var data = JSON.parse(rawJson);

var csv = parse(data, {
    fields: ['name', 'age']
})
console.log(csv);

fs.writeFileSync(outputFileName, csv);