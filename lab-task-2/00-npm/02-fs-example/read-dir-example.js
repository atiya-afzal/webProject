// Import the core 'fs' (file system) module from Node.js
// This module provides functions to interact with the file system (files and directories)
let fs = require("fs");

// -------- ASYNCHRONOUS FILE READING -------- //
// RECOMMENDED! This approach does NOT block the rest of the code from running.

console.log("1. Calling readdir function...");

// readdir reads the contents of a directory asynchronously.
// The "." represents the current directory.
// The second argument is a "callback function". This function will run ONLY when the reading is completely done.
let files = fs.readdir(".", function (err, result) {
  // This code inside the callback runs later!
  if (err) {
    console.log("An error occurred:", err);
  } else {
    // If there is no error (!err), print the result (the list of files)
    console.log("3. Callback finished! Files found:\n", result);
  }
});

// This line executes immediately AFTER calling readdir, BEFORE the reading is actually finished!
console.log("2. readdir func called (but it's still reading in the background...)");

// Note: The 'files' variable below will NOT contain the list of files here.
// Because the reading is happening in the background, this next line would execute
// before the files are actually retrieved. That's why we use the callback function above!
// console.log(files);
