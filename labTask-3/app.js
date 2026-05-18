const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const multer = require("multer");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

const User = require("./models/User");
const Product = require("./models/Products");

const app = express();

// basic middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// session
app.use(session({
    secret: "popbarsecret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: "mongodb://127.0.0.1:27017/ecommerceDB"
    })
}));

// flash 
app.use(flash());

// global var
app.use((req, res, next) => {
    res.locals.currentUser = req.session.user;  
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});



// multer config
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage });

// data connection
mongoose.connect("mongodb://127.0.0.1:27017/ecommerceDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

function isAdmin(req, res, next) {
    if (!req.session.user || req.session.user.role !== "admin") {
        return res.send("Access Denied");
    }
    next();
}

// REGISTER PAGE
app.get("/register", (req, res) => {
    res.render("register");
});

// REGISTER POST
app.post("/register", async (req, res) => {

    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        req.flash("error", "Email already exists");
        return res.redirect("/register");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        name,
        email,
        password: hashedPassword,
role: email === "admin@gmail.com" ? "admin" : "customer"    });

    await newUser.save();

    req.flash("success", "Registration successful");
    res.redirect("/login");
});
// LOGIN PAGE
app.get("/login", (req, res) => {
    res.render("login");
});

// LOGIN POST
app.post("/login", async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      req.flash("error", "Invalid email or password");
        return res.redirect("/login");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
          req.flash("error", "Invalid email or password");
        return res.redirect("/login");
    }

    // ✅ STORE FULL USER IN SESSION (IMPORTANT)
    req.session.user = {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
    };

    // ROLE BASED REDIRECT
    if (user.role === "admin") {
        return res.redirect("/admin");
    }

    res.redirect("/");
});

// LOGOUT
app.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/");
    });
});
// profile
app.get("/profile", (req, res) => {

    if (!req.session.user) {

        req.flash("error", "Please login first");

        return res.redirect("/login");
    }

    res.render("profile", {
        user: req.session.user
    });

});
// product routes
app.get("/products", async (req, res) => {

    const { page = 1, search, category, minPrice, maxPrice } = req.query;

    const query = {};

    if (search) {
        query.name = { $regex: search, $options: "i" };
    }

    if (category) {
        query.category = { $regex: new RegExp("^" + category.trim() + "$", "i") };
    }

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

// admin routes

app.get("/admin",isAdmin, async (req, res) => {
    const products = await Product.find({});
    res.render("admin/dashboard", { products });
});

app.get("/admin/add",isAdmin, (req, res) => {
    res.render("admin/addProduct");
});

app.post("/admin/add",isAdmin, upload.single("image"), async (req, res) => {

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

app.get("/admin/delete/:id",isAdmin, async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect("/admin");
});

app.get("/admin/edit/:id", isAdmin,async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.render("admin/editProduct", { product });
});

app.post("/admin/update/:id",isAdmin, async (req, res) => {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/admin");
});

// home route
app.get("/", (req, res) => {
    res.render("index");
});

// server start
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});