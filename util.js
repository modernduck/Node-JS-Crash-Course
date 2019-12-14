var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key4WtzwPN5lF6r5X'}).base('appy6nsF7qvW7OUp0');

exports.getEmployees = new Promise((resolve, reject) => {
    var employees = [];//add - 1
    base('Employee').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 3,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
    
        records.forEach(function(record) {
          //  console.log('Retrieved', record.get('Name')); // remove - 4
            //add - 2
            employees.push({
                name: record.get('Name'),
                age: record.get('Age')
            })
        });
    
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
    
    }, function done(err) {
        if (err) { console.error(err); return; }
        //add - 3
        resolve(employees)
    });
})