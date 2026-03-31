# Custom Modules with NPM

This is a beginner-friendly project demonstrating how to install and use a third-party module (like `lodash`) from NPM (Node Package Manager) in a Node.js project.

## Prerequisites

Before getting started, make sure you have the following installed on your computer:
- [Node.js](https://nodejs.org/) (This usually includes NPM as well)

## Getting Started

1. **Open your terminal** and navigate to this directory (`04-custom-module`).
2. **Install Dependencies:** In order to use the third-party module we need, install it via NPM:

   ```bash
   npm install
   ```

   > [!NOTE]
   > This command looks at the `package.json` file and downloads the listed dependencies (in this case, `lodash`) into a `node_modules` folder.

## Running the Code

Once the dependencies are installed, you can run the JavaScript file using node:

```bash
node lodashtest.js
```

## What happens in `lodashtest.js`?

1. **Require the module:** We include `lodash` into our file using `require("lodash")` so we can access its helpful utility functions.
2. **Use the module:** We call `lodash.concat([1, 2, 3], [4, 5, 6])` to merge two arrays together.
3. **Console Output:** The resulting concatenated array is printed to the terminal.

**Expected Output:**
```
[ 1, 2, 3, 4, 5, 6 ]
```
