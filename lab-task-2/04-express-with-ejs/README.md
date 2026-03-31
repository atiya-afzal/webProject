# 04-express-with-ejs

This project is a basic demonstration of using Express.js with the EJS (Embedded JavaScript) templating engine.

## Features Covered

- Initializing an Express application.
- Setting up EJS as the view engine for rendering HTML pages dynamically.
- Serving static files (like CSS, images, and client-side JavaScript) from a `public` directory.
- Setting up basic routing for different endpoints (`/` and `/contact-us`).

## Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

## Installation

1. Clone or download this project.
2. Navigate into the project directory:
   ```bash
   cd 04-express-with-ejs
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

## Running the Application

To start the server, run the following command in the project directory:

```bash
node server.js
```

### Local Testing with Nodemon
If you are testing the application locally and want the server to automatically restart when you make changes, you can use `nodemon`.

First, install `nodemon` globally (if you haven't already):
```bash
npm install -g nodemon
```
*Alternatively, you can install it as a development dependency:*
```bash
npm install --save-dev nodemon
```

Once installed, you can start the server with:

```bash
nodemon server.js
```
*(If you didn't install it globally, you can use `npx nodemon server.js`)*

The server will start on port 3000. You can visit the following URLs in your browser:
- Homepage: [http://localhost:3000/](http://localhost:3000/)
- Contact Us page: [http://localhost:3000/contact-us](http://localhost:3000/contact-us)
- Hobbies page: [http://localhost:3000/hobbies](http://localhost:3000/hobbies)

## How EJS Works (For Beginners)

EJS (Embedded JavaScript) is a simple templating engine that lets you generate HTML markup with plain JavaScript. Here's a quick overview of how it works in this project:

- **Views Folder**: By default, Express looks for your EJS templates (your web pages) in the `views/` directory.
- **Rendering**: When you call a method like `res.render("homepage")` in `server.js`, Express finds `views/homepage.ejs`, executes any JavaScript embedded inside it, and converts it into standard HTML.
- **Client Side**: The browser only receives the final HTML. It never sees your EJS tags (which look like `<% %>` or `<%= %>`). This allows you to dynamically build pages on the server before sending them to the user.

## The `public` Folder & Static Routes

The `public` folder is used to store static assets that your application needs to serve directly to the client. These files are typically:

- **CSS Stylesheets** to style your web pages.
- **Client-Side JavaScript** for browser interactions.
- **Images** and other media files.

In `server.js`, we use a built-in Express middleware to create a "public route":

```javascript
app.use(express.static("public"));
```

This single line tells Express to expose the *contents* of the `public` directory. When the client browser makes a request for a file, Express will automatically look inside the `public` folder to see if it exists.

### How to Set Paths for CSS, JS, and Images

Because these files are served from the root (`/`) of your application, you **should not** include `/public/` in your URLs. You reference the files as if the `public` folder itself is the main root container.

For example, if you organize your folder like this:
- `public/css/style.css`
- `public/js/app.js`
- `public/logo.png`

You would link to them in your EJS templates (e.g., inside the `<head>` or `<body>` of `views/homepage.ejs`) with absolute paths:

**Linking a CSS file:**
```html
<link rel="stylesheet" href="/css/style.css">
```

**Linking Client-Side JS:**
```html
<script src="/js/app.js"></script>
```

**Adding an Image:**
```html
<img src="/logo.png" alt="My Website Logo">
```

*Note the leading forward slash (`/`). It ensures the browser always looks for these files exactly at the root of your server (e.g., `http://localhost:3000/css/style.css`), regardless of what page URL the user is currently on.*
