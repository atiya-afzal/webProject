const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

const Product = require("./models/Products");

// PRODUCTS ROUTE
app.get("/products", async (req, res) => {

    const { page = 1, search, category, minPrice, maxPrice } = req.query;

    const query = {};

    // SEARCH by name
    if (search) {
        query.name = { $regex: search, $options: "i" };
    }

    // FILTER by category
   if (category) {
    query.category = { $regex: new RegExp("^" + category.trim() + "$", "i") };
}

    // PRICE RANGE
    if (minPrice || maxPrice) {
        query.price = {};
        if (minPrice) query.price.$gte = Number(minPrice);
        if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    const limit = 8;
    const skip = (page - 1) * limit;

    const products = await Product.find(query)
        .skip(skip)
        .limit(limit);

    const total = await Product.countDocuments(query);

    res.render("products", {
        products,
        currentPage: Number(page),
        totalPages: Math.ceil(total / limit),
        search: search || "",
        category: category || "",
        minPrice: minPrice || "",
        maxPrice: maxPrice || ""
    });
});
// monog conenction 
mongoose.connect("mongodb://127.0.0.1:27017/ecommerceDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));




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

