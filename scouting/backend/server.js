const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();

// Middleware to handle CORS (allowing requests from any origin)
app.use(cors());

// Middleware to parse incoming JSON data
app.use(express.json());

// Serve the main HTML page
app.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, '../frontend/scouting.html'), (err, content) => {
    if (err) {
      res.status(500).send('Error loading page');
    } else {
      res.setHeader('Content-Type', 'text/html');
      res.send(content);
    }
  });
});

// Serve the JavaScript file
app.get('/script.js', (req, res) => {
  fs.readFile(path.join(__dirname, '../frontend/script.js'), (err, content) => {
    if (err) {
      res.status(500).send('Error loading script');
    } else {
      res.setHeader('Content-Type', 'application/javascript');
      res.send(content);
    }
  });
});

// Handle POST requests to /submit
app.post('/submit', (req, res) => {
  const body = JSON.stringify(req.body);

  // Append each JSON object followed by a newline
  const dataToAppend = body.trim() + '\n'; 

  fs.appendFile('database.txt', dataToAppend, err => {
    if (err) {
      console.error(err);
      res.status(500).send('Failed to save data');
    } else {
      console.log('Data appended successfully:', body);
      res.status(200).send('Data received successfully!');
    }
  });
});

// Server IP and port configuration
const ip =  '192.168.1.162';
const port = 3001;

app.listen(port, ip, () => {
  console.log(`Server running at http://${ip}:${port}/`);
});
