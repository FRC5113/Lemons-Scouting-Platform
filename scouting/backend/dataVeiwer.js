const fs = require('fs').promises;

let database;

fs.readFile('database.txt', 'utf8')
    .then(data => {
        console.log('data is '+data);
        database = data;
        
        // Parse the database after it has been read
        var parsed = JSON.parse((database));
    })
    .catch(err => {
        console.error(err);
    });
