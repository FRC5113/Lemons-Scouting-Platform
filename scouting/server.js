const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    fs.readFile(path.join(__dirname, 'scouting.html'), (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading page');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    });
  } else if (req.url === '/script.js' && req.method === 'GET') {
    fs.readFile(path.join(__dirname, 'script.js'), (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading script');
      } else {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        res.end(content);
      }
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000, '192.168.1.162', () => {
  console.log('Server running at http://192.168.1.162:3000/');
});
