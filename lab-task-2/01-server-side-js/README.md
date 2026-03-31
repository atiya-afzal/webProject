# 01 - First Server-Side JavaScript

Welcome to your first server-side JavaScript project! This directory provides a simple introduction to running JavaScript outside of the web browser using Node.js.

## Files Included

- `hello-world.js`: A simple JavaScript file demonstrating basic output and highlighting a key difference between client-side and server-side environments.
- `index.html`: A basic HTML file that loads `hello-world.js` in a browser environment to show how they compare.

## How to Run the Code

### 1. Running on the Server (Node.js)
To run the JavaScript file using Node.js (server-side), open your terminal, navigate to this directory, and run the following command:

```bash
node hello-world.js
```

You should see `Hello Class` printed in your terminal. 

**Note on Server-Side JavaScript:**
If you look inside `hello-world.js`, you'll see a commented-out line: `// console.log(document);`. If you uncomment this line and run the script with Node.js again, it will cause an error. This is because the `document` object (which represents the web page) doesn't exist on a server!

### 2. Running in the Browser (Client-side)
To see how the same code behaves in a typical web browser environment, open the `index.html` file in any web browser. Then, open the Developer Tools (usually `F12` or `Right-click` -> `Inspect`) and check the **Console** tab. You'll see the message printed there. In the browser, the `document` object *is* defined.
