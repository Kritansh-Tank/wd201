const http = require("http");
const fs = require("fs");
const minimist = require("minimist");

// Parse command-line arguments
const args = minimist(process.argv.slice(2));
const port = args.port || 3000; // Default port to 3000 if not provided

// Create the server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./home.html", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error loading home page");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url === "/projects") {
    fs.readFile("./project.html", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error loading projects page");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url === "/registration") {
    fs.readFile("./registration.html", (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error loading registration page");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404);
    res.end("Page not found");
  }
});

// Start server on the specified port
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
