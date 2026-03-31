// 1. Require the built-in 'http' module
// Node.js provides this module to allow us to create a web server.
// Think of a module like a toolbox we can use to build our server.
let http = require("http");

// 2. Create the web server
// We use the createServer method which takes a callback function.
// This function runs every time a user makes a request to our server from their browser.
// 'req' stands for request (what the user asks for, like a URL)
// 'res' stands for response (what we send back to the user, like HTML)
let server = http.createServer(function (req, res) {
  // Log the requested URL to the terminal so we can see what the user asked for
  console.log("Requested URL: " + req.url);

  // 3. Handle different routes (URLs)
  // If the user visits the home page ("/")
  if (req.url == "/") {
    return res.end("<h1>Hello From server</h1>"); // Send this HTML back
  }

  // If the user visits the about page ("/about-us")
  if (req.url == "/about-us") {
    return res.end("<h1>About Us</h1>"); // Send this HTML back
  }

  // 4. Handle Page Not Found (404)
  // If the user visits a URL we haven't defined above, we send a "Page Not Found" message.
  return res.end("<h1>Page Not Found</h1>");
});

// 5. Start the server
// We tell our server to listen for requests on port 3000.
// Port 3000 is like a specific door on our computer to let web traffic in.
server.listen(3000, function () {
  console.log(
    "Server Started. Open your browser and access at http://localhost:3000",
  );
});
