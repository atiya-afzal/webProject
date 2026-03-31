// Import the core 'fs' (file system) module from Node.js
// This module provides functions to interact with the file system (files and directories)
let fs = require("fs");

// -------- SYNCHRONOUS FILE READING -------- //
// NOT RECOMMENDED for most use cases because it blocks the execution of the rest of the code
// until the file system operation is completely finished.

console.log("1. Calling readdirSync func...");

// readdirSync reads the contents of a directory synchronously.
// The "." represents the current directory.
// The code will STOP here until it finishes reading all files in the current directory.
let files = fs.readdirSync(".");

// Print the array of file and folder names found in the directory
console.log("2. Files found:", files);

// This will only print AFTER readdirSync has completely finished
console.log("3. readdirSync func finished");
