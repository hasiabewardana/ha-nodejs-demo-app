const http = require("http"); // Import the http module
const fs = require("fs"); // Import the fs module for file system operations

// Create an HTTP server
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  // Check if the request URL is the root
  if (url === "/") {
    // If it is, respond with an HTML form
    res.write("<html>");
    res.write("<head>Enter Message<titile></title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Submit</button></from></body>"
    );
    res.write("</html>");
    res.end();
  }
  // Check if the request URL is for the message endpoint and the method is POST
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk.toString()); // Log the received data chunk
      body.push(chunk); // Push the chunk into the body array
    });
    req.on("end", () => {
      const message = Buffer.concat(body).toString().split("=")[1]; // Concatenate the body array and extract the message
      fs.writeFileSync("message.txt", message);
    });
    res.statusCode = 302; // Set the status code to 302 for redirection
    res.setHeader("Location", "/"); // Set the Location header to redirect to the root
    return res.end(); // End the response
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
