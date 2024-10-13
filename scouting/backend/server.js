const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    fs.readFile(path.join(__dirname, '../frontend/scouting.html'), (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading page');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    });
  } else if (req.url === '/script.js' && req.method === 'GET') {
    fs.readFile(path.join(__dirname, '../frontend/script.js'), (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading script');
      } else {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        res.end(content);
      }
    });
  } else if (req.url === '/submit' && req.method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString(); // Convert Buffer to string
    });
    
    req.on('end', () => {
      // Append each JSON object followed by a newline
      const dataToAppend = body.trim() + '\n'; 
      fs.appendFile('database.txt', dataToAppend, err => {
        if (err) {
          console.error(err);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Failed to save data');
        } else {
          console.log('Data appended successfully');
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('Data received successfully!');
        }
      });

      console.log('Received data:', body);
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

const ip = '192.168.1.162';
const port = '3000'
server.listen(3000, ip, () => {
  console.log(`Server running at http://${ip}:${port}/`);
});
