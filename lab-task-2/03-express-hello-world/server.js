// Import the express library (which helps us create web servers easily)
let express = require("express");

// Create our Express application (this is our actual web server)
let server = express();

// Define a route for the "/contact-us" URL
// When a user visits "http://localhost:3000/contact-us", this function runs
server.get("/contact-us", function (req, res) {
  // 'req' represents the incoming request from the user
  // 'res' represents the response we will send back

  // Send the text "Contact Us" back to the user's browser
  return res.send("Contact Us");
});

// Define a route for the root URL ("/")
// When a user visits "http://localhost:3000/" (the main page), this function runs
server.get("/", function (req, res) {
  // Send the text "Home Page " back to the user's browser
  return res.send("Home Page ");
});

// Start the server and tell it to listen for requests on port 3000
server.listen(3000, function () {
  // Print a message to the console to let us know the server is running successfully
  console.log("Server Started at localhost:3000");
});
