// Require (import) the 'logger.js' file from the same directory using the './' relative path.
// When we require a file, Node.js runs the code inside it and returns whatever was assigned to 'module.exports'.
// We store that returned value (which is an object containing 'sayHello') in the 'logger' variable.
let logger = require("./logger");

// You can uncomment the line below to see what the 'logger' object looks like:
// console.log(logger);

// Access the 'sayHello' function from the 'logger' object and call it, passing a string as the argument.
logger.sayHello("Saying Hello from useLogger File");
