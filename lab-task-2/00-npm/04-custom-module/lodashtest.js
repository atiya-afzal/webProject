// use 'npm install' to install third-party modules into the 'node_modules' directory.
// Require the external 'lodash' library. Node.js retrieves it from 'node_modules'.
let lodash = require("lodash");

// Use the 'concat' method from lodash to combine two multiple arrays into one.
// Here we are combining [1, 2, 3] and [4, 5, 6]
let arr = lodash.concat([1, 2, 3], [4, 5, 6]);

// Print the resulting combined array to the console
console.log(arr);
