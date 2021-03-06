// Load the http module to create an http server.
var http = require('http');
var port = process.env.PORT || 8080;
var host = '127.0.0.1';

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello UA!!! How are you 2??\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(port);

// Put a friendly message on the terminal
console.log("Server running");
