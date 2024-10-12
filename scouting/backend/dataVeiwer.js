const fs = require('fs').promises;

let database;

fs.readFile('database.txt', 'utf8')
    .then(data => {
        database = data;
        
        // Split the database on the newline to handle multiple JSON objects
        var parsed = database.split('\n');
        var parsedA = [];

        for(let i = 0; i < parsed.length; i++) {
            try {
                parsedA.push(JSON.parse(parsed[i]));
            } catch (error) {
                console.error("Error parsing JSON:", error);
            }
        }

        console.log(parsedA);
    })
    .catch(err => {
        console.error(err);
});
