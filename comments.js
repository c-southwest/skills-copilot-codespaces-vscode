// Create web server
// 1. Create a web server
// 2. Read the comments.json file
// 3. Send the comments.json file to the client

// 1. Create a web server
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // 2. Read the comments.json file
  fs.readFile('comments.json', 'utf-8', (err, data) => {
    // 3. Send the comments.json file to the client
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});