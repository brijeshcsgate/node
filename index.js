// Import the HTTP module
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1'; // Localhost
const port = 3000;            // Port to listen on

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header
  res.statusCode = 200; // Success status code
  res.setHeader('Content-Type', 'text/plain');
  
  // Send the response body
  res.end('Hello, World!\n');
});

// Make the server listen on the specified port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
