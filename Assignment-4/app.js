const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const multer = require("multer");

const app = express();

const Product = require("./models/Products");
// multer
const storage = multer.diskStorage({

    destination: function(req, file, cb) {
        cb(null, "public/uploads");
    },

    filename: function(req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }

});

const upload = multer({ storage });
// lets express read input


app.use(express.urlencoded({ extended: true }));

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


// admin route
app.get("/admin", async (req, res) => {

    const products = await Product.find({});

    res.render("admin/dashboard", { products });

});

// add route
app.get("/admin/add", (req, res) => {

    res.render("admin/addProduct");

});
// del route
app.get("/admin/delete/:id", async (req, res) => {

    await Product.findByIdAndDelete(req.params.id);

    res.redirect("/admin");

});
// edit route
app.get("/admin/edit/:id", async (req, res) => {

    const product = await Product.findById(req.params.id);

    res.render("admin/editProduct", { product });

});

app.post("/admin/update/:id", async (req, res) => {

    await Product.findByIdAndUpdate(
        req.params.id,
        req.body
    );

    res.redirect("/admin");

});

app.post("/admin/add",
upload.single("image"),
async (req, res) => {

    const newProduct = new Product({

        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        rating: req.body.rating,
        stock: req.body.stock,

        image: "/uploads/" + req.file.filename
    });

    await newProduct.save();

    res.redirect("/admin");

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

