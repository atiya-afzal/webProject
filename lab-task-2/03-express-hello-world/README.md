# Express Hello World

Welcome to your first Express.js web server! This is a beginner-friendly project designed to show you how a basic Node.js web server works using the Express framework.

## What is Express?
Express is a popular framework for Node.js that makes it much easier to build web applications and APIs. It handles a lot of the complex background work, allowing you to focus on creating routes and sending responses to users.

## Prerequisites
Before you begin, make sure you have:
- [Node.js](https://nodejs.org/) installed on your computer.

## Project Setup

1. **Install dependencies:**
   Open your terminal/command prompt, navigate to this folder (`03-express-hello-world`), and run the following command to install Express:
   ```bash
   npm install express
   ```
   *(Note: This project might already have a `node_modules` folder or `package-lock.json` file. Running `npm install` ensures everything is set up correctly based on the `package.json` file).*

2. **Start the server:**
   In your terminal, run the following command to start the web server:
   ```bash
   node server.js
   ```
   You should see the message: `Server Started at localhost:3000`

## How to Test the Application

Once your server is running, you can test it by opening your web browser and visiting the following URLs:

- **Home Page:** Go to [http://localhost:3000/](http://localhost:3000/). You should see the text "Home Page ".
- **Contact Us Page:** Go to [http://localhost:3000/contact-us](http://localhost:3000/contact-us). You should see the text "Contact Us".

## Understanding the Code (`server.js`)

Open the `server.js` file to see how it works. We have added detailed comments to explain what each line does. 

Here's a brief summary of the steps involved:
1. **Importing Express:** We bring the Express library into our project so we can use its tools.
2. **Creating the Server:** We initialize our Express application.
3. **Creating Routes (`server.get`):** We tell the server what to do when a user visits specific URLs (like `/` or `/contact-us`). The server listens for a "GET" request (which is what browsers send when you want to view a page).
4. **Sending Responses (`res.send`):** We use this command inside our routes to send text back to the browser.
5. **Starting the Server (`server.listen`):** This command turns the server on and keeps it running on a specific "port" (in this case, port 3000), patiently waiting for users to connect.

Happy coding!
