// Define a function named 'sayHello' that takes one parameter called 'message'
function sayHello(message) {
  // Print a string to the console to show we are inside the function
  console.log("Inside sayHello Func");
  // Print the value of the 'message' parameter that was passed to the function
  console.log(message);
}

// Below are some examples of Node.js built-in variables (globals).
// They are currently commented out, but you can uncomment them to see what they do!

// Calling the function directly within this file:
// sayHello("Hello my Web Dev Class");

// '__dirname' gives you the absolute path of the directory containing this file:
// console.log("Directory: " + __dirname);

// '__filename' gives you the absolute path of this file itself:
// console.log("File: " + __filename);

// 'exports' is an object used to expose functions/variables to other files:
// console.log("exports: " + exports);

// Export the 'sayHello' function so it can be 'required' and used in other files.
// module.exports is the object that gets returned when another file requires this module.
module.exports = {
  sayHello, // This is a shorthand for sayHello: sayHello
};
