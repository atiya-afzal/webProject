const express = require("express");
const path = require("path");

const app = express();

// Set EJS as view engine
app.set("view engine", "ejs");

// Set views folder
app.set("views", path.join(__dirname, "views"));

// Serve static files (CSS, images)
app.use(express.static(path.join(__dirname, "public")));

// Route
app.get("/", (req, res) => {
    res.render("index");
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});