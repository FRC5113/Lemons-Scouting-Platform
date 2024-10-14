const fs = require('fs').promises;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let database;

fs.readFile('../backend/database.txt', 'utf8')
    .then(data => {
        database = data;

        // Split the database on the newline to handle multiple JSON objects
        const parsed = database.split('\n').filter(line => line.trim() !== '');
        const parsedA = [];

        for (let i = 0; i < parsed.length; i++) {
            try {
                parsedA.push(JSON.parse(parsed[i]));
            } catch (error) {
                console.error("Error parsing JSON:", error);
            }
        }

        readline.question('What team would you like to know about: ', team => {
            let correctTeam = null;
            for (let i = 0; i < parsedA.length; i++) {
                if (parsedA[i].teamName === team) {
                    correctTeam = parsedA[i];
                    break;
                }
            }

            if (correctTeam) {
                console.log(`Here is the data about team ${team}:`);
                console.log(correctTeam);
            } else {
                console.log(`No data found for team ${team}.`);
            }

            readline.close();
        });
    })
    .catch(err => {
        console.error(err);
    });
