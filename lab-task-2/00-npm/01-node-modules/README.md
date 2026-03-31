# Node.js Modules Demonstration

Welcome to your first steps with Node.js! This simple project demonstrates one of the most important concepts in Node.js: **Modules**.

A module is basically a JavaScript file containing code that can be exported and reused in other files. This allows us to break down our application into smaller, manageable pieces instead of having one giant file.

## Files Included

### 1. `logger.js`
This file acts as our custom module. 
- It defines a function called `sayHello` that prints a message to the console.
- It introduces some useful Node.js built-in variables (like `__dirname` and `__filename`) as commented code.
- At the very end, it uses `module.exports` to make the `sayHello` function available outside of this file.

### 2. `useLogger.js`
This file is the starting point of our application.
- It uses the built-in `require()` function to pull in the code from `logger.js`.
- It then uses the `sayHello` function that we imported.

## How to Run the Code

To see this code in action, you need to have [Node.js](https://nodejs.org/) installed on your computer.

1. Open your terminal (or command prompt).
2. Navigate to this folder (`01-node-modules`).
3. Run the following command:

```bash
node useLogger.js
```

### Expected Output

When you run the command above, you should see the following text printed in your terminal:

```
Inside sayHello Func
Saying Hello from useLogger File
```

## Things to Experiment With

Want to learn more? Try these exercises:
1. Open `logger.js` and uncomment the line `// console.log("Directory: " + __dirname);`. Run `node useLogger.js` again to see what prints out!
2. Open `useLogger.js` and uncomment `// console.log(logger);` to see exactly what gets imported from `logger.js`.
3. Try adding a new function in `logger.js` (e.g., `sayGoodbye`), export it, and then call it from `useLogger.js`.
