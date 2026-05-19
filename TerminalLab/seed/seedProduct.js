const mongoose = require("mongoose");
const Product = require("../models/Products");

mongoose.connect("mongodb://127.0.0.1:27017/ecommerceDB");


const products = [

    // 🍦 ICE CREAM
    {
        name: "Chocolate Fudge Ice Cream",
        price: 500,
        category: "Ice Cream",
        rating: 4.8,
        stock: 25,
        image: "https://loremflickr.com/500/500/ice%20cream,chocolate"
    },
    {
        name: "Strawberry Delight",
        price: 450,
        category: "Ice Cream",
        rating: 4.6,
        stock: 30,
        image: "https://loremflickr.com/500/500/ice%20cream,strawberry"
    },
    {
        name: "Vanilla Classic Scoop",
        price: 300,
        category: "Ice Cream",
        rating: 4.5,
        stock: 50,
        image: "https://loremflickr.com/500/500/ice%20cream,vanilla"
    },
    {
        name: "Mango Mania",
        price: 550,
        category: "Ice Cream",
        rating: 4.7,
        stock: 20,
        image: "https://loremflickr.com/500/500/ice%20cream,mango"
    },
    {
        name: "Cookies & Cream",
        price: 600,
        category: "Ice Cream",
        rating: 4.9,
        stock: 18,
        image: "https://loremflickr.com/500/500/ice%20cream,cookies"
    },

    // 🍨 CUP DESSERTS
    {
        name: "Chocolate Cup Dessert",
        price: 600,
        category: "Cup",
        rating: 4.4,
        stock: 22,
        image: "https://loremflickr.com/500/500/dessert,cup,chocolate"
    },
    {
        name: "Berry Cup Delight",
        price: 500,
        category: "Cup",
        rating: 4.3,
        stock: 20,
        image: "https://loremflickr.com/500/500/dessert,berry"
    },

    // 🍫 CHOCOLATE
    {
        name: "Dark Chocolate Bar",
        price: 450,
        category: "Chocolate",
        rating: 4.7,
        stock: 40,
        image: "https://loremflickr.com/500/500/chocolate,dark"
    },
    {
        name: "Milk Chocolate Bliss",
        price: 450,
        category: "Chocolate",
        rating: 4.6,
        stock: 35,
        image: "https://loremflickr.com/500/500/chocolate,milk"
    },

    // 🍓 FRUIT
    {
        name: "Fruit Paradise Bowl",
        price: 600,
        category: "Fruit",
        rating: 4.5,
        stock: 18,
        image: "https://loremflickr.com/500/500/fruit,bowl"
    },
    {
        name: "Strawberry Fresh Bowl",
        price: 500,
        category: "Fruit",
        rating: 4.6,
        stock: 22,
        image: "https://loremflickr.com/500/500/strawberry,fruit"
    },

    // 🥤 MILKSHAKES
    {
        name: "Chocolate Milkshake",
        price: 750,
        category: "Milkshake",
        rating: 4.8,
        stock: 30,
        image: "https://loremflickr.com/500/500/milkshake,chocolate"
    },
    {
        name: "Vanilla Milkshake",
        price: 450,
        category: "Milkshake",
        rating: 4.5,
        stock: 28,
        image: "https://loremflickr.com/500/500/milkshake,vanilla"
    },
    {
        name: "Mango Milkshake",
        price: 500,
        category: "Milkshake",
        rating: 4.7,
        stock: 25,
        image: "https://loremflickr.com/500/500/milkshake,mango"
    },

    // 🍨 SUNDAE
    {
        name: "Chocolate Sundae",
        price: 550,
        category: "Sundae",
        rating: 4.9,
        stock: 15,
        image: "https://loremflickr.com/500/500/sundae,chocolate"
    },
    {
        name: "Caramel Sundae",
        price: 650,
        category: "Sundae",
        rating: 4.6,
        stock: 18,
        image: "https://loremflickr.com/500/500/sundae,caramel"
    },

    // 🍪 DESSERTS
    {
        name: "Chocolate Waffle",
        price: 700,
        category: "Dessert",
        rating: 4.8,
        stock: 12,
        image: "https://loremflickr.com/500/500/waffle,chocolate"
    },
    {
        name: "Ice Cream Waffle Bowl",
        price: 800,
        category: "Dessert",
        rating: 4.9,
        stock: 10,
        image: "https://loremflickr.com/500/500/waffle,icecream"
    }
];
async function seedData() {
    await Product.deleteMany({});
    await Product.insertMany(products);

    console.log("Ice cream products inserted");
    mongoose.connection.close();
}

seedData();