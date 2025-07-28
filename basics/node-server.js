// Imports Node.js’s built-in http module.
const http = require('http');

// Creates a new HTTP server. Takes a callback function as an argument. Runs every time the server receives a request.
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Sets the HTTP status code to 200 OK.
  res.setHeader('Content-Type', 'text/plain'); // Sets the response header to indicate that the content is plain text.
  res.end('Hello, World!\n'); // Ends the response and sends "Hello, World!\n" to the client.
});

// Starts the server and makes it listen on port 3000.
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});