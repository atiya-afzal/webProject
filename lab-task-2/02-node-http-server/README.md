# Beginner Node.js HTTP Server

This is a very basic example of a web server built using Node.js. It demonstrates how to use the built-in `http` module to handle different URLs (routes) and provides an understanding of how requests (`req`) and responses (`res`) work.

## Prerequisites

- Ensure you have **Node.js** installed on your computer. You can download it from [nodejs.org](https://nodejs.org/).

## How to Run the Server

1. Open your terminal or command prompt.
2. Navigate to this project's folder.
3. Run the following command:
   ```bash
   node server.js
   ```
4. You should see a message in your terminal saying:
   `Server Started. Open your browser and access at http://localhost:3000`

## Testing the Routes

Once the server is running, open your web browser and try visiting these URLs:

- **Home Page:** [http://localhost:3000/](http://localhost:3000/) - You should see "Hello From server".
- **About Us Page:** [http://localhost:3000/about-us](http://localhost:3000/about-us) - You should see "About Us".
- **Any Other Page:** [http://localhost:3000/contact](http://localhost:3000/contact) or any random letters - You should see "Page Not Found" since we didn't define it in the code!

## Stopping the Server

To stop the server from running, go back to your terminal and press `Ctrl + C` (or `Cmd + C` on Mac).

## Understanding the Code

The code inside `server.js` contains simple, step-by-step explanations written in plain English called **comments**. If you are new to Node.js, please read those comments to understand exactly how the web server functions!
